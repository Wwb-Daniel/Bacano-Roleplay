import Link from "next/link"
import Image from "next/image"
import { Youtube, Disc, InstagramIcon as TiktokIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-4">
          <Image src="/images/logo-header.png" alt="Bacano RP Logo" width={80} height={30} className="h-6 w-auto" />
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} Bacano RP. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://www.youtube.com/@daniel_13ff38" target="_blank" rel="noopener noreferrer">
            <Youtube className="h-5 w-5" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="https://discord.gg/U6mwQdtA" target="_blank" rel="noopener noreferrer">
            <Disc className="h-5 w-5" />
            <span className="sr-only">Discord</span>
          </Link>
          <Link href="https://www.tiktok.com/@lisersk" target="_blank" rel="noopener noreferrer">
            <TiktokIcon className="h-5 w-5" />
            <span className="sr-only">TikTok</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
