import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  MailIcon,
  DownloadIcon,
} from "./Icons";


export default function FooterSection() {
  return (
    <section id="footer" className="bg-surface-soft">
      {/* Main content */}
      <div className="py-16 md:py-[96px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* ── Left Column: Education & Skills ── */}
            <div className="reveal">
              <p className="text-[12px] font-semibold tracking-[1.5px] uppercase text-muted-soft mb-6">
                FOUNDATION
              </p>

              {/* Education */}
              <div className="mb-10">
                <h3 className="text-[24px] font-medium tracking-[-0.3px] text-ink leading-[1.3] mb-6">
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="bg-canvas rounded-[16px] p-5 border border-hairline-soft">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <p className="text-[16px] font-semibold text-ink">
                          S1 Informatika
                        </p>
                        <p className="text-[14px] text-muted">
                          Institut Teknologi Nasional Bandung
                        </p>
                      </div>
                      <span className="text-[13px] font-semibold text-brand-mint bg-brand-mint/15 px-3 py-1 rounded-full flex-shrink-0">
                        GPA 3.87 / 4.00
                      </span>
                    </div>
                  </div>
                  <div className="bg-canvas rounded-[16px] p-5 border border-hairline-soft">
                    <p className="text-[16px] font-semibold text-ink">
                      SMK Culinary Arts
                    </p>
                    <p className="text-[14px] text-muted">
                      SMK Bina Wisata Lembang · 2019–2022
                    </p>
                  </div>
                </div>
              </div>


              {/* Hospitality note */}
              <div className="border-t border-hairline pt-6">
                <p className="text-[14px] text-body leading-[1.55]">
                  <span className="font-semibold text-ink">
                    Early foundation:
                  </span>{" "}
                  Maintained persistent roles as Waiter &amp; Cook Helper
                  (2021–2024) in high-volume restaurant environments, establishing
                  collaborative adaptation and task execution under intense
                  pressure.
                </p>
              </div>
            </div>

            {/* ── Right Column: CTA ── */}
            <div className="reveal reveal-delay-2">
              <h2 className="text-[32px] md:text-[40px] font-medium tracking-[-1px] text-ink leading-[1.1] mb-6">
                Let&apos;s scale systems together.
              </h2>

              <p className="text-[16px] text-body leading-[1.55] mb-10">
                Currently interning at UPT-TIK ITENAS and open to full-stack
                engineering opportunities. Let&apos;s connect and build something
                impactful.
              </p>

              {/* Contact email */}
              <div className="mb-8">
                <a
                  href="mailto:mohh.ilyass@gmail.com
                  "
                  className="inline-flex items-center gap-3 text-[16px] font-medium text-ink hover:text-brand-pink transition-colors group"
                  id="footer-email"
                >
                  <span className="p-2 rounded-[10px] bg-surface-card border border-hairline-soft group-hover:bg-brand-pink/10 group-hover:border-brand-pink/20 transiton-colors">
                    <MailIcon className="w-5 h-5" />
                  </span>
                  <span>mohh.ilyass@gmail.com
                  </span>
                </a>
              </div>

              {/* Download Resume — massive CTA */}
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-3 w-full bg-ink text-on-primary font-semibold text-[14px] tracking-[0.5px] px-8 py-4 rounded-[12px] hover:bg-body-strong transition-colors mb-12"
                id="footer-download-resume"
              >
                <DownloadIcon className="w-5 h-5" />
                DOWNLOAD FULL RESUME (PDF)
              </a>

              {/* Social links */}
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-hairline">
                <a
                  href="https://github.com/Miyas-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] font-medium text-muted hover:text-ink transition-colors"
                  id="footer-github"
                >
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] font-medium text-muted hover:text-ink transition-colors"
                  id="footer-linkedin"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] font-medium text-muted hover:text-ink transition-colors"
                  id="footer-instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-hairline px-6 py-6">
        <div className="max-w-[1280px] mx-auto text-center">
          <p className="text-[13px] text-muted-soft">
            © 2026 Moh Ilyas. Built with Next.js.
          </p>
        </div>
      </div>
    </section>
  );
}
