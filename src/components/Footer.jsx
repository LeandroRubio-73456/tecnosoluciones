import { ArrowUp } from "lucide-react";
import Brand from "./Brand.jsx";

function Footer({ links }) {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-secondary text-white">
      <div className="site-container flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <a
            href="#inicio"
            aria-label="Tecnosoluciones, ir al inicio"
            className="inline-flex rounded-md"
          >
            <Brand />
          </a>
          <p className="mt-3 text-white/70">
            Servicio técnico garantizado en Quito.
          </p>
        </div>

        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/15">
        <div className="site-container flex flex-col gap-3 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Tecnosoluciones. Todos los derechos reservados.</p>
          <a
            href="#inicio"
            className="inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-white"
          >
            Volver arriba
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
