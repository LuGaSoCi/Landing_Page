import { CheckCircle } from "lucide-react"

export function Benefits() {
  return (
    <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Ventajas y Beneficios</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿Por qué elegir EasyTable?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestro sistema ofrece ventajas competitivas para tu negocio
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Reducción de errores</h3>
            </div>
            <p className="text-muted-foreground">
              Minimiza los errores en la toma de pedidos y comunicación con cocina, mejorando la precisión en la
              preparación de platillos
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Mayor eficiencia</h3>
            </div>
            <p className="text-muted-foreground">
              Agiliza el proceso de pedidos y reduce los tiempos de espera, permitiendo atender a más clientes en menos
              tiempo
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Fácil implementación</h3>
            </div>
            <p className="text-muted-foreground">
              Sistema intuitivo que requiere mínima capacitación para tu personal, con una curva de aprendizaje muy
              corta
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Escalabilidad</h3>
            </div>
            <p className="text-muted-foreground">
              Ideal para restaurantes pequeños, medianos y cadenas con múltiples ubicaciones, adaptándose al crecimiento
              de tu negocio
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Mejora de la experiencia del cliente</h3>
            </div>
            <p className="text-muted-foreground">
              Servicio más rápido y preciso que aumenta la satisfacción de tus clientes y fomenta su fidelidad
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Optimización de recursos</h3>
            </div>
            <p className="text-muted-foreground">
              Mejor gestión del personal y reducción de costos operativos al eliminar procesos manuales y redundantes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
