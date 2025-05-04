"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1353155585687949352/cyrPgaHPZZFGFQKPShEk5NhDTww2tXGoR5ghKhiLTJxnVmr8j-xt11oswiOYs-VI9iEA"

export default function FormsSection() {
  const [isSubmittingStaff, setIsSubmittingStaff] = useState(false)
  const [isSubmittingCreator, setIsSubmittingCreator] = useState(false)

  const handleStaffSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmittingStaff(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      username: "Formulario Staff Bacano RP",
      embeds: [
        {
          title: "Nueva Solicitud de Staff",
          color: 3447003,
          fields: [
            {
              name: "Nombre en el Juego",
              value: formData.get("gameNameStaff") || "No especificado",
              inline: true,
            },
            {
              name: "ID en el Juego",
              value: formData.get("gameIdStaff") || "No especificado",
              inline: true,
            },
            {
              name: "Nombre en Discord",
              value: formData.get("discordNameStaff") || "No especificado",
              inline: true,
            },
            {
              name: "Experiencia en MTA",
              value: formData.get("mtaExperience") || "No especificado",
            },
            {
              name: "¿Qué harías si un jugador no sigue el rol?",
              value: formData.get("roleplayQuestion") || "No especificado",
            },
            {
              name: "¿Cómo manejarías un conflicto entre jugadores?",
              value: formData.get("conflictQuestion") || "No especificado",
            },
            {
              name: "¿Por qué quieres ser staff?",
              value: formData.get("whyStaffQuestion") || "No especificado",
            },
            {
              name: "Comando /fly",
              value: formData.get("cmdFly") || "No especificado",
            },
            {
              name: "Comando /car",
              value: formData.get("cmdCar") || "No especificado",
            },
            {
              name: "Comando /tp",
              value: formData.get("cmdTp") || "No especificado",
            },
            {
              name: "Comando /puxar",
              value: formData.get("cmdPuxar") || "No especificado",
            },
            {
              name: "Comando /wall",
              value: formData.get("cmdWall") || "No especificado",
            },
            {
              name: "Comando /vida",
              value: formData.get("cmdVida") || "No especificado",
            },
            {
              name: "¿Qué significa IOOC?",
              value: formData.get("acronymIOOC") || "No especificado",
            },
            {
              name: "¿Qué significa ER?",
              value: formData.get("acronymER") || "No especificado",
            },
            {
              name: "¿Qué significa EK?",
              value: formData.get("acronymEK") || "No especificado",
            },
            {
              name: "¿Qué significa DM?",
              value: formData.get("acronymDM") || "No especificado",
            },
            {
              name: "¿Qué significa NVVPJ?",
              value: formData.get("acronymNVVPJ") || "No especificado",
            },
            {
              name: "¿Qué significa PG?",
              value: formData.get("acronymPG") || "No especificado",
            },
            {
              name: "¿Qué significa PG2?",
              value: formData.get("acronymPG2") || "No especificado",
            },
            {
              name: "¿Qué significa MG?",
              value: formData.get("acronymMG") || "No especificado",
            },
            {
              name: "¿Qué significa CC?",
              value: formData.get("acronymCC") || "No especificado",
            },
            {
              name: "¿Qué significa CJ?",
              value: formData.get("acronymCJ") || "No especificado",
            },
            {
              name: "¿Qué significa RK?",
              value: formData.get("acronymRK") || "No especificado",
            },
            {
              name: "¿Qué significa CK?",
              value: formData.get("acronymCK") || "No especificado",
            },
            {
              name: "¿Qué significa TK?",
              value: formData.get("acronymTK") || "No especificado",
            },
            {
              name: "¿Qué significa BD?",
              value: formData.get("acronymBD") || "No especificado",
            },
            {
              name: "¿Qué significa ZZ?",
              value: formData.get("acronymZZ") || "No especificado",
            },
            {
              name: "¿Qué significa HQ?",
              value: formData.get("acronymHQ") || "No especificado",
            },
            {
              name: "¿Qué significa SK?",
              value: formData.get("acronymSK") || "No especificado",
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Solicitud enviada",
          description: "Tu solicitud para staff ha sido enviada correctamente. Te contactaremos pronto.",
        })
        event.currentTarget.reset()
      } else {
        throw new Error("Error al enviar el formulario")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor, intenta de nuevo más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmittingStaff(false)
    }
  }

  const handleCreatorSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmittingCreator(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      username: "Formulario Creador de Contenido Bacano RP",
      embeds: [
        {
          title: "Nueva Solicitud de Creador de Contenido",
          color: 15158332,
          fields: [
            {
              name: "Nombre en el Juego",
              value: formData.get("gameNameCreator") || "No especificado",
              inline: true,
            },
            {
              name: "ID en el Juego",
              value: formData.get("gameIdCreator") || "No especificado",
              inline: true,
            },
            {
              name: "Nombre en Discord",
              value: formData.get("discordNameCreator") || "No especificado",
              inline: true,
            },
            {
              name: "Plataforma",
              value: formData.get("platform") || "No especificado",
              inline: true,
            },
            {
              name: "Link del Canal",
              value: formData.get("channelLink") || "No especificado",
            },
            {
              name: "Número de Seguidores",
              value: formData.get("followers") || "No especificado",
              inline: true,
            },
            {
              name: "Frecuencia de Contenido",
              value: formData.get("frequency") || "No especificado",
              inline: true,
            },
            {
              name: "Link del Video del Servidor",
              value: formData.get("videoLink") || "No especificado",
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Solicitud enviada",
          description: "Tu solicitud como creador de contenido ha sido enviada correctamente. Te contactaremos pronto.",
        })
        event.currentTarget.reset()
      } else {
        throw new Error("Error al enviar el formulario")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor, intenta de nuevo más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmittingCreator(false)
    }
  }

  return (
    <section id="forms" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Únete a Nuestro Equipo</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Forma parte de Bacano RP como staff o creador de contenido
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
          <Tabs defaultValue="staff" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="staff">Solicitud para Staff</TabsTrigger>
              <TabsTrigger value="creator">Creadores de Contenido</TabsTrigger>
            </TabsList>
            <TabsContent value="staff">
              <Card>
                <CardHeader>
                  <CardTitle>Solicitud para Staff</CardTitle>
                  <CardDescription>Completa este formulario para aplicar como staff en Bacano RP</CardDescription>
                </CardHeader>
                <form onSubmit={handleStaffSubmit}>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="gameNameStaff">Nombre en el Juego</Label>
                        <Input id="gameNameStaff" name="gameNameStaff" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gameIdStaff">ID en el Juego</Label>
                        <Input id="gameIdStaff" name="gameIdStaff" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="discordNameStaff">Nombre en Discord</Label>
                        <Input id="discordNameStaff" name="discordNameStaff" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mtaExperience">¿Cuál es tu experiencia en MTA y roleplay?</Label>
                      <Textarea
                        id="mtaExperience"
                        name="mtaExperience"
                        placeholder="Describe tu experiencia previa en MTA y en servidores de roleplay..."
                        className="min-h-[100px]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="roleplayQuestion">
                        ¿Qué harías si un jugador no sigue las reglas de roleplay?
                      </Label>
                      <Textarea
                        id="roleplayQuestion"
                        name="roleplayQuestion"
                        placeholder="Explica cómo manejarías esta situación..."
                        className="min-h-[100px]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="conflictQuestion">¿Cómo manejarías un conflicto entre jugadores?</Label>
                      <Textarea
                        id="conflictQuestion"
                        name="conflictQuestion"
                        placeholder="Describe tu enfoque para resolver conflictos..."
                        className="min-h-[100px]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whyStaffQuestion">¿Por qué quieres ser parte del staff de Bacano RP?</Label>
                      <Textarea
                        id="whyStaffQuestion"
                        name="whyStaffQuestion"
                        placeholder="Explica tus motivaciones..."
                        className="min-h-[100px]"
                        required
                      />
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="text-lg font-medium mb-4">Conocimiento de Comandos</h3>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="cmdFly">¿Para qué sirve el comando /fly?</Label>
                          <Input id="cmdFly" name="cmdFly" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cmdCar">¿Para qué sirve el comando /car?</Label>
                          <Input id="cmdCar" name="cmdCar" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cmdTp">¿Para qué sirve el comando /tp?</Label>
                          <Input id="cmdTp" name="cmdTp" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cmdPuxar">¿Para qué sirve el comando /puxar?</Label>
                          <Input id="cmdPuxar" name="cmdPuxar" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cmdWall">¿Para qué sirve el comando /wall?</Label>
                          <Input id="cmdWall" name="cmdWall" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cmdVida">¿Para qué sirve el comando /vida?</Label>
                          <Input id="cmdVida" name="cmdVida" required />
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="text-lg font-medium mb-4">Conocimiento de Acrónimos de Roleplay</h3>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="acronymIOOC">¿Qué significa IOOC?</Label>
                          <Input id="acronymIOOC" name="acronymIOOC" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymER">¿Qué significa ER?</Label>
                          <Input id="acronymER" name="acronymER" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymEK">¿Qué significa EK?</Label>
                          <Input id="acronymEK" name="acronymEK" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymDM">¿Qué significa DM?</Label>
                          <Input id="acronymDM" name="acronymDM" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymNVVPJ">¿Qué significa NVVPJ?</Label>
                          <Input id="acronymNVVPJ" name="acronymNVVPJ" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymPG">¿Qué significa PG?</Label>
                          <Input id="acronymPG" name="acronymPG" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymPG2">¿Qué significa PG2?</Label>
                          <Input id="acronymPG2" name="acronymPG2" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymMG">¿Qué significa MG?</Label>
                          <Input id="acronymMG" name="acronymMG" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymCC">¿Qué significa CC?</Label>
                          <Input id="acronymCC" name="acronymCC" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymCJ">¿Qué significa CJ?</Label>
                          <Input id="acronymCJ" name="acronymCJ" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymRK">¿Qué significa RK?</Label>
                          <Input id="acronymRK" name="acronymRK" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymCK">¿Qué significa CK?</Label>
                          <Input id="acronymCK" name="acronymCK" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymTK">¿Qué significa TK?</Label>
                          <Input id="acronymTK" name="acronymTK" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymBD">¿Qué significa BD?</Label>
                          <Input id="acronymBD" name="acronymBD" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymZZ">¿Qué significa ZZ?</Label>
                          <Input id="acronymZZ" name="acronymZZ" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymHQ">¿Qué significa HQ?</Label>
                          <Input id="acronymHQ" name="acronymHQ" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="acronymSK">¿Qué significa SK?</Label>
                          <Input id="acronymSK" name="acronymSK" required />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full" disabled={isSubmittingStaff}>
                      {isSubmittingStaff ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        "Enviar Solicitud"
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            <TabsContent value="creator">
              <Card>
                <CardHeader>
                  <CardTitle>Creadores de Contenido</CardTitle>
                  <CardDescription>
                    ¿Eres creador de contenido? Completa este formulario para colaborar con Bacano RP
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleCreatorSubmit}>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="gameNameCreator">Nombre en el Juego</Label>
                        <Input id="gameNameCreator" name="gameNameCreator" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gameIdCreator">ID en el Juego</Label>
                        <Input id="gameIdCreator" name="gameIdCreator" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="discordNameCreator">Nombre en Discord</Label>
                        <Input id="discordNameCreator" name="discordNameCreator" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Plataforma</Label>
                      <RadioGroup defaultValue="youtube" name="platform" className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="youtube" id="youtube" />
                          <Label htmlFor="youtube">YouTube</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="tiktok" id="tiktok" />
                          <Label htmlFor="tiktok">TikTok</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="channelLink">Link de tu Canal</Label>
                      <Input
                        id="channelLink"
                        name="channelLink"
                        placeholder="https://youtube.com/tu-canal o https://tiktok.com/@tu-usuario"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="followers">Número de Seguidores</Label>
                      <Input id="followers" name="followers" type="number" min="0" required />
                    </div>

                    <div className="space-y-2">
                      <Label>¿Con qué frecuencia subirías contenido del servidor?</Label>
                      <RadioGroup defaultValue="daily" name="frequency" className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="daily" id="daily" />
                          <Label htmlFor="daily">Diariamente</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="weekly" id="weekly" />
                          <Label htmlFor="weekly">Semanalmente</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly">Mensualmente</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="videoLink">Link de un Video del Servidor</Label>
                      <Input
                        id="videoLink"
                        name="videoLink"
                        placeholder="https://youtube.com/watch?v=xxxx o https://tiktok.com/@usuario/video/xxxx"
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Requisito: Debes subir un video jugando en Bacano RP
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full" disabled={isSubmittingCreator}>
                      {isSubmittingCreator ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        "Enviar Solicitud"
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
