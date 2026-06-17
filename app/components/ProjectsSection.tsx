export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-[64px] px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-[12px] font-semibold tracking-[1.5px] uppercase text-muted-soft mb-2 reveal">
            SELECTED WORK
          </p>
          <h2 className="text-[32px] md:text-[40px] font-medium tracking-[-1px] text-ink leading-[1.15] reveal reveal-delay-1">
            Projects that ship.
          </h2>
        </div>

        {/* Project typography rows */}
        <div className="space-y-12">
          {/* Project 1: Tumbuhkan */}
          <div className="reveal reveal-delay-2 border-t border-hairline pt-8">
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div className="max-w-3xl">
                <span className="text-[12px] font-semibold tracking-[1px] uppercase text-muted mb-2 block">
                  Smart Agriculture Platform
                </span>
                <h3 className="text-[24px] md:text-[28px] font-medium tracking-[-0.5px] text-ink mb-4">
                  Tumbuhkan
                </h3>
                <p className="text-[15px] text-body leading-[1.55] mb-6">
                  End-to-end automated smart hydroponics grid using ESP32 telemetry nodes to parse analog multi-sensor signals, manage automated dosage relay loops, and classify crop infection flags via edge computer vision.
                </p>
                
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Flask", "ESP32 Telemetry", "YOLO OpenCV", "Gemini LLM"].map((tech) => (
                    <span
                      key={tech}
                      className="text-[12px] font-medium text-muted bg-surface-soft px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detail meta on the right */}
              <div className="lg:text-right flex-shrink-0">
                <p className="text-[13px] font-semibold text-ink">HKI Registered</p>
                <p className="text-[12px] text-muted mt-1">Copyright for Computer Programs</p>
                <p className="text-[11px] text-muted-soft mt-0.5">Kemenkumham RI · 2026</p>
              </div>
            </div>
          </div>

          {/* Project 2: Atmosfeel */}
          <div className="reveal reveal-delay-3 border-t border-hairline pt-8">
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div className="max-w-3xl">
                <span className="text-[12px] font-semibold tracking-[1px] uppercase text-muted mb-2 block">
                  Cognitive Journal Engine
                </span>
                <h3 className="text-[24px] md:text-[28px] font-medium tracking-[-0.5px] text-ink mb-4">
                  Atmosfeel
                </h3>
                <p className="text-[15px] text-body leading-[1.55] mb-6">
                  Smart diary platform leveraging NLP text vectors to map 8 emotion matrices from user input, calling Gemini API to deliver contextually tailored wellness feedback alongside localized real-time weather telemetry.
                </p>
                
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Flask", "Supabase", "Tailwind CSS", "Gemini API"].map((tech) => (
                    <span
                      key={tech}
                      className="text-[12px] font-medium text-muted bg-surface-soft px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detail meta on the right */}
              <div className="lg:text-right flex-shrink-0">
                <p className="text-[13px] font-semibold text-ink">NLP Vector Analysis</p>
                <p className="text-[12px] text-muted mt-1">Wellness telemetry & weather</p>
                <p className="text-[11px] text-muted-soft mt-0.5">Gemini Integration · 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
