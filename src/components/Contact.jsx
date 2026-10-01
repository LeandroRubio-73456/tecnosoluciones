import { MessageCircle, ScanLine } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { CONTACT, phoneDisplay, waLink } from "../config/contact.js";
import ButtonLink from "./ButtonLink.jsx";

// Cuadrados translúcidos de la marca, en grande
function BrandSquares() {
  return (
    <svg
      viewBox="0 0 440 440"
      fill="none"
      aria-hidden="true"
      className="absolute inset-0 size-full"
    >
      <rect
        x="150"
        y="20"
        width="250"
        height="250"
        fill="#3DDC97"
        fillOpacity="0.95"
      />
      <rect
        x="190"
        y="160"
        width="250"
        height="250"
        fill="#FF5A6E"
        fillOpacity="0.92"
      />
      <rect
        x="10"
        y="90"
        width="270"
        height="270"
        fill="#DCE6FF"
        fillOpacity="0.94"
      />
      <path
        d="M10 300C130 220 250 250 430 60"
        stroke="#FFFFFF"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function Contact() {
  const link = waLink("Hola, Tecnosoluciones. Quisiera hacer una consulta.");
  const phone = phoneDisplay();

  const details = [
    phone && { label: "WhatsApp", value: phone },
    { label: "Atención", value: CONTACT.area ?? "Quito" },
    CONTACT.hours && { label: "Horario", value: CONTACT.hours },
  ].filter(Boolean);

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="on-dark relative isolate overflow-hidden bg-primary text-white"
    >
      <div className="site-container grid items-center gap-16 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_auto] lg:py-24">
        <div>
          <h2
            id="contacto-titulo"
            className="max-w-2xl font-display text-4xl leading-[1.04] font-black tracking-tight text-balance font-stretch-semi-expanded sm:text-5xl lg:text-[3.5rem]"
          >
            Cuéntanos qué le pasa a tu equipo.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-pretty text-white/85 sm:text-xl">
            Escríbenos por WhatsApp con el problema o con lo que quieres
            comprar, y te respondemos.
          </p>
          <ButtonLink
            href={link}
            target="_blank"
            className="mt-8 w-full sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Escribir por WhatsApp
          </ButtonLink>

          <dl className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
            {details.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-sm text-white/75">{label}</dt>
                <dd className="mt-1 text-lg font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* QR solo en escritorio: desde el celular basta con tocar el botón */}
        <div className="relative hidden size-110 shrink-0 lg:block">
          <BrandSquares />
          <figure className="absolute top-1/2 left-1/2 flex -translate-1/2 flex-col items-center gap-3 rounded-2xl bg-white p-5 text-secondary shadow-2xl shadow-secondary/40">
            <QRCodeSVG
              value={link}
              size={152}
              fgColor="#0A1F7A"
              marginSize={0}
              title="Código QR para escribir por WhatsApp"
            />
            <figcaption className="flex flex-col items-center gap-1.5 text-center text-sm leading-snug font-medium">
              <ScanLine className="size-5 text-primary" aria-hidden="true" />
              <span>
                Escanea para escribirnos
                <br />
                desde tu celular
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Contact;
