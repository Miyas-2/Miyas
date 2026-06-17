const timelineData = [
  {
    color: "brand-mint",
    period: "JAN 2026 — PRESENT",
    title: "Full-Stack Developer Intern",
    org: "UPT-TIK ITENAS · Bandung",
    type: "projects" as const,
    projects: [
      {
        title: "Dynamic Questionnaire Engine",
        desc: "Re-engineered legacy static query systems into dynamic relational architectures via Laravel and MySQL.",
      },
      {
        title: "i-Care Ticketing Application",
        desc: "Developed the campus-wide automated complaint escalation management system.",
      },
      {
        title: "PKM Portal & Admissions",
        desc: "Built full-stack reporting layers and patch-fixed production admissions logic.",
      },
      {
        title: "Nicegas Landing Page",
        desc: "Engineered responsive UI layouts for bio-CNG energy platform using Next.js and Tailwind CSS.",
      },
    ],
  },
  {
    color: "brand-lavender",
    period: "OCT 2025 — PRESENT",
    title: "Laboratory Teaching Assistant",
    org: "Informatics Laboratory · ITENAS",
    type: "domains" as const,
    domains: [
      {
        label: "Computer Networks",
        detail: "eNSP topology mapping, static routing, inter-VLAN",
      },
      {
        label: "Database Programming",
        detail: "SQL relational schemas and execution optimization",
      },
      {
        label: "Digital Image Processing",
        detail: "Matrix manipulation, computer vision (Python)",
      },
      {
        label: "Basic Programming",
        detail: "Data structures and programmatic logic",
      },
    ],
  },
  {
    color: "brand-peach",
    period: "OCT 2025 — PRESENT",
    title: "ICT & Cyber Security Lab",
    org: "R&D Laboratory · ITENAS",
    type: "description" as const,
    description:
      "Conducted internal deployment benchmarks on distributed openGauss multi-node database clusters and optimization pipelines on Linux openEuler instances. Core infrastructure work supporting competition preparation for national and international stages.",
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string }> = {
  "brand-mint": {
    border: "border-brand-mint",
    text: "text-brand-mint",
    bg: "bg-brand-mint",
  },
  "brand-lavender": {
    border: "border-brand-lavender",
    text: "text-brand-lavender",
    bg: "bg-brand-lavender",
  },
  "brand-peach": {
    border: "border-brand-peach",
    text: "text-brand-peach",
    bg: "bg-brand-peach",
  },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-[96px] px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[12px] font-semibold tracking-[1.5px] uppercase text-muted-soft mb-4 reveal">
            EXPERIENCE
          </p>
          <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-medium tracking-[-1px] md:tracking-[-2px] text-ink leading-[1.05] reveal reveal-delay-1">
            Building at production scale.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Gradient timeline line */}
          <div
            className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand-mint via-brand-lavender to-brand-peach rounded-full"
            aria-hidden="true"
          />

          {/* Timeline nodes */}
          <div className="space-y-14 md:space-y-16">
            {timelineData.map((node, i) => {
              const colors = colorMap[node.color];
              return (
                <div
                  key={node.title}
                  className={`relative pl-12 md:pl-14 reveal reveal-delay-${i + 2}`}
                >
                  {/* Node dot */}
                  <div
                    className={`absolute left-[9px] md:left-[13px] top-1 w-[14px] h-[14px] rounded-full border-[3px] ${colors.border} bg-canvas`}
                  />

                  {/* Period label */}
                  <p
                    className={`text-[12px] font-semibold tracking-[1px] uppercase ${colors.text} mb-2`}
                  >
                    {node.period}
                  </p>

                  {/* Title & org */}
                  <h3 className="text-[20px] md:text-[24px] font-medium tracking-[-0.3px] text-ink leading-[1.3] mb-1">
                    {node.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-muted mb-6">
                    {node.org}
                  </p>

                  {/* Content based on type */}
                  {node.type === "projects" && node.projects && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      {node.projects.map((project) => (
                        <div key={project.title} className="group">
                          <h4 className="text-[16px] font-semibold text-ink mb-1.5 transition-colors group-hover:text-brand-mint">
                            {project.title}
                          </h4>
                          <p className="text-[14px] text-body leading-[1.55]">
                            {project.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {node.type === "domains" && node.domains && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {node.domains.map((domain) => (
                        <div key={domain.label}>
                          <p className="text-[14px] font-semibold text-ink">
                            {domain.label}
                          </p>
                          <p className="text-[13px] text-muted leading-[1.4] mt-0.5">
                            {domain.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {node.type === "description" && node.description && (
                    <div className="max-w-3xl">
                      <p className="text-[15px] text-body leading-[1.6]">
                        {node.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
