import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const recipientEmail = process.env.ORDER_NOTIFY_EMAIL || 'rakibce30@gmail.com'
const senderEmail = process.env.EMAIL_FROM || 'rakib@threemet.com'

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY environment variable for order email delivery.')
  }

  return new Resend(apiKey)
}

function buildEmailHtml(data: {
  customerName: string
  customerAddress: string
  customerPhone: string
  items: Array<{ product: { title: string; price: number }; quantity: number }>
  total: number
}) {
  const itemsHtml = data.items
    .map(
      (item) => `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${item.product.title}</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; text-align:right;">${item.quantity}</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; text-align:right;">$${(item.product.price * item.quantity).toFixed(2)}</td>
      </tr>`
    )
    .join('')

  return `
    <div style="font-family: system-ui, sans-serif; color: #111827;">
      <h1>New order received</h1>
      <p><strong>Name:</strong> ${data.customerName}</p>
      <p><strong>Phone:</strong> ${data.customerPhone}</p>
      <p><strong>Address:</strong><br/>${data.customerAddress.replace(/\n/g, '<br/>')}</p>
      <h2>Items</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
        <thead>
          <tr>
            <th style="text-align:left; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">Product</th>
            <th style="text-align:right; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">Qty</th>
            <th style="text-align:right; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>
      <p style="margin-top: 20px; font-size: 1.1rem;"><strong>Order total:</strong> $${data.total.toFixed(2)}</p>
    </div>
  `
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { customerName, customerAddress, customerPhone, items, total } = body

    if (!customerName || !customerAddress || !customerPhone || !items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Invalid payload. Please provide all required details.' }, { status: 400 })
    }

    const html = buildEmailHtml({
      customerName,
      customerAddress,
      customerPhone,
      items,
      total,
    })

    const resend = getResendClient()

    await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      subject: `New order from ${customerName}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Checkout email error:', error)
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to send order' }, { status: 500 })
  }
}
