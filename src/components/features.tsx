import { Laptop, Star, Users } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Características</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Funcionalidades principales</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              EasyTable está diseñado específicamente para mejorar la eficiencia operativa de tu restaurante
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Laptop className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Gestión centralizada</h3>
            <p className="text-center text-muted-foreground">
              Todas las órdenes se envían a un ordenador central para su procesamiento
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Ranking de platillos</h3>
            <p className="text-center text-muted-foreground">
              Sección especial con los platillos más populares para agilizar los pedidos
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Autoservicio</h3>
            <p className="text-center text-muted-foreground">
              Los clientes pueden realizar sus propios pedidos y solicitar asistencia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

