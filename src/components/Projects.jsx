// Add your project screenshots to src/assets/ and import them here
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
  // Add more projects here as you build them:
  // {
  //   name: "Next Project",
  //   year: "2025",
  //   description: "...",
  //   tags: ["React"],
  //   url: "https://...",
  //   image: null,
  // },
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
      className="group block rounded-2xl overflow-hidden border border-[#1e1e1e] bg-[#161616] hover:border-[#2e2e2e] transition-all duration-200 hover:-translate-y-1"
    >
      {/* Image area */}
      <div className="aspect-[16/9] w-full overflow-hidden bg-[#1a1a1a]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[11px] text-[#2e2e2e] tracking-widest uppercase">
              screenshot
            </span>
          </div>
        )}
      </div>

      {/* Info area */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[15px] font-medium text-[#e8e5e0] tracking-tight">
              {project.name}
            </h3>
            <p className="mt-2 text-[13px] text-[#666] leading-relaxed">
              {project.description}
            </p>
          </div>
          <span className="text-[12px] text-[#383838] ml-4 shrink-0">
            {project.year}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-1 rounded-md bg-[#1e1e1e] border border-[#252525] text-[#4a4a4a]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[12px] text-[#444] flex items-center gap-1.5 group-hover:text-[#666] transition-colors shrink-0 ml-3">
            {/* {new URL(project.url).hostname} */}
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
      <p className="text-[11px] text-[#383838] tracking-[0.1em] uppercase mb-6">
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
