import Link from "next/link";

const featuredCards = [
  {
    title: "Creator Workspace",
    subtitle: "Organize projects, ideas, and saved inspiration.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Design Studio",
    subtitle: "Build stronger visuals with curated creative resources.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI Workflow",
    subtitle: "Plan, create, and manage your digital workflow.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
  },
];

const works = [
  "Smart dashboards",
  "AI workflows",
  "Creative systems",
  "Design kits",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden px-6 py-8 md:px-10 lg:px-16">
      {/* Glow Background */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* NAVBAR */}
        <nav className="glass-card mb-8 flex items-center justify-between rounded-full px-6 py-4">
          <h1 className="text-xl font-bold tracking-wide">AetherX</h1>

          <div className="hidden gap-8 text-sm text-white/80 md:flex">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#explore" className="nav-link">
              Explore
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#stats" className="nav-link">
              Stats
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="outline-button rounded-full px-5 py-2 text-sm font-medium"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="neon-button rounded-full px-5 py-2 text-sm font-semibold text-white"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* HERO + CONTENT */}
        <section id="home" className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
          {/* LEFT SIDE */}
          <div className="glass-card rounded-[32px] p-8 md:p-10">
            <p className="mb-4 inline-block rounded-full border border-pink-400/30 px-4 py-1 text-sm text-pink-200">
              Creative AI Platform
            </p>

            <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              Build your future in a{" "}
              <span className="neon-text">premium digital workspace</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
              AetherX helps creators, students, and builders explore tools,
              manage projects, save inspiration, and create a strong digital
              presence in one immersive platform.
            </p>

            {/* HERO BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="neon-button rounded-full px-6 py-3 font-semibold"
              >
                Create Account
              </Link>

              <Link
                href="/login"
                className="outline-button rounded-full px-6 py-3 text-white/85"
              >
                Login
              </Link>
            </div>

            {/* CARDS */}
            <div id="explore" className="mt-10 grid gap-5 md:grid-cols-3">
              {featuredCards.map((card) => (
                <div
                  key={card.title}
                  className="glass-card card-lift overflow-hidden rounded-3xl p-4"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="mb-4 h-44 w-full rounded-2xl object-cover"
                  />

                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{card.subtitle}</p>

                  <button className="neon-button mt-4 rounded-full px-4 py-2 text-sm font-medium">
                    View More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <div className="glass-card overflow-hidden rounded-[28px] p-6">
              <h3 className="text-3xl font-bold">
                Trending <span className="neon-text">Workspaces</span>
              </h3>

              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="Trending"
                className="mt-6 h-52 w-full rounded-3xl object-cover"
              />

              <p className="mt-4 text-white/70">
                Discover high-impact creative systems, AI workflows, and visual
                setups designed to help you work smarter and build faster.
              </p>
            </div>

            <div id="stats" className="glass-card rounded-[28px] p-6">
              <h3 className="text-2xl font-bold">Platform Stats</h3>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold neon-text">42K</p>
                  <p className="text-sm text-white/60">Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold neon-text">204</p>
                  <p className="text-sm text-white/60">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold neon-text">24M</p>
                  <p className="text-sm text-white/60">Interactions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold neon-text">112</p>
                  <p className="text-sm text-white/60">Tools</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="glass-card rounded-[32px] p-8 md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
              About AetherX
            </p>

            <h3 className="text-3xl font-bold md:text-4xl">
              A space for modern creators to{" "}
              <span className="neon-text">build, organize, and grow</span>
            </h3>

            <p className="mt-5 max-w-2xl text-white/70">
              AetherX is designed for people who want a more inspiring digital
              experience than a plain dashboard. It combines aesthetics with
              functionality so users can explore resources, manage their work,
              and personalize their creative journey.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {works.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card overflow-hidden rounded-[32px] p-4">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="About"
              className="h-full min-h-[320px] w-full rounded-[24px] object-cover"
            />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-16 text-center">
          <div className="glass-card mx-auto max-w-3xl rounded-[32px] p-10">
            <h2 className="text-3xl font-bold">
              Ready to build your{" "}
              <span className="neon-text">digital workspace?</span>
            </h2>

            <p className="mt-4 text-white/70">
              Join AetherX and start organizing your ideas, tools, and projects
              today.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <Link
                href="/signup"
                className="neon-button rounded-full px-6 py-3 font-semibold"
              >
                Sign Up
              </Link>

              <Link
                href="/login"
                className="outline-button rounded-full px-6 py-3"
              >
                Login
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}