const variants = {
  primary: "bg-accent text-secondary hover:bg-accent-clear",
  secondary:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

const sizes = {
  md: "px-6 py-3 text-base",
  sm: "px-4 py-2 text-sm",
};

function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  target,
  className = "",
  children,
}) {
  const external = target === "_blank";

  return (
    <a
      href={href}
      target={target}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {external && (
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      )}
    </a>
  );
}

export default ButtonLink;
