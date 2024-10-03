import { Product } from "@/core"
import Link from "next/link"

export interface ProductItemProps {
  product: Product
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props
  return <Link
        href={`/product/${product.id}`}
        className="flex flex-col bg-violet-dark border border-white/10"
  >
    {product.name}
  </Link>
         
}