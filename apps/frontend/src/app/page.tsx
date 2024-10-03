import { products } from "@/core";
import ProductItem from "./components/product/ProductItem";

export default function Home() {
  return (
    <div className="container grid grid-cols-4">
      {products.map(product =>{
        return <ProductItem key={product.id} product={product} />
      })}
    </div>
  );
}
