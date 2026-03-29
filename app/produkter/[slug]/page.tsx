import { getProductBySlug } from "@/products/service";

import Page from "@/layout/Page";
import Image from "next/image";
import BuySection from "@/products/components/BuySection";

interface Props {
  params: { slug: string };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  return (
    <Page className="grid grid-cols-2 gap-3">
      <Dummy />
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold uppercase">{product.name}</h1>
        <BuySection product={product} />
      </div>
    </Page>
  );
}

function Dummy() {
  return (
    <div className="aspect-square relative border rounded-xl overflow-hidden">
      <Image src="/images/dummy/hantlar-5-kg.png" alt="Dummy Image" fill />
    </div>
  );
}
