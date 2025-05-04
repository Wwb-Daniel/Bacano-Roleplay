"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy } from "lucide-react"

export default function JoinSection() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <section id="join" className="py-12 md:py-24 bg-muted/40">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Únete a Bacano RP</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sigue estos pasos para unirte a la mejor experiencia de MTA San Andreas
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl pt-8 md:pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="connect" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="connect">Conectar al Servidor</TabsTrigger>
              <TabsTrigger value="discord">Unirse al Discord</TabsTrigger>
            </TabsList>
            <TabsContent value="connect">
              <Card>
                <CardHeader>
                  <CardTitle>Conectar al Servidor</CardTitle>
                  <CardDescription>Sigue estos pasos para conectarte a Bacano RP</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="server-ip">IP del Servidor</Label>
                    <div className="flex items-center space-x-2">
                      <Input id="server-ip" value="mtasa://102.129.137.140:20016" readOnly />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => copyToClipboard("mtasa://102.129.137.140:20016")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>
                      Descarga e instala MTA San Andreas desde{" "}
                      <a
                        href="https://mtasa.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        mtasa.com
                      </a>
                    </li>
                    <li>Abre MTA San Andreas</li>
                    <li>Haz clic en "Conectar" y pega la IP del servidor</li>
                    <li>¡Disfruta de la experiencia Bacano RP!</li>
                  </ol>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href="mtasa://102.129.137.140:20016">Conectar Ahora</a>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="discord">
              <Card>
                <CardHeader>
                  <CardTitle>Unirse al Discord</CardTitle>
                  <CardDescription>Únete a nuestra comunidad en Discord para estar al día</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="discord-link">Enlace de Discord</Label>
                    <div className="flex items-center space-x-2">
                      <Input id="discord-link" value="https://discord.gg/U6mwQdtA" readOnly />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => copyToClipboard("https://discord.gg/U6mwQdtA")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href="https://discord.gg/U6mwQdtA" target="_blank" rel="noopener noreferrer">
                      Unirse al Discord de Bacano RP
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
