import { buildSrc, buildSrcSet } from "@sanity-image/url-builder"

type SanityAsset = {
  _ref?: string
  _id?: string
  url?: string
} | null | undefined

const baseUrl = `https://cdn.sanity.io/images/ira5a61g/production/`

export const sanityImageUrl = (asset: SanityAsset, width = 1200, height?: number) => {
  if (!asset) return ''
  if ('url' in asset && asset?.url) return asset.url
  const id = asset._ref || asset._id
  if (!id) return ''
  return buildSrc({ id, width, height, baseUrl }).src
}

export const sanityImageBlurUrl = (
  asset: SanityAsset,
  width = 100,
  height?: number,
  blur = 30,
  quality = 20
) => {
  if (!asset) return ''
  const id = asset._ref || asset._id
  if (!id) return ''
  return buildSrc({
    id,
    width,
    height,
    baseUrl,
    queryParams: {
      blur,
      q: quality,
      fm: 'jpg',
    },
  }).src
}

export const sanityImageSrcSet = (asset: SanityAsset, width = 500) => {
  if (!asset) return []
  const id = asset._ref || asset._id
  if (!id) return []
  return buildSrcSet({ id, width, baseUrl })
}
