"use client";
import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  FileText,
  Globe,
  Mail,
  Phone,
  ShieldCheck,
  Trash2,
} from "lucide-react";

import LegalLayout from "@/components/legal/legal-layout";
import LegalSection from "@/components/legal/legal-section";
import Header from "@/components/header";

const DataDelation = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div>
      <Header
        isCartOpen={isCartOpen}
        onCartToggle={() => setIsCartOpen((prev) => !prev)}
      />
      <LegalLayout
        title="Data Deletion Instructions"
        description="If you wish to remove your information from Easy Bay, please follow the instructions below."
      >
        <LegalSection title="1. Your Right to Request Data Deletion">
          <div className="flex gap-3">
            <ShieldCheck className="mt-1 h-6 w-6 text-green-600" />

            <p>
              We respect your privacy. You may request the deletion of
              information associated with your use of the Easy Bay application
              at any time.
            </p>
          </div>
        </LegalSection>

        <LegalSection title="2. Information That May Be Deleted">
          <ul className="list-disc space-y-3 pl-6">
            <li>Connected Facebook Page information</li>

            <li>Stored Page Access Tokens</li>

            <li>Uploaded product information</li>

            <li>AI-generated captions and hashtags</li>

            <li>Scheduled publishing records</li>

            <li>Application configuration related to your account</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. How to Request Data Deletion">
          <div className="rounded-xl border bg-muted/30 p-6">
            <h3 className="mb-4 text-xl font-semibold">Send Us a Request</h3>

            <p className="mb-6 text-muted-foreground">
              Please send an email with the following information.
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <strong>Email Subject</strong>

                <p className="mt-2 text-muted-foreground">
                  Facebook Data Deletion Request
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <strong>Please Include</strong>

                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Your Name</li>

                  <li>Your Facebook Page Name</li>

                  <li>Facebook Page ID (if available)</li>

                  <li>Your Contact Email</li>

                  <li>Reason for Deletion (Optional)</li>
                </ul>
              </div>
            </div>
          </div>
        </LegalSection>

        <LegalSection title="4. Processing Time">
          <div className="flex gap-3">
            <Clock3 className="mt-1 h-6 w-6 text-blue-600" />

            <div>
              <p>
                We will review your request and process eligible deletion
                requests as soon as reasonably possible.
              </p>

              <p className="mt-3">
                Most requests are completed within{" "}
                <strong>7 business days</strong>.
              </p>
            </div>
          </div>
        </LegalSection>

        <LegalSection title="5. Important Notice">
          <div className="flex gap-3">
            <AlertCircle className="mt-1 h-6 w-6 text-amber-500" />

            <div className="space-y-3">
              <p>
                Certain information may be retained if required by law,
                security, fraud prevention, or legitimate business obligations.
              </p>

              <p>
                Once deletion has been completed, the removed data cannot be
                recovered.
              </p>
            </div>
          </div>
        </LegalSection>

        <LegalSection title="6. What Happens After Deletion">
          <div className="flex gap-3">
            <Trash2 className="mt-1 h-6 w-6 text-red-500" />

            <div className="space-y-3">
              <p>After successful deletion:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Stored Facebook tokens will be removed.</li>

                <li>Scheduled posts may be cancelled.</li>

                <li>Uploaded product information may be removed.</li>

                <li>
                  AI-generated content associated with your account may be
                  deleted.
                </li>

                <li>
                  You may need to reconnect your Facebook Page to use the
                  application again.
                </li>
              </ul>
            </div>
          </div>
        </LegalSection>

        <LegalSection title="7. Confirmation">
          <div className="flex gap-3">
            <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />

            <p>
              Once your request has been completed, we will send a confirmation
              email to the address provided in your request.
            </p>
          </div>
        </LegalSection>

        <LegalSection title="8. Contact Information">
          <div className="rounded-xl border bg-muted/30 p-6">
            <h3 className="mb-5 text-xl font-semibold">Easy Bay</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />

                <span>support@easybay-bd.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />

                <span>+8801521426630</span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5" />

                <a
                  href="https://easybay-bd.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  https://easybay-bd.vercel.app
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-5 w-5" />

                <span>
                  Shop No. 6,
                  <br />
                  Helal Market,
                  <br />
                  Grand Hotel Mor,
                  <br />
                  Rangpur, Bangladesh.
                </span>
              </div>
            </div>
          </div>
        </LegalSection>
      </LegalLayout>
    </div>
  );
};

export default DataDelation;
