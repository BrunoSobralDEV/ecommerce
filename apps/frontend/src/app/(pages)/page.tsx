import ProductList from "@/components/product/ProductList";

export default function Home() {
  return (
    <div className="container flex flex-col flex-1 gap-5 py-10">
      <ProductList />
    </div>
  );
}
