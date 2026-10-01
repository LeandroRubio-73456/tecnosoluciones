import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { waLink } from "../config/contact.js";
import { devices, serviceOrder } from "../data/services.js";
import BrandMark from "./BrandMark.jsx";
import { buttonClasses } from "./buttonStyles.js";

// Muesca circular del talonario: en móvil la perforación es horizontal (abajo
// del talón) y desde sm pasa a ser vertical (a la derecha del talón)
const notch =
  "absolute size-8 rounded-full bg-paper translate-y-1/2 sm:translate-x-1/2";

// Separación punteada entre bloques del formulario
const row = "border-b-[1.5px] border-dashed border-line px-6 sm:px-10";

// Mensaje que llega al WhatsApp del negocio (*texto* = negrita en WhatsApp)
function buildMessage({ services, device, details }) {
  const lines = [
    "Hola, Tecnosoluciones. Quisiera hacer una *orden de servicio*:",
  ];
  if (device) lines.push(`• Equipo: ${device}`);
  lines.push(
    `• Servicios: ${services.length ? services.join(", ") : "no estoy seguro, necesito asesoría"}`,
  );
  if (details.trim()) lines.push(`• Detalle: ${details.trim()}`);
  return lines.join("\n");
}

function ServiceOrder() {
  // Diagnóstico viene marcado: es el punto de partida recomendado
  const [selected, setSelected] = useState([serviceOrder[0].title]);
  const [device, setDevice] = useState("");
  const [details, setDetails] = useState("");

  const toggle = (title) =>
    setSelected((cur) =>
      cur.includes(title) ? cur.filter((t) => t !== title) : [...cur, title],
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Se respeta el orden de la lista, no el orden en que se marcaron
    const services = serviceOrder
      .map((s) => s.title)
      .filter((t) => selected.includes(t));
    const url = waLink(buildMessage({ services, device, details }));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const count = selected.length;

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="orden-titulo"
      className="relative flex flex-col border border-line bg-white shadow-xl shadow-secondary/5 sm:flex-row"
    >
      {/* Talón */}
      <div className="relative flex shrink-0 items-center justify-between gap-4 border-b-3 border-dashed border-paper bg-primary px-6 py-5 text-white sm:w-36 sm:flex-col sm:justify-start sm:gap-8 sm:border-r-3 sm:border-b-0 sm:px-0 sm:py-9">
        <BrandMark className="size-11 sm:size-13" />
        <p className="font-display text-xl font-extrabold tracking-wide whitespace-nowrap font-stretch-semi-expanded sm:rotate-180 sm:text-2xl sm:[writing-mode:vertical-rl]">
          Orden de servicio
        </p>
        <span
          aria-hidden="true"
          className={`${notch} bottom-0 left-0 -translate-x-1/2 sm:top-0 sm:right-0 sm:bottom-auto sm:left-auto sm:-translate-y-1/2`}
        />
        <span
          aria-hidden="true"
          className={`${notch} right-0 bottom-0 translate-x-1/2`}
        />
      </div>

      {/* Cuerpo de la orden */}
      <div className="flex min-w-0 grow flex-col">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b-2 border-secondary px-6 py-6 sm:px-10 sm:py-7">
          <h3
            id="orden-titulo"
            className="font-display text-xl font-extrabold font-stretch-semi-expanded sm:text-2xl"
          >
            Servicios solicitados
          </h3>
          <p className="text-sm text-secondary-muted">Marca uno o varios</p>
        </div>

        <fieldset>
          <legend className="sr-only">Servicios</legend>
          {serviceOrder.map(({ title, description }) => (
            <label
              key={title}
              className={`${row} flex cursor-pointer items-center gap-5 py-4 transition-colors hover:bg-paper/60 sm:py-5`}
            >
              <span className="relative flex shrink-0">
                <input
                  type="checkbox"
                  checked={selected.includes(title)}
                  onChange={() => toggle(title)}
                  className="peer size-7.5 cursor-pointer appearance-none border-[2.5px] border-secondary bg-white transition-colors checked:bg-accent"
                />
                <Check
                  aria-hidden="true"
                  strokeWidth={4}
                  className="pointer-events-none absolute inset-0 m-auto hidden size-4.5 peer-checked:block"
                />
              </span>
              <span>
                <span className="block font-display text-lg leading-tight font-extrabold font-stretch-semi-expanded sm:text-xl">
                  {title}
                </span>
                <span className="mt-1 block text-secondary-muted">
                  {description}
                </span>
              </span>
            </label>
          ))}
        </fieldset>

        <fieldset className={`${row} py-6`}>
          <legend className="float-left mb-3 w-full text-sm font-semibold">
            Equipo
          </legend>
          <div className="clear-both flex flex-wrap gap-2">
            {devices.map((d) => (
              <label
                key={d}
                className="cursor-pointer rounded-full border-[1.5px] border-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-paper has-checked:bg-secondary has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary"
              >
                <input
                  type="radio"
                  name="equipo"
                  value={d}
                  checked={device === d}
                  onChange={() => setDevice(d)}
                  className="sr-only"
                />
                {d}
              </label>
            ))}
          </div>
        </fieldset>

        <div className={`${row} py-6`}>
          <label htmlFor="orden-detalle" className="text-sm font-semibold">
            ¿Qué le pasa a tu equipo?{" "}
            <span className="font-normal text-secondary-muted">(opcional)</span>
          </label>
          <textarea
            id="orden-detalle"
            rows={2}
            maxLength={300}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Ej.: no enciende, está muy lenta, la impresora no jala el papel…"
            className="mt-2 block w-full resize-none border-b-2 border-secondary bg-transparent py-2 placeholder:text-secondary-muted/70 focus:border-primary focus-visible:outline-none"
          />
        </div>

        <div className="flex flex-col-reverse items-stretch gap-6 px-6 py-7 sm:flex-row sm:flex-wrap-reverse sm:items-center sm:justify-between sm:px-10">
          <p
            aria-hidden="true"
            className="-rotate-5 self-center border-3 border-service-red px-4 py-2 text-center font-display text-base leading-[1.05] font-black text-service-red uppercase sm:self-auto sm:text-lg"
          >
            Servicio técnico
            <br />
            garantizado
          </p>
          <div className="flex flex-col items-stretch gap-2 sm:items-end">
            <button
              type="submit"
              className={`${buttonClasses("ink")} whitespace-nowrap`}
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Enviar orden por WhatsApp
            </button>
            <p
              aria-live="polite"
              className="text-center text-sm text-secondary-muted sm:text-right"
            >
              {count === 0
                ? "Sin servicios marcados: te asesoramos"
                : `${count} ${count === 1 ? "servicio marcado" : "servicios marcados"}`}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ServiceOrder;
