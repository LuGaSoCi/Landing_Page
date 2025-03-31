// import { ArrowRight } from 'lucide-react'

// import { Button } from './button'

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Optimiza la gestión de pedidos en tu restaurante
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Software intuitivo que permite a tus meseros registrar órdenes y enviarlas directamente a cocina,
                calculando automáticamente el total y generando tickets.
              </p>
            </div>
            {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1">
                Contactar <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Conocer más
              </Button>
            </div> */}
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted md:h-[450px] lg:h-[450px]">
              <img
                src="../../public/img/ImagenPublicigtaria1.jpg"
                alt="Interfaz de la aplicación EasyTable"
                width={600}
                height={450}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}