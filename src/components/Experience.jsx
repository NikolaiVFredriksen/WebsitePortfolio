const experiences = [
  {
    title: "Independent Developer",
    company: "Freelance",
    date: "Mar 2024 — Present",
    points: [
      "Developing modern frontend and fullstack web solutions, with a focus on thoughtful UX and modern technology",
      "Focused on building polished, user-centered products from concept to deployment",
    ],
  },
  {
    title: "UX Writer",
    company: "Proxify",
    date: "Nov 2023 — Mar 2024",
    points: [
      "Prepared Proxify.io for Norwegian launch — UX writing, onboarding flow and interface content",
    ],
  },
  {
    title: "Freelancer",
    company: "Upwork",
    date: "Jun 2022 — Mar 2024",
    points: [
      "Freelancer on Upwork with projects in web development, localization and UX writing",
    ],
  },
  {
    title: "Fullstack .NET Developer",
    company: "Experis Academy",
    date: "Aug 2023 — Nov 2023",
    points: [
      "Hired as a consultant through a selective training program for new IT graduates",
      "Developed object-oriented applications in C# with a focus on data modeling, REST API design, automated testing, and deployment with Docker and Azure",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "InXight AS",
    date: "Jan 2023 — Jun 2023",
    points: [
      "Developed an interactive annual wheel for Strategy Orchestrator (SaaS) — used daily by Avinor",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="pb-16 pt-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p
        className="text-[11px] tracking-[0.1em] uppercase mb-6"
        style={{ color: "var(--text-label)" }}
      >
        experience
      </p>
      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6 pb-10 relative">
            <div className="flex flex-col items-center">
              <div
                className="w-[6px] h-[6px] rounded-full mt-1 shrink-0"
                style={{ background: "var(--border-hover)" }}
              />
              {index < experiences.length - 1 && (
                <div
                  className="w-px flex-1 mt-2"
                  style={{ background: "var(--border)" }}
                />
              )}
            </div>

            <div className="flex-1 pb-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="text-[14px] font-medium tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-[12px] mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {exp.company}
                  </p>
                </div>
                <span
                  className="text-[11px] shrink-0 mt-0.5"
                  style={{ color: "var(--text-faint)" }}
                >
                  {exp.date}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-[12px] leading-relaxed flex gap-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span
                      className="mt-1.5 shrink-0"
                      style={{ color: "var(--border-hover)" }}
                    >
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
