import wave from "../assets/wave.svg";

// Ondas animadas de fondo (de la marca). Se coloca al fondo de una sección
// con `relative isolate`.
function Wave({ className = "opacity-20" }) {
  return (
    <div
      aria-hidden="true"
      className={`wave-scroll pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-36 bg-repeat-x ${className}`}
      style={{
        backgroundImage: `url("${wave}")`,
        backgroundSize: "300px auto",
        "--wave-tile-width": "300px",
      }}
    />
  );
}

export default Wave;
