import { Utensils } from 'lucide-react'

// import { Button } from './button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center text-xl font-bold">
          <Utensils className="h-6 w-6" />
          <span>EasyTable</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <a
              href="#nosotros"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Nosotros
            </a>
            <a
              href="#descripcion"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Producto
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Beneficios
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contacto
            </a>
            {/* <Button size="sm">Contactar</Button> */}
          </nav>
        </div>
      </div>
    </header>
  )
}