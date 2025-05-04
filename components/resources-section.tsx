"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResourcesSection() {
  const resources = [
    {
      id: 1,
      title: "Sistema VIP de Run Roleplay",
      image: "/images/resource1.png",
      description: "Sistema completo de VIP con beneficios exclusivos para los jugadores premium.",
    },
    {
      id: 2,
      title: "Vehículo Koenigsegg",
      image: "/images/resource2.png",
      description: "Vehículo de alta gama con modelado exclusivo y características únicas.",
    },
    {
      id: 3,
      title: "Mapeos Exclusivos",
      image: "/images/resource3.png",
      description: "Mapeos personalizados para mejorar la experiencia de juego y roleplay.",
    },
    {
      id: 4,
      title: "Sistema de Ban",
      image: "/images/resource4.png",
      description: "Herramientas avanzadas para la gestión y moderación del servidor.",
    },
    {
      id: 5,
      title: "Sistema Spotify de Paga",
      image: "/images/resource5.webp",
      description: "Disfruta de música mientras juegas con nuestro sistema integrado de Spotify.",
    },
    {
      id: 6,
      title: "Hospital",
      image: "/images/hospital.webp",
      description: "Hospital completamente equipado para atender emergencias en el servidor.",
    },
  ]

  return (
    <section id="resources" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recursos del Servidor</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre los recursos exclusivos disponibles en Bacano RP
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 pt-8 md:pt-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardDescription className="text-base">{resource.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
