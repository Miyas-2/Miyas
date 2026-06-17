import { BriefcaseIcon, UsersIcon } from "./Icons";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-12 md:py-[64px] px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-[12px] font-semibold tracking-[1.5px] uppercase text-muted-soft mb-2 reveal">
            LEADERSHIP
          </p>
          <h2 className="text-[32px] md:text-[40px] font-medium tracking-[-1px] text-ink leading-[1.15] reveal reveal-delay-1">
            Beyond the code.
          </h2>
        </div>

        {/* Leadership typography rows */}
        <div className="space-y-8">
          {/* Row 1: ITENAS Job Fair */}
          <div className="reveal reveal-delay-2 border-t border-hairline pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-2">
                  <BriefcaseIcon className="w-4 h-4 text-muted" />
                  <span className="text-[14px] font-semibold text-ink">ITENAS Job Fair 2026</span>
                  <span className="text-[13px] text-muted">· Student Affairs Bureau</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-medium text-ink mb-3">
                  Chief Executive
                </h3>
                <p className="text-[14px] text-body leading-[1.55]">
                  Managed end-to-end event operations, corporate sponsor logistics, and budgets across cross-functional student teams.
                </p>
              </div>
              <div className="flex flex-col gap-1 text-left md:text-right flex-shrink-0">
                <span className="text-[13px] font-semibold text-ink">Chief Executive (Apr & Oct 2026)</span>
                <span className="text-[12px] text-muted">LO Coordinator (Oct 2025)</span>
                <span className="text-[12px] text-muted">General LO (Oct 2024 · Apr 2025)</span>
              </div>
            </div>
          </div>

          {/* Row 2: HMIF ITENAS */}
          <div className="reveal reveal-delay-3 border-t border-hairline pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-2">
                  <UsersIcon className="w-4 h-4 text-muted" />
                  <span className="text-[14px] font-semibold text-ink">HMIF ITENAS</span>
                  <span className="text-[13px] text-muted">· Informatics Student Association</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-medium text-ink mb-3">
                  Event Treasurer
                </h3>
                <p className="text-[14px] text-body leading-[1.55]">
                  Formulated budget structures, managed operational cash flows, and finalized financial accountabilities across three institutional events.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["General Assembly", "Graduation Gala", "20th Anniversary"].map((event) => (
                    <span key={event} className="text-[11px] font-medium text-muted bg-surface-soft px-2 py-0.5 rounded">
                      {event}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-left md:text-right flex-shrink-0">
                <span className="text-[13px] font-semibold text-ink">Oct 2024 – May 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
