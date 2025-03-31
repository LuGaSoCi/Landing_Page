import { CheckCircle } from 'lucide-react'

export function Description() {
  return (
    <section id="descripcion" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Producto</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">EasyTable: Gestión de Pedidos Simplificada</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Una solución completa para la gestión de pedidos en restaurantes
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-muted">
                <img
                  src="../../public/img/Logo EasyTable.jpg"
                  alt="Aplicación EasyTable en uso"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground">
                EasyTable es un software especializado que permite a los meseros o usuarios registrar órdenes y 
                enviarlas a un ordenador central. La aplicación cuenta con lo siguiente:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Un menú general para buscar platillos de forma rápida y eficiente</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Un ranking de los mejores platillos para agilizar la toma de pedidos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Cálculo automático del total de la cuenta y generación de tickets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Opción para que los clientes realicen sus propios pedidos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}