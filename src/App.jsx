import Combos from "./components/Combos.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import { waLink } from "./config/contact.js";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Combos", href: "#combos" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_URL = waLink(
  "Hola, Tecnosoluciones. Quisiera consultar por un servicio técnico.",
);

function App() {
  return (
    <>
      <Navbar links={NAV_LINKS} whatsapp={WHATSAPP_URL} />
      <main>
        <Hero whatsapp={WHATSAPP_URL} />
        <Services />
        <Combos />
        <Contact />
      </main>
      <Footer links={NAV_LINKS} />
    </>
  );
}

export default App;
