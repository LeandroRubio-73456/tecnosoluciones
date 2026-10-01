// Número en formato internacional, sin "+" ni espacios (593 = Ecuador).
export const WHATSAPP = "593994840152";

// Datos de la sección Contacto. Con null, el dato no se muestra.
// No se muestra dirección: el local físico cerró.
export const CONTACT = {
  area: null, // sin dato se muestra "Quito"
  hours: "Todos los días, con cita previa",
};

export const waLink = (msg = "") =>
  `https://wa.me/${WHATSAPP}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

// "593991234567" → "+593 99 123 4567". Devuelve null mientras sea placeholder.
export const phoneDisplay = () => {
  if (!/^\d{12}$/.test(WHATSAPP)) return null;
  const w = WHATSAPP;
  return `+${w.slice(0, 3)} ${w.slice(3, 5)} ${w.slice(5, 8)} ${w.slice(8)}`;
};
