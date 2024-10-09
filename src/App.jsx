import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Contact from "./components/Contato"
import Parceiros from './components/Parceiros'
import { QuemSomos } from "./components/quemSomos"
import { Missao } from "./components/missao"
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <QuemSomos />
      <Missao />
      <Parceiros/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
