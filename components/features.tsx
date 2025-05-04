"use client"

import { motion } from "framer-motion"
import { Car, Users, Map, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      icon: <Car className="h-10 w-10 text-primary" />,
      title: "Vehículos Exclusivos",
      description: "Disfruta de una amplia variedad de vehículos personalizados y exclusivos.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Comunidad Activa",
      description: "Únete a una comunidad amigable y activa de jugadores apasionados por el roleplay.",
    },
    {
      icon: <Map className="h-10 w-10 text-primary" />,
      title: "Mapeos Únicos",
      description: "Explora mapeos personalizados que hacen que la experiencia sea única y emocionante.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Administración Dedicada",
      description: "Contamos con un equipo de administración dedicado a mantener la mejor experiencia.",
    },
  ]

  return (
    <section id="features" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Características del Servidor</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre por qué Bacano RP es el mejor servidor de MTA San Andreas
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 pt-8 md:pt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
