import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Layout/Header'
import Home from './Layout/Home'
import Footer from './Layout/Footer'
import Contactus from './Components/Footercomp/Contactus'
import Mergedfooter from './Components/Footercomp/Mergedfooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
