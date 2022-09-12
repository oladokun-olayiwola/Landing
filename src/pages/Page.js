import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Header from "../components/Header"
import Contact from '../components/Contact'


const Page = () => {
  return (
    <section>
      <Navbar />
      <Header/>
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </section>
  )
}

export default Page
