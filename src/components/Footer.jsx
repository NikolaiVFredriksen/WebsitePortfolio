const Footer = () => {
  return (
    <footer className="max-w-[1100px] mx-auto px-6 sm:px-10 pb-8">
      <div
        className="pt-8 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span className="text-[12px]" style={{ color: "var(--text-faint)" }}>
          © {new Date().getFullYear()} Nikolai Villanueva Fredriksen
        </span>
        <div className="flex gap-5">
          {[
            { label: "GitHub", href: "https://github.com/NikolaiVFredriksen" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/nikolai-fredriksen/",
            },
            { label: "mail", href: "mailto:nikolaifredriksen5@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "mail" ? "_blank" : undefined}
              rel={label !== "mail" ? "noopener noreferrer" : undefined}
              className="text-[12px] transition-colors"
              style={{ color: "var(--text-faint)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-faint)")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
