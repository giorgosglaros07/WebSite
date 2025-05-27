import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Card from './components/Card'
import './App.css'

function App() {
 
return(
 <>
 <Navbar />
 <Hero />
 <Analytics />
    <Newsletter />
    <Card />
   <Footer />
  
 </>
 
)
}

export default App
