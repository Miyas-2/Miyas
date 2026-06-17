export default function AccoladesSection() {
  return (
    <section id="accolades" className="py-12 md:py-[64px] px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-[12px] font-semibold tracking-[1.5px] uppercase text-muted-soft mb-2 reveal">
            RECOGNITION
          </p>
          <h2 className="text-[32px] md:text-[40px] font-medium tracking-[-1px] text-ink leading-[1.15] reveal reveal-delay-1">
            Global-stage validation.
          </h2>
        </div>

        {/* Accolades typography rows */}
        <div className="space-y-8">
          {/* Accolade 1 */}
          <div className="reveal reveal-delay-2 border-t border-hairline pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-[12px] font-semibold tracking-[1px] uppercase text-ink bg-surface-card px-2 py-0.5 rounded">
                    GLOBAL COMPETITION
                  </span>
                  <span className="text-[14px] font-medium text-ink">
                    Huawei ICT Competition 2025–2026
                  </span>
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-ink mb-3">
                  2nd Prize Global Winner
                </h3>
                <p className="text-[14px] text-body leading-[1.55]">
                  Advanced through national and regional stages, outperforming elite cohorts from 100+ countries in the Computing Track (Shenzhen, China).
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Computing Track", "openGauss", "openEuler", "Kunpeng Architecture"].map((tag) => (
                    <span key={tag} className="text-[11px] font-medium text-muted bg-surface-soft px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1.5 text-left md:text-right flex-shrink-0">
                <span className="text-[13px] font-semibold text-ink">1st Place National (Dec 2025)</span>
                <span className="text-[13px] font-semibold text-ink">3rd Place Asia-Pacific (May 2026)</span>
                <span className="text-[13px] font-semibold text-ink">2nd Place Global (June 2026)</span>
              </div>
            </div>
          </div>

          {/* Accolade 2 */}
          <div className="reveal reveal-delay-3 border-t border-hairline pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-[12px] font-semibold tracking-[1px] uppercase text-ink bg-surface-card px-2 py-0.5 rounded">
                    NATIONAL INNOVATION
                  </span>
                  <span className="text-[14px] font-medium text-ink">
                    Samsung Innovation Campus Batch 7
                  </span>
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-ink mb-3">
                  2nd Place National Winner
                </h3>
                <p className="text-[14px] text-body leading-[1.55]">
                  Progressed through intensive coding, IoT, and AI bootcamp phases to secure top ranking out of 1,000+ teams nationwide.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Startup Pitching", "AIoT Platform", "National Scale"].map((tag) => (
                    <span key={tag} className="text-[11px] font-medium text-muted bg-surface-soft px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-left md:text-right flex-shrink-0">
                <span className="text-[13px] font-semibold text-ink block">Tumbuhkan AIoT Project</span>
                <span className="text-[12px] text-muted block mt-1">ESP32 telemetry, CV, and Gemini LLM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
