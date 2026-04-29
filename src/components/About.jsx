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
              I'm a developer with a sharp eye for design and a strong sense
              that what's built should feel as considered as it looks. I take an
              idea all the way — from concept to finished product — and I do my
              best work alongside people who care just as much.
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
