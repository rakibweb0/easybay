export const PRODUCT_QUERY = `*[_type == "product" && status==true]{
  _id,
  title,
  "slug": slug.current,
  "category": categories[0]-> {
    title,
    "slug": slug.current
  },
  body,
  images,
  offerPrice,
  price,
  publishedAt,
  shortDescription,
  status,
  stock,
}`;

