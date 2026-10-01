import { MessageCircle, Puzzle } from "lucide-react";
import { waLink } from "../config/contact.js";
import { combos } from "../data/combos.js";
import ButtonLink from "./ButtonLink.jsx";

// Columnas compartidas por todas las filas para que queden alineadas
const rowGrid =
  "grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)_16rem] lg:items-center lg:gap-10 lg:py-10";

function ComboRow({ name, tagline, price, items, featured = false }) {
  const message = `Hola, Tecnosoluciones. Quisiera cotizar el *${name}*.`;

  return (
    <article
      className={`${rowGrid} ${
        featured
          ? "rounded-xl bg-accent text-secondary [&_:focus-visible]:outline-secondary"
          : "border-t border-white/25 text-white"
      }`}
    >
      <div>
        {featured && (
          <p className="mb-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
            Todo incluido
          </p>
        )}
        <h3 className="font-display text-2xl leading-[1.05] font-extrabold font-stretch-semi-expanded sm:text-3xl">
          {name}
        </h3>
        <p
          className={`mt-2 ${featured ? "text-secondary/80" : "text-white/70"}`}
        >
          {tagline}
        </p>
      </div>

      <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3">
            <Icon
              aria-hidden="true"
              strokeWidth={1.75}
              className={`size-5 shrink-0 ${featured ? "text-secondary" : "text-accent"}`}
            />
            {label}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
        {price ? (
          <p className="font-display leading-none">
            <span className="block text-sm font-medium opacity-75">Desde</span>
            <span className="text-4xl font-extrabold font-stretch-semi-expanded">
              {price}
            </span>
          </p>
        ) : (
          <p className="font-display text-lg leading-tight font-bold">
            Precio a consultar
          </p>
        )}
        <ButtonLink
          href={waLink(message)}
          target="_blank"
          variant={featured ? "ink" : "primary"}
          className="w-full whitespace-nowrap sm:w-auto"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Cotizar por WhatsApp
        </ButtonLink>
      </div>
    </article>
  );
}

function Combos() {
  const customLink = waLink(
    "Hola, Tecnosoluciones. Quisiera armar un combo a mi medida.",
  );

  return (
    <section
      id="combos"
      aria-labelledby="combos-titulo"
      className="on-dark bg-secondary py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="site-container">
        <header className="max-w-4xl">
          <h2
            id="combos-titulo"
            className="font-display text-3xl leading-[1.08] font-extrabold tracking-tight text-balance font-stretch-semi-expanded sm:text-4xl lg:text-[2.875rem]"
          >
            Equipos con tecnología de punta, armados a tu medida
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-pretty text-white/75 sm:text-xl">
            Estos combos son un punto de partida: los ajustamos a lo que
            necesites y a tu presupuesto.
          </p>
        </header>

        <div className="mt-12 sm:mt-16">
          {combos.map((combo) => (
            <ComboRow key={combo.name} {...combo} />
          ))}

          <article
            className={`${rowGrid} mt-6 rounded-xl border-2 border-dashed border-white/35`}
          >
            <div className="flex items-center gap-4">
              <Puzzle
                aria-hidden="true"
                strokeWidth={1.75}
                className="size-8 shrink-0 text-accent"
              />
              <h3 className="font-display text-2xl leading-[1.05] font-extrabold font-stretch-semi-expanded sm:text-3xl">
                Combo a tu medida
              </h3>
            </div>
            <p className="text-lg text-pretty text-white/80">
              ¿Necesitas otra combinación? Dinos qué equipo buscas, qué
              accesorios quieres y cuánto quieres invertir, y te lo armamos.
            </p>
            <ButtonLink
              href={customLink}
              target="_blank"
              variant="secondary"
              className="w-full sm:w-auto sm:justify-self-start"
            >
              Armar mi combo
            </ButtonLink>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Combos;
