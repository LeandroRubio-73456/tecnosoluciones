import { BrushCleaning, MonitorCog, SearchCheck } from "lucide-react";

// Tarjetas destacadas del hero
export const services = [
  {
    icon: MonitorCog,
    title: "Instalación y configuración",
    description: "Sistema, programas y ajustes a tu medida.",
    variant: "blue",
  },
  {
    icon: SearchCheck,
    title: "Diagnóstico y reparación",
    description: "Encontramos la falla y la reparamos.",
    variant: "green",
  },
  {
    icon: BrushCleaning,
    title: "Mantenimiento preventivo",
    description: "Limpieza y revisión para que tu equipo dure más.",
    variant: "red",
  },
];

// Lista completa de la sección Servicios ("orden de servicio")
export const serviceOrder = [
  {
    title: "Diagnóstico",
    description: "Revisamos el equipo y te decimos qué tiene.",
  },
  {
    title: "Reparación",
    description: "Corregimos la falla en PCs, laptops e impresoras.",
  },
  {
    title: "Mantenimiento preventivo",
    description: "Limpieza y revisión para evitar fallas futuras.",
  },
  {
    title: "Instalación",
    description: "Sistema operativo, programas y periféricos.",
  },
  {
    title: "Configuración",
    description: "Redes, impresoras y programas listos para usar.",
  },
];

export const workSteps = [
  {
    title: "Nos escribes",
    description:
      "Cuéntanos por WhatsApp qué le pasa a tu equipo y coordinamos el día para recibirlo.",
  },
  {
    title: "Diagnóstico",
    description: "Lo revisamos y te explicamos qué encontramos.",
  },
  {
    title: "Reparación",
    description: "Arreglamos, limpiamos o configuramos lo que haga falta.",
  },
  {
    title: "Entrega con garantía",
    description: "Recibes tu equipo listo y con servicio garantizado.",
  },
];

export const devices = ["PC de escritorio", "Laptop", "Impresora", "Otro"];
