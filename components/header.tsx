"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Random Marketplace</span>
        </Link>
        <div className="flex flex-1 items-center space-x-2">
          <div className="w-full max-w-xl flex items-center space-x-2">
            <Input type="search" placeholder="Buscar..." className="h-9 md:w-[300px] lg:w-[600px]" />
            <Button type="submit" size="sm" className="h-9">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/cart"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/cart" ? "text-foreground" : "text-foreground/60",
              )}
            >
              <ShoppingBag className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-4 p-4">
      <Link
        href="/"
        className={cn(
          "text-foreground/60 transition-colors hover:text-foreground",
          pathname === "/" && "text-foreground",
        )}
      >
        Inicio
      </Link>
      <Link
        href="/products"
        className={cn(
          "text-foreground/60 transition-colors hover:text-foreground",
          pathname === "/products" && "text-foreground",
        )}
      >
        Productos
      </Link>
      <Link
        href="/services"
        className={cn(
          "text-foreground/60 transition-colors hover:text-foreground",
          pathname === "/services" && "text-foreground",
        )}
      >
        Servicios
      </Link>
    </div>
  )
}

