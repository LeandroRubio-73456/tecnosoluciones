// Estilos compartidos por ButtonLink (<a>) y los <button> de formularios
const variants = {
  primary: "bg-accent text-secondary hover:bg-accent-clear",
  secondary:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
  // Para fondos claros
  ink: "bg-secondary text-white hover:bg-primary",
};

const sizes = {
  md: "px-6 py-3 text-base",
  sm: "px-4 py-2 text-sm",
};

export const buttonClasses = (variant = "primary", size = "md") =>
  `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors ${sizes[size]} ${variants[variant]}`;
