import oscarsImg from "../assets/oscarscompanion.png";

const projects = [
  {
    name: "OscarsCompanion",
    year: "2026",
    description:
      "A full-stack companion app for the 2026 Oscar nominations. Browse all 15 categories with live TMDB data, mark films as seen, build a watchlist, and track your progress with per-category stats. Sign in with Google to sync across devices.",
    tags: ["React", "Tailwind CSS", "TMDB API", "Appwrite", "Vercel"],
    url: "https://movie-app-git-main-zillacoops-projects.vercel.app/",
    image: oscarsImg,
  },
];

const ArrowIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 9L9 1M9 1H4M9 1V6" />
  </svg>
);

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
      style={{
        border: "1px solid var(--border)",
        background: "var(--bg-secondary)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--border-hover)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--border)")
      }
    >
      <div
        className="aspect-[16/9] w-full overflow-hidden"
        style={{ background: "var(--bg-card)" }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="text-[11px] tracking-widest uppercase"
              style={{ color: "var(--border-hover)" }}
            >
              screenshot
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3
              className="text-[15px] font-medium tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {project.name}
            </h3>
            <p
              className="mt-2 text-[13px] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {project.description}
            </p>
          </div>
          <span
            className="text-[12px] ml-4 shrink-0"
            style={{ color: "var(--text-label)" }}
          >
            {project.year}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-1 rounded-md"
                style={{
                  background: "var(--border)",
                  border: "1px solid #252525",
                  color: "var(--text-faint)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            className="text-[12px] flex items-center gap-1.5 group-hover:text-[var(--text-muted)] transition-colors shrink-0 ml-3"
            style={{ color: "var(--text-label)" }}
          >
            Live Demo
            <ArrowIcon />
          </span>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pb-16">
      <p
        className="text-[11px] tracking-[0.1em] uppercase mb-6"
        style={{ color: "var(--text-label)" }}
      >
        selected work
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
