const experiences = [
  {
    title: "YouTube Creator",
    company: "YouTube",
    date: "Jan 2025 — Present",
    points: [
      "Produces visually considered videos focused on music and storytelling",
      "Handles all production independently — from concept to final publish",
      "Developing a personal visual style inspired by documentary and everyday film",
    ],
  },
  {
    title: "Freelance",
    company: "Upwork",
    date: "Jul 2022 — Present",
    points: [
      "Delivers services in photo/video editing, translation, and music production",
      "Contributed to the Norwegian launch of Proxify.io",
      "Built long-term client relationships through reliability and clear communication",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Experis Academy",
    date: "Aug 2023 — Nov 2023",
    points: [
      "Worked with .NET/C#, ASP.NET Core, databases, cloud, JavaScript, React, and Angular",
      "Built complete solutions across database to deployment in case assignments",
      "Gained insight into the consultant role through real client cases",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "InXight AS",
    date: "Jan 2023 — May 2023",
    points: [
      "Developed a visual business management tool based on Visma's PlanDisc model",
      "Worked on both frontend and backend in a team of three",
      "Experience contributing in a professional development environment",
    ],
  },
  {
    title: "Bachelor, Frontend & Mobile Development",
    company: "Høyskolen Kristiania",
    date: "Aug 2020 — Jun 2023",
    points: [
      "React, Swift, Kotlin/Java, databases, and cloud solutions",
      "Strong focus on interaction design and responsive, user-friendly interfaces",
      "Agile workflows, team collaboration, and professional development tools",
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
