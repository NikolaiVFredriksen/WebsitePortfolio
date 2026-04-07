// To add your photo: import photo from "../assets/photo.jpg"
// Then replace the placeholder div with: <img src={photo} alt="Nikolai" className="w-full h-full object-cover" />

const About = () => {
  return (
    <section
      id="about"
      className="pb-20 pt-8 border-t border-[#1a1a1a]"
    >
      <p className="text-[11px] text-[#383838] tracking-[0.1em] uppercase mb-6">
        about
      </p>
      <div className="flex gap-5 items-start">
        {/* Photo — swap the div below for an img tag once you have a photo */}
        <div className="w-14 h-14 rounded-full bg-[#1a1a1a] border border-[#222] shrink-0 overflow-hidden flex items-center justify-center">
          <span className="text-[10px] text-[#2e2e2e] tracking-widest">foto</span>
        </div>

        <div>
          <h3 className="text-[14px] font-medium text-[#e8e5e0] tracking-tight">
            Nikolai Villanueva Fredriksen
          </h3>
          <p className="mt-2 text-[13px] text-[#555] leading-relaxed max-w-[440px]">
            Previously in content creation, now building things on the web.
            Oslo-based.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
