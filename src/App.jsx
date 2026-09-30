import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
function App() {
  return (
    <>
      <Navbar links={['Inicio', 'Servicios', 'Contacto']} whatsapp="https://wa.me/1234567890" />
      <Hero whatsapp="https://wa.me/1234567890"/>
    </>
  )
}

export default App
 