import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Book } from '@/components/book'
import { Footer } from '@/components/footer'
import { CalloutCTA } from '@/components/callout-cta'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      <Book />
      <CalloutCTA />
      <Footer />
    </main>
  )
}
