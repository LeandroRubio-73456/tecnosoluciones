const variants = {
  blue: "bg-primary-clear",
  green: "bg-accent-clear",
  red: "bg-service-red-clear",
};

function ServiceCard({ icon: Icon, title, description, variant = "blue" }) {
  const iconBg = variants[variant] ?? variants.blue;

  return (
    <article className="flex items-stretch overflow-hidden rounded-2xl bg-white text-secondary shadow-xl shadow-secondary/25">
      <div className={`flex shrink-0 items-center px-5 sm:px-7 ${iconBg}`}>
        <Icon
          className="size-8 sm:size-10"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
          {title}
        </h3>
        <p className="mt-1 text-secondary/75">{description}</p>
        <span
          aria-hidden="true"
          className="mt-3 block h-1 w-12 rounded-full bg-accent"
        />
      </div>
    </article>
  );
}

export default ServiceCard;
