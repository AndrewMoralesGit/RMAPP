import { ProductCard } from "@/components/product-card"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <section className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-primary">Productos Destacados</h2>
          <Button variant="ghost" className="text-primary">
            Ver más <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          <ProductCard
            product={{
              id: "1",
              name: "Producto de ejemplo",
              description: "Descripción del producto",
              price: 99.99,
              images: ["/placeholder.svg"],
              category: "Arte",
              creatorId: "1",
              creator: {
                id: "1",
                name: "Creador",
                email: "creador@example.com",
                role: "CREATOR",
              },
              createdAt: new Date(),
              updatedAt: new Date(),
            }}
          />
          {/* Más productos... */}
        </div>
      </section>

      <section className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-primary">Servicios Populares</h2>
          <Button variant="ghost" className="text-primary">
            Ver más <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <ServiceCard
            service={{
              id: "1",
              name: "Servicio de ejemplo",
              description: "Descripción del servicio",
              price: 49.99,
              duration: 60,
              category: "Educación",
              creatorId: "1",
              creator: {
                id: "1",
                name: "Creador",
                email: "creador@example.com",
                role: "CREATOR",
              },
              createdAt: new Date(),
              updatedAt: new Date(),
            }}
          />
          {/* Más servicios... */}
        </div>
      </section>
    </div>
  )
}

