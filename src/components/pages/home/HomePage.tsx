import Articles from "@/components/fragments/articles/Articles"
import Features from "@/components/fragments/features/Features"
import Footer from "@/components/fragments/footer/Footer"
import Gallery from "@/components/fragments/gallery/Gallery"
import Header from "@/components/fragments/header/Header"
import Hero from "@/components/fragments/hero/Hero"
import ServicesSection from "@/components/fragments/servicesSection/ServicesSection"
import Wisata from "@/components/fragments/wisata/Wisata"


const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Wisata />
            <Features />
            <Gallery />
            <ServicesSection />
            <Articles />
            <Footer />
        </>
    )
}
export default HomePage
