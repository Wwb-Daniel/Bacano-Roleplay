"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function GangasSection() {
  const gangas = [
    {
      id: 1,
      name: "Ganga 1",
      image: "/images/ganga1.png",
      description: "Una de las principales gangas del servidor con vehículos exclusivos y territorio propio.",
    },
    {
      id: 2,
      name: "Ganga 2",
      image: "/images/ganga2.png",
      description: "Ganga especializada en carreras y competiciones con los mejores vehículos.",
    },
    {
      id: 3,
      name: "Ganga 3",
      image: "/images/ganga3.jpg",
      description: "Grupo de élite con los mejores vehículos y equipamiento para dominar el servidor.",
    },
  ]

  return (
    <section id="gangas" className="py-12 md:py-24 bg-muted/40">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Gangas del Servidor</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explora las diferentes gangas disponibles en Bacano RP
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-5xl pt-8 md:pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {gangas.map((ganga) => (
                <CarouselItem key={ganga.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                          <Image
                            src={ganga.image || "/placeholder.svg"}
                            alt={ganga.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="mt-4 text-xl font-bold">{ganga.name}</h3>
                        <p className="text-muted-foreground text-center mt-2">{ganga.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
