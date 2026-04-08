// To add your photo: import photo from "../assets/photo.jpg"
// Then replace the placeholder div with: <img src={photo} alt="Nikolai" className="w-full h-full object-cover" />
import headshot from "/headshot.jpg";

const About = () => {
  return (
    <section id="about" className="pt-8 border-t border-[#1a1a1a]">
      <p className="text-[11px] text-[#383838] tracking-[0.1em] uppercase mb-6">
        about
      </p>
      <div className="flex gap-5 items-start">
        <img
          src={headshot}
          className="w-14 h-14 rounded-full object-cover bg-[#1a1a1a] border border-[#222] shrink-0 overflow-hidden flex items-center justify-center"
        />

        <div>
          <h3 className="text-[14px] font-medium text-[#e8e5e0] tracking-tight">
            Nikolai Villanueva Fredriksen
          </h3>
          <p className="mt-2 text-[13px] text-[#555] leading-relaxed max-w-[440px]">
            Building things for the web. Oslo-based.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
