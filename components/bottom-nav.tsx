"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Store, Calendar, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background md:hidden">
      <Link
        href="/"
        className={cn(
          "flex flex-col items-center justify-center text-xs font-medium",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        <Home className="h-5 w-5" />
        <span>Inicio</span>
      </Link>
      <Link
        href="/products"
        className={cn(
          "flex flex-col items-center justify-center text-xs font-medium",
          pathname === "/products" ? "text-primary" : "text-muted-foreground",
        )}
      >
        <Store className="h-5 w-5" />
        <span>Productos</span>
      </Link>
      <Link
        href="/services"
        className={cn(
          "flex flex-col items-center justify-center text-xs font-medium",
          pathname === "/services" ? "text-primary" : "text-muted-foreground",
        )}
      >
        <Calendar className="h-5 w-5" />
        <span>Servicios</span>
      </Link>
      <Link
        href="/profile"
        className={cn(
          "flex flex-col items-center justify-center text-xs font-medium",
          pathname === "/profile" ? "text-primary" : "text-muted-foreground",
        )}
      >
        <User className="h-5 w-5" />
        <span>Perfil</span>
      </Link>
    </nav>
  )
}

