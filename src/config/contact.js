// Número en formato internacional, sin "+" ni espacios (593 = Ecuador).
// TODO: reemplazar por el número real del negocio.
export const WHATSAPP = "593XXXXXXXXX";

export const waLink = (msg = "") =>
  `https://wa.me/${WHATSAPP}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
