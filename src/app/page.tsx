import Articles from "@/components/fragments/Articles"
import Features from "@/components/fragments/Features"
import Gallery from "@/components/fragments/Gallery"
import Hero from "@/components/fragments/Hero"
import ServicesSection from "@/components/fragments/ServicesSection"
import Wisata from "@/components/fragments/Wisata"

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Wisata />
      <Features />
      <Gallery />
      <ServicesSection />
      <Articles />
    </main>
  )
}
export default HomePage
