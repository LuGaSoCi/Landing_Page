export function About() {
    return (
      <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Nosotros</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Conoce a JPEGSOFT</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Somos una empresa dedicada a crear soluciones tecnológicas innovadoras para el sector gastronómico
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Nuestra Misión</h3>
                <p className="text-muted-foreground">
                  En JPEGSOFT nos dedicamos a transformar la experiencia de gestión en restaurantes a través de 
                  soluciones tecnológicas accesibles y fáciles de usar. Buscamos optimizar los procesos operativos 
                  para que nuestros clientes puedan enfocarse en lo que realmente importa: ofrecer excelente comida 
                  y servicio.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Nuestra Visión</h3>
                <p className="text-muted-foreground">
                  Aspiramos a ser líderes en la digitalización del sector gastronómico, creando herramientas que 
                  faciliten la transición tecnológica de restaurantes de todos los tamaños. Queremos que EasyTable 
                  se convierta en el estándar de gestión de pedidos para restaurantes en toda la región.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }