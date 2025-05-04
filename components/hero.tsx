"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-36">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-4 max-w-3xl">
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Bienvenido a Bacano RP
            </motion.h1>
            <motion.p
              className="max-w-[600px] mx-auto text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              El mejor servidor de MTA San Andreas con experiencia de roleplay única, vehículos exclusivos y una
              comunidad increíble.
            </motion.p>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg">
                <a href="mtasa://102.129.137.140:20016">Conectar Ahora</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://discord.gg/U6mwQdtA" target="_blank" rel="noopener noreferrer">
                  Unirse al Discord
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
