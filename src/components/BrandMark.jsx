// Marca de Tecnosoluciones: tres cuadrados superpuestos con la línea curva.
// Versión para fondos azules/oscuros (el cuadrado de adelante va en claro).
function BrandMark({ className = "size-9" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <rect
        x="20"
        y="4"
        width="34"
        height="34"
        fill="#3DDC97"
        fillOpacity="0.92"
      />
      <rect
        x="28"
        y="26"
        width="34"
        height="34"
        fill="#FF5A6E"
        fillOpacity="0.92"
      />
      <rect
        x="2"
        y="14"
        width="38"
        height="38"
        fill="#DCE6FF"
        fillOpacity="0.94"
      />
      <path d="M2 44C20 30 38 36 62 10" stroke="#FFFFFF" strokeWidth="1.6" />
    </svg>
  );
}

export default BrandMark;
