import { buttonClasses } from "./buttonStyles.js";

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
      className={`${buttonClasses(variant, size)} ${className}`}
    >
      {children}
      {external && (
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      )}
    </a>
  );
}

export default ButtonLink;
