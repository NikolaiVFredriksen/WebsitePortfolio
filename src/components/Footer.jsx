const Footer = () => {
  return (
    <footer className="max-w-[1100px] mx-auto px-6 sm:px-10 pb-8">
      <div className="border-t border-[#1a1a1a] pt-8 flex items-center justify-between">
        <span className="text-[12px] text-[#333]">
          © {new Date().getFullYear()} Nikolai Villanueva Fredriksen
        </span>
        <div className="flex gap-5">
          <a
            href="https://github.com/" // update with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-[#444] hover:text-[#888] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nikolai-fredriksen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-[#444] hover:text-[#888] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:din@epost.no" // update with your email
            className="text-[12px] text-[#444] hover:text-[#888] transition-colors"
          >
            mail
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
