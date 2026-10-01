import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import Brand from "./Brand.jsx";
import ButtonLink from "./ButtonLink.jsx";

function Navbar({ links, whatsapp }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);

  // Sombra en el navbar en cuanto la página deja de estar arriba del todo
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Con el menú abierto: Escape lo cierra, y también pasar a pantalla de escritorio
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onResize = (e) => {
      if (e.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`on-dark sticky top-0 z-50 bg-primary text-white transition-shadow duration-300 ${
        scrolled || open ? "shadow-lg shadow-secondary/30" : ""
      }`}
    >
      <nav aria-label="Principal">
        <div className="site-container flex h-18 items-center justify-between gap-6">
          <a
            href="#inicio"
            onClick={close}
            aria-label="Tecnosoluciones, ir al inicio"
            className="flex items-center gap-3 rounded-md"
          >
            <Brand />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="rounded-sm text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink href={whatsapp} target="_blank" size="sm">
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-lg transition-colors hover:bg-white/10 md:hidden"
          >
            <span className="sr-only">
              {open ? "Cerrar menú" : "Abrir menú"}
            </span>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <div
          id="menu-movil"
          hidden={!open}
          className="border-t border-white/15 md:hidden"
        >
          <ul className="site-container flex flex-col py-3">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  className="block rounded-md py-3 text-lg font-medium text-white/85 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <ButtonLink href={whatsapp} target="_blank" className="w-full">
                <MessageCircle className="size-5" aria-hidden="true" />
                Escribir por WhatsApp
              </ButtonLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
