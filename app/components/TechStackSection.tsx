export default function TechStackSection() {
  const languages = [
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/000000" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/000000" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/000000" },
    { name: "Java", icon: "https://cdn.simpleicons.org/oracle/000000" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/000000" },
    { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql/000000" },
  ];

  const frameworks = [
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/000000" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/000000" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/000000" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
    { name: "Flask", icon: "https://cdn.simpleicons.org/flask/000000" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/000000" },
  ];

  const infrastructure = [
    { name: "openGauss", icon: "https://opengauss.org/category/brand/view/logo1.png" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/000000" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/000000" },
    { name: "openEuler Linux", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/OpenEuler-horizontal-left.svg" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/000000" },
    { name: "Huawei eNSP", icon: "https://cdn.simpleicons.org/huawei/000000" },
  ];

  return (
    <section id="tech-stack" className="py-16 md:py-[96px] px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-[12px] font-semibold tracking-[1.5px] uppercase text-muted-soft mb-2 reveal">
            TECHNOLOGY &amp; TOOLING
          </p>
          <h2 className="text-[32px] md:text-[40px] font-medium tracking-[-1px] text-ink leading-[1.15] reveal reveal-delay-1">
            Tech Stack &amp; Infrastructure
          </h2>
        </div>

        {/* Solar System Orbit Map */}
        <div className="relative w-full aspect-square max-w-[440px] sm:max-w-[540px] md:max-w-[680px] h-[440px] sm:h-[540px] md:h-[680px] mx-auto flex items-center justify-center reveal reveal-delay-2">
          
          {/* Inner Orbit (Languages) */}
          <div className="absolute w-[calc(var(--r-inner)*2)] h-[calc(var(--r-inner)*2)] border border-dashed border-hairline rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          {/* Middle Orbit (Frameworks) */}
          <div className="absolute w-[calc(var(--r-middle)*2)] h-[calc(var(--r-middle)*2)] border border-dashed border-hairline rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          {/* Outer Orbit (Infrastructure) */}
          <div className="absolute w-[calc(var(--r-outer)*2)] h-[calc(var(--r-outer)*2)] border border-dashed border-hairline rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          {/* Sun (Core) */}
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-ink text-on-primary flex items-center justify-center font-bold text-[11px] sm:text-[13px] tracking-wider shadow-md border-4 border-canvas top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            CORE
          </div>

          {/* Inner Ring Planets: Languages */}
          {languages.map((item, idx) => {
            const angle = (idx / languages.length) * 2 * Math.PI;
            return (
              <div
                key={item.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                style={{
                  left: `calc(50% + var(--r-inner) * ${Math.cos(angle).toFixed(4)})`,
                  top: `calc(50% + var(--r-inner) * ${Math.sin(angle).toFixed(4)})`,
                }}
              >
                <div
                  className="group flex flex-col items-center"
                  style={{
                    animation: "float-space 4s ease-in-out infinite",
                    animationDelay: `${idx * 0.4}s`,
                  }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-canvas border border-hairline shadow-sm flex items-center justify-center hover:scale-110 hover:border-brand-mint hover:shadow transition-all duration-300 cursor-pointer">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain filter grayscale brightness-0 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -bottom-6 bg-ink text-on-primary text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm z-30">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Middle Ring Planets: Frameworks */}
          {frameworks.map((item, idx) => {
            const angle = (idx / frameworks.length) * 2 * Math.PI;
            return (
              <div
                key={item.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                style={{
                  left: `calc(50% + var(--r-middle) * ${Math.cos(angle).toFixed(4)})`,
                  top: `calc(50% + var(--r-middle) * ${Math.sin(angle).toFixed(4)})`,
                }}
              >
                <div
                  className="group flex flex-col items-center"
                  style={{
                    animation: "float-space 4.5s ease-in-out infinite",
                    animationDelay: `${idx * 0.5}s`,
                  }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-canvas border border-hairline shadow-sm flex items-center justify-center hover:scale-110 hover:border-brand-pink hover:shadow transition-all duration-300 cursor-pointer">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain filter grayscale brightness-0 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -bottom-6 bg-ink text-on-primary text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm z-30">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Outer Ring Planets: Databases & Infrastructure */}
          {infrastructure.map((item, idx) => {
            const angle = (idx / infrastructure.length) * 2 * Math.PI;
            return (
              <div
                key={item.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                style={{
                  left: `calc(50% + var(--r-outer) * ${Math.cos(angle).toFixed(4)})`,
                  top: `calc(50% + var(--r-outer) * ${Math.sin(angle).toFixed(4)})`,
                }}
              >
                <div
                  className="group flex flex-col items-center"
                  style={{
                    animation: "float-space 5s ease-in-out infinite",
                    animationDelay: `${idx * 0.6}s`,
                  }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-canvas border border-hairline shadow-sm flex items-center justify-center hover:scale-110 hover:border-brand-lavender hover:shadow transition-all duration-300 cursor-pointer">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain filter grayscale brightness-0 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -bottom-6 bg-ink text-on-primary text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm z-30">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
