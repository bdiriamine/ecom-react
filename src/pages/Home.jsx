import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductListe from '../components/ProductListe/ProductListe'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div>
       <Navbar />
       <ProductListe />
       <Footer />
    </div>
  )
}
