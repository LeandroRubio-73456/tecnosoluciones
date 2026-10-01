import { ArrowDown, Check, MessageCircle, ShieldCheck } from "lucide-react";
import wave from "../assets/wave.svg";
import { services } from "../data/services.js";
import ButtonLink from "./ButtonLink.jsx";
import ServiceCard from "./ServiceCard.jsx";

const highlights = [
  "Atención por WhatsApp",
  "Diagnóstico antes de reparar",
  "Combos a medida",
];

// Desplazamiento escalonado de las tarjetas en escritorio (capas como en el logo)
const offsets = ["lg:mr-12", "lg:mx-6", "lg:ml-12"];

function Hero({ whatsapp }) {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="on-dark relative isolate overflow-hidden bg-primary text-white"
    >
      <div className="site-container grid items-center gap-12 pt-10 pb-32 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-20 lg:pb-40">
        <div className="flex flex-col items-start">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium ring-1 ring-white/20 ring-inset">
            <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
            Servicio técnico garantizado
          </p>

          <h1
            id="hero-titulo"
            className="mt-6 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance font-stretch-semi-expanded sm:text-5xl xl:text-6xl"
          >
            Tu equipo arreglado y con garantía.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-pretty text-white/85 sm:text-xl">
            Servicio técnico en Quito para PCs, laptops e impresoras:
            diagnóstico, reparación, mantenimiento, instalación y configuración.
            También vendemos equipos y armamos el combo que necesites.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <ButtonLink href={whatsapp} target="_blank">
              <MessageCircle className="size-5" aria-hidden="true" />
              Escribir por WhatsApp
            </ButtonLink>
            <ButtonLink href="#combos" variant="secondary">
              Ver combos
              <ArrowDown className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/85">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div aria-labelledby="hero-servicios">
          <h2 id="hero-servicios" className="sr-only">
            Lo que hacemos
          </h2>
          <ul className="flex flex-col gap-4 sm:gap-5">
            {services.map((service, i) => (
              <li key={service.title} className={offsets[i % offsets.length]}>
                <ServiceCard {...service} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="wave-scroll pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-36 bg-repeat-x opacity-20"
        style={{
          backgroundImage: `url("${wave}")`,
          backgroundSize: "300px auto",
          "--wave-tile-width": "300px",
        }}
      />
    </section>
  );
}

export default Hero;
