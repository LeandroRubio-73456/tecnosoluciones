import BrandMark from "./BrandMark.jsx";

// Marca + wordmark TECNO (900) SOLUCIONES (300)
function Brand() {
  return (
    <span className="flex items-center gap-3">
      <BrandMark className="size-9 sm:size-10" />
      <span className="font-display text-lg tracking-tight uppercase sm:text-xl">
        <span className="font-black">Tecno</span>
        <span className="font-light">soluciones</span>
      </span>
    </span>
  );
}

export default Brand;
