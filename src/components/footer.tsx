import { Facebook, Instagram, Utensils } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex gap-2 items-center text-lg font-semibold">
          <Utensils className="h-5 w-5" />
          <span>EasyTable</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://www.instagram.com/jpegsoftware?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61574284035906"
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 JPEGSOFT. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}