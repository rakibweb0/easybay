export type SanityImageAsset = {
  _ref?: string
  _id?: string
  url?: string
}

export type SanityImage = {
  _key?: string
  _type?: string
  asset: SanityImageAsset
  hotspot?: { x: number; y: number } | null
  crop?: { top: number; bottom: number; left: number; right: number } | null
}

export type ProductType = {
  _id: string
  body?: any
  category: {title: string, slug: string}
  images?: SanityImage[]
  image?: SanityImage[]
  offerPrice?: number | null
  price: number
  publishedAt?: string
  shortDescription?: string | null
  slug: string
  status: boolean
  stock: number
  title: string
}
