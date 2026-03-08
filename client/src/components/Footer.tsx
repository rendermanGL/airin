export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] border-t border-[rgba(0,0,0,0.07)] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[0.7rem] uppercase tracking-[0.2em] text-[#8A8A96]">
            AJ · AIRIN JOHN
          </div>

          <nav className="flex items-center gap-8">
            <a href="#hero" className="text-[0.65rem] uppercase text-[#8A8A96] hover:text-[#A378FF] transition-colors">Home</a>
            <a href="#about" className="text-[0.65rem] uppercase text-[#8A8A96] hover:text-[#A378FF] transition-colors">About</a>
            <a href="#skills" className="text-[0.65rem] uppercase text-[#8A8A96] hover:text-[#A378FF] transition-colors">Skills</a>
            <a href="/portfolio" className="text-[0.65rem] uppercase text-[#8A8A96] hover:text-[#A378FF] transition-colors">Portfolio</a>
            <a href="#contact" className="text-[0.65rem] uppercase text-[#8A8A96] hover:text-[#A378FF] transition-colors">Contact</a>
          </nav>

          <div className="text-[0.65rem] text-[#8A8A96]">
            © 2025 · ALL SYSTEMS NOMINAL
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-4 border-t border-[rgba(0,0,0,0.06)]">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/airinjohn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-[0.8rem]"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          <p className="text-[0.6rem] text-[#8A8A96]">
            Designed & Developed by&nbsp;
            <a
              href="http://4ndigitalsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A378FF] transition-colors"
            >
              4n Digital Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
