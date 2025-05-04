"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function VideoSection() {
  const videos = [
    {
      id: "presentacion",
      title: "Presentación Bacano RP",
      url: "https://www.youtube.com/embed/wUkeWalmnzw",
    },
    {
      id: "video1",
      title: "Bacano RP Gameplay",
      url: "https://www.youtube.com/embed/hf-bRnpBf4Y",
    },
    {
      id: "video2",
      title: "Experiencia MTA",
      url: "https://www.youtube.com/embed/OyYmTjQ2mS4",
    },
    {
      id: "video3",
      title: "Jugando en Bacano RP",
      url: "https://www.youtube.com/embed/fvjAA3rk9so",
    },
  ]

  return (
    <section id="videos" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Videos del Servidor</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mira nuestros videos y descubre la experiencia Bacano RP
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-4xl pt-8 md:pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="presentacion" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {videos.map((video) => (
                <TabsTrigger key={video.id} value={video.id}>
                  {video.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {videos.map((video) => (
              <TabsContent key={video.id} value={video.id}>
                <Card>
                  <CardContent className="p-0 pt-6">
                    <div className="video-container">
                      <iframe
                        src={video.url}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
