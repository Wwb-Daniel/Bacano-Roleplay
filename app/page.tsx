import Hero from "@/components/hero"
import Features from "@/components/features"
import VideoSection from "@/components/video-section"
import JoinSection from "@/components/join-section"
import FormsSection from "@/components/forms-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Features />
      <VideoSection />
      <JoinSection />
      <FormsSection />
    </div>
  )
}
