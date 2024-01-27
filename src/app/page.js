import Image from 'next/image'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Index, { About, Contact, Main, Project, Service, Skills } from './Component/Index'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header />
      <div className='container-fluid px-5'>
        <Main />
        <About />
        <Skills />
        <Service />
        <Project />
        <Contact />

      </div>
      <Footer />
    </main>
  )
}
