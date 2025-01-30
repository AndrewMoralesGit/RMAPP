import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-1 p-2">
          <h3 className="font-semibold line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
          <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
        </CardFooter>
      </Link>
    </Card>
  )
}

