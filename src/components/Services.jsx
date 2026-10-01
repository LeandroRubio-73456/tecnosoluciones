import ServiceOrder from "./ServiceOrder.jsx";
import WorkSteps from "./WorkSteps.jsx";

function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-titulo"
      className="bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div className="site-container">
        <header className="max-w-3xl">
          <h2
            id="servicios-titulo"
            className="font-display text-3xl leading-[1.08] font-extrabold tracking-tight text-balance font-stretch-semi-expanded sm:text-4xl lg:text-[2.875rem]"
          >
            Lo que hacemos por tu equipo
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-pretty text-secondary-muted sm:text-xl">
            Arma tu orden de servicio y envíala por WhatsApp. Si no sabes qué
            necesitas, deja marcado el diagnóstico y lo vemos juntos.
          </p>
        </header>

        <div className="mt-12 grid items-start gap-16 sm:mt-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12 xl:gap-20">
          <ServiceOrder />

          <div className="lg:sticky lg:top-28">
            <h3 className="font-display text-2xl font-extrabold font-stretch-semi-expanded sm:text-[1.625rem]">
              Cómo trabajamos
            </h3>
            <div className="mt-8">
              <WorkSteps />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
