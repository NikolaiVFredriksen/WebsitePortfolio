import oscarsImg from "../assets/oscarscompanion.png";
import looplyImg from "../assets/looply.png";

const projects = [
  {
    name: "OscarsCompanion",
    year: "2026",
    description:
      "A full-stack companion app for the 2026 Oscar nominations. Browse all 15 categories with live TMDB data, mark films as seen, build a watchlist, and track your progress with per-category stats. Sign in with Google to sync across devices.",
    tags: ["React", "Tailwind CSS", "TMDB API", "Supabase", "Vercel"],
    url: "https://www.oscarscompanion.com/",
    github: "https://github.com/NikolaiVFredriksen/MovieApp",
    image: oscarsImg,
  },
  {
    name: "Looply",
    year: "2026",
    description:
      "A mindful PWA for the things you keep putting off. Not your grocery list — the harder stuff. The conversation you're avoiding, the decision you keep postponing. Add it, close it when you're ready, or consciously choose to let it go.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    url: "https://looply-sigma.vercel.app/",
    github: "https://github.com/NikolaiVFredriksen/Looply",
    image: looplyImg,
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

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
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
        className="aspect-[16/9] w-full overflow-hidden relative"
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

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 left-3 w-9 h-9 rounded-full flex items-center justify-center transition-opacity opacity-80 hover:opacity-100"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            color: "var(--text-muted)",
          }}
        >
          <GitHubIcon />
        </a>
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
