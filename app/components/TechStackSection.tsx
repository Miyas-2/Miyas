export default function TechStackSection() {
  const techItems = [
    { name: "PHP", category: "Language", icon: "https://cdn.simpleicons.org/php/000000" },
    { name: "JavaScript", category: "Language", icon: "https://cdn.simpleicons.org/javascript/000000" },
    { name: "Python", category: "Language", icon: "https://cdn.simpleicons.org/python/000000" },
    { name: "Java", category: "Language", icon: "https://cdn.simpleicons.org/oracle/000000" },
    { name: "TypeScript", category: "Language", icon: "https://cdn.simpleicons.org/typescript/000000" },
    { name: "SQL", category: "Language", icon: "https://cdn.simpleicons.org/postgresql/000000" },
    { name: "Laravel", category: "Framework", icon: "https://cdn.simpleicons.org/laravel/000000" },
    { name: "Next.js", category: "Framework", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "React", category: "Framework", icon: "https://cdn.simpleicons.org/react/000000" },
    { name: "Node.js", category: "Framework", icon: "https://cdn.simpleicons.org/nodedotjs/000000" },
    { name: "Express", category: "Framework", icon: "https://cdn.simpleicons.org/express/000000" },
    { name: "Flask", category: "Framework", icon: "https://cdn.simpleicons.org/flask/000000" },
    { name: "Supabase", category: "Framework", icon: "https://cdn.simpleicons.org/supabase/000000" },
    { name: "openGauss", category: "Database", icon: "https://opengauss.org/category/brand/view/logo1.png" },
    { name: "PostgreSQL", category: "Database", icon: "https://cdn.simpleicons.org/postgresql/000000" },
    { name: "MySQL", category: "Database", icon: "https://cdn.simpleicons.org/mysql/000000" },
    { name: "openEuler Linux", category: "Infrastructure", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/OpenEuler-horizontal-left.svg" },
    { name: "Docker", category: "Infrastructure", icon: "https://cdn.simpleicons.org/docker/000000" },
    { name: "Huawei eNSP", category: "Infrastructure", icon: "https://cdn.simpleicons.org/huawei/000000" },
  ];

  // Tripled list for seamless infinite marquee loop
  const marqueeItems = [...techItems, ...techItems, ...techItems];

  return (
    <section id="tech-stack" className="py-16 md:py-[80px] px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-[12px] font-semibold tracking-[1.5px] uppercase text-muted-soft mb-2 reveal">
            TECHNOLOGY &amp; TOOLING
          </p>
          <h2 className="text-[32px] md:text-[40px] font-medium tracking-[-1px] text-ink leading-[1.15] reveal reveal-delay-1">
            Tech Stack &amp; Infrastructure
          </h2>
        </div>

        {/* Marquee Loop (Mobius Strip style ribbon) */}
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] +mr-[50vw] overflow-hidden border-y border-hairline py-6 mb-16 bg-surface-soft reveal reveal-delay-2">
          <div className="animate-marquee hover:[animation-play-state:paused] cursor-pointer flex gap-12 items-center">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 select-none flex-shrink-0">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 object-contain filter grayscale brightness-0 opacity-70"
                />
                <span className="text-[14px] font-medium text-ink tracking-tight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hexagon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 reveal reveal-delay-3">
          {techItems.map((item) => (
            <div key={item.name} className="group flex flex-col items-center text-center">
              {/* Hexagon icon container */}
              <div
                className="w-16 h-18 bg-surface-soft border border-hairline hover:border-brand-mint/50 transition-all duration-300 flex items-center justify-center mb-3 group-hover:scale-105 shadow-sm"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 object-contain filter grayscale brightness-0 opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
                />
              </div>
              <h4 className="text-[14px] font-semibold text-ink leading-none mb-1">{item.name}</h4>
              <p className="text-[11px] text-muted-soft">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
