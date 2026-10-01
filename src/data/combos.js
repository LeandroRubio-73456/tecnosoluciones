import {
  Keyboard,
  Laptop,
  Monitor,
  Mouse,
  PcCase,
  PlugZap,
  Plus,
  Speaker,
  Webcam,
} from "lucide-react";

// No hay precios fijos: se cotizan con el dueño por WhatsApp, por eso price
// va en null y se muestra "Precio a consultar". Si algún día hay precio fijo,
// poner el texto tal cual (ej. "$650") y se mostrará "Desde $650".
export const combos = [
  {
    name: "Combo Oficina",
    tagline: "Para trabajar todos los días",
    price: null,
    items: [
      { icon: PcCase, label: "PC de escritorio" },
      { icon: Monitor, label: "Monitor" },
      { icon: Keyboard, label: "Teclado y mouse" },
      { icon: PlugZap, label: "Regulador de voltaje" },
    ],
  },
  {
    name: "Combo Portátil",
    tagline: "Para llevar a todos lados",
    price: null,
    items: [
      { icon: Laptop, label: "Laptop" },
      { icon: Mouse, label: "Mouse" },
      { icon: Plus, label: "Accesorios a elección" },
    ],
  },
  {
    name: "Combo Completo",
    tagline: "Para no dejar nada afuera",
    price: null,
    featured: true,
    items: [
      { icon: PcCase, label: "PC de escritorio" },
      { icon: Monitor, label: "Monitor" },
      { icon: Keyboard, label: "Teclado y mouse" },
      { icon: Speaker, label: "Parlantes" },
      { icon: Webcam, label: "Cámara web" },
      { icon: PlugZap, label: "Regulador de voltaje" },
    ],
  },
];
