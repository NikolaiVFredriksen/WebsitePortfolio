const Hero = () => {
  return (
    <section className="pt-28 pb-16">
      <h1
        className="text-[28px] sm:text-[34px] font-medium tracking-tight leading-[1.3]"
        style={{ color: "var(--text-primary)" }}
      >
        Oslo-based frontend developer.
      </h1>
      <p
        className="mt-4 text-[14px] leading-relaxed max-w-[680px]"
        style={{ color: "var(--text-muted)" }}
      >
        Building user-focused web applications with React and modern tools.
      </p>
    </section>
  );
};

export default Hero;
