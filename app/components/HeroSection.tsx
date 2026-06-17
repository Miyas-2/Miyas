import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  GlobeIcon,
  ArrowDownIcon,
} from "./Icons";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 hero-grid opacity-40" aria-hidden="true" />

      {/* Gradient orbs for depth */}
      <div
        className="absolute top-[15%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-brand-lavender/15 blur-[100px] animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[15%] right-[10%] w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full bg-brand-peach/15 blur-[100px] animate-float"
        style={{ animationDelay: "-3s" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-[40%] right-[25%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full bg-brand-mint/10 blur-[100px] animate-float"
        style={{ animationDelay: "-5s" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[12px] font-semibold tracking-[1.5px] uppercase text-muted-soft mb-6 md:mb-8 animate-fade-in">
          Full-Stack Engineer &amp; Systems Specialist
        </p>

        {/* Name — Clay display-xl substitute */}
        <h1
          className="text-[36px] md:text-[56px] lg:text-[72px] font-medium tracking-[-1px] md:tracking-[-2px] lg:tracking-[-2.5px] text-ink leading-[1] mb-6 md:mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          MOH ILYAS
        </h1>

        {/* Tagline */}
        <p
          className="text-[16px] md:text-[18px] lg:text-[20px] text-body leading-[1.55] max-w-2xl mx-auto mb-10 md:mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          World-Class Computing Medalist &amp; Full-Stack Engineer bridging
          software scalability with enterprise systems infrastructure.
        </p>

        {/* Social links row */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[14px] font-medium text-muted hover:text-ink transition-colors"
            id="hero-linkedin"
          >
            <LinkedInIcon className="w-[18px] h-[18px]" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Miyas-2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[14px] font-medium text-muted hover:text-ink transition-colors"
            id="hero-github"
          >
            <GitHubIcon className="w-[18px] h-[18px]" />
            <span>GitHub</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-[14px] font-medium text-muted hover:text-ink transition-colors"
            id="hero-portfolio"
          >
            <GlobeIcon className="w-[18px] h-[18px]" />
            <span>Portfolio</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[14px] font-medium text-muted hover:text-ink transition-colors"
            id="hero-instagram"
          >
            <InstagramIcon className="w-[18px] h-[18px]" />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#accolades"
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-pulse-gentle no-underline"
        id="hero-scroll-cta"
      >
        <span className="text-[12px] font-medium tracking-[0.5px] text-muted-soft">
          Scroll to explore my journey
        </span>
        <ArrowDownIcon className="w-5 h-5 text-muted-soft" />
      </a>
    </section>
  );
}
