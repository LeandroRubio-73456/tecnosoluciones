import { workSteps } from "../data/services.js";

function WorkSteps() {
  return (
    <ol>
      {workSteps.map(({ title, description }, i) => {
        const last = i === workSteps.length - 1;

        return (
          <li key={title} className="flex gap-6">
            <div className="flex shrink-0 flex-col items-center">
              <span
                className={`flex size-12 items-center justify-center font-display text-2xl font-extrabold ${
                  last ? "bg-accent text-secondary" : "bg-secondary text-white"
                }`}
              >
                {i + 1}
              </span>
              {!last && (
                <span
                  aria-hidden="true"
                  className="my-1.5 w-0.5 grow bg-secondary"
                />
              )}
            </div>
            <div className={last ? "pt-2" : "pt-2 pb-10"}>
              <h4 className="font-display text-xl leading-tight font-extrabold font-stretch-semi-expanded sm:text-[1.375rem]">
                {title}
              </h4>
              <p className="mt-1.5 text-secondary-muted">{description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default WorkSteps;
