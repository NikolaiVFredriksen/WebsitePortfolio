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
              I build digital products with a focus on interaction, clarity, and
              detail. I enjoy working closely with users and turning real needs
              into simple, well-crafted solutions — from idea to implementation.
            </p>
            <p
              className="text-[13px] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Experienced with React and modern JavaScript, and comfortable
              working across the stack when needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
