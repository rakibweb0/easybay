import ProductSection from "@/components/product-section";
import { client } from "@/lib/client";
import { PRODUCT_QUERY } from "@/lib/query/product";
import { type ProductType } from "@/lib/types";

export default async function Home() {
  const options = { next: { revalidate: 30 } };
  const products = await client.fetch<ProductType[]>(PRODUCT_QUERY, {}, options);

  console.log(products)
  return (
    <div>
      <ProductSection products={products} />
    </div>
  );
}
