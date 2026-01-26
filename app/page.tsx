import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Capabilities from '@/components/Capabilities'
import Industries from '@/components/Industries'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main>
            <Navigation />
            <Hero />
            <About />
            <Capabilities />
            <Industries />
            <Process />
            <Contact />
            <Footer />
        </main>
    )
}
