import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Contact from "./components/Contato"
import Parceiros from './components/Parceiros'
import { QuemSomos } from "./components/quemSomos"
import { Missao } from "./components/missao"
import './App.css'
import { DataCenter } from "./components/dataCenter"
import { FazendasConectadas } from "./components/fazendasConectadas"
import { MaqEqui } from "./components/maq-equi"
import { Rebanhos } from './components/rebanhos'
import { MicroUsinas } from "./components/microUsinas"
import { Geo } from '../src/components/geo'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <QuemSomos />
      <Missao />
      <DataCenter />
      <Rebanhos />
      <Geo />
      <MaqEqui />
      <MicroUsinas />
      <FazendasConectadas />
      <Parceiros/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
