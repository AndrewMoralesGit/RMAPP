import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Clock } from "lucide-react"
import type { Service } from "@/types"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card>
      <Link href={`/services/${service.id}`}>
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-1">{service.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{service.description}</p>
          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{service.duration} minutos</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="text-lg font-bold text-primary">${service.price.toFixed(2)}</p>
        </CardFooter>
      </Link>
    </Card>
  )
}

