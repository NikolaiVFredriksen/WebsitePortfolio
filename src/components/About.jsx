import headshot from "/headshot.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="pt-8 pb-16"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p
        className="text-[11px] tracking-[0.1em] uppercase mb-6"
        style={{ color: "var(--text-label)" }}
      >
        about
      </p>
      <div className="flex gap-5 items-start">
        <img
          src={headshot}
          className="w-14 h-14 rounded-full object-cover shrink-0"
          style={{ border: "1px solid var(--border)" }}
        />
        <div>
          <h3
            className="text-[14px] font-medium tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Nikolai Villanueva Fredriksen
          </h3>
          <div className="mt-2 max-w-[440px] space-y-3">
            <p
              className="text-[13px] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              I care about how things feel to use, not just how they look. My
              work tends to go all the way in: from architecture to the small
              things most developers leave to chance. I build best alongside
              people who take quality personally.
            </p>
            <div className="flex gap-4 pt-1">
              <a
                href="https://www.linkedin.com/in/nikolai-fredriksen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] transition-opacity opacity-60 hover:opacity-100"
                style={{ color: "var(--text-muted)" }}
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
