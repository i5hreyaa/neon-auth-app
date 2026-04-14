import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/25 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-purple-400/20 bg-white/5 shadow-[0_0_40px_rgba(168,85,247,0.12)] backdrop-blur-xl lg:grid-cols-2">
        <div className="hidden flex-col justify-between bg-gradient-to-br from-blue-500/15 via-violet-500/10 to-fuchsia-500/10 p-10 lg:flex">
          <div>
            <p className="mb-4 inline-block rounded-full border border-blue-400/30 px-4 py-1 text-sm text-blue-200">
              Welcome Back
            </p>
            <h1 className="text-4xl font-extrabold leading-tight">
              Enter your <span className="neon-text">creative workspace</span>
            </h1>
            <p className="mt-5 max-w-md text-white/70">
              Log in to continue exploring tools, managing projects, and accessing your personalized digital dashboard.
            </p>
          </div>

          <div className="glass-card rounded-[28px] p-5">
            <p className="text-sm text-white/60">Inside your account</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>• View saved resources</li>
              <li>• Access your profile</li>
              <li>• Manage personal dashboard</li>
              <li>• Continue where you left off</li>
            </ul>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-wide">
              AetherX
            </Link>
            <Link
              href="/signup"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-purple-300/40 hover:text-purple-200"
            >
              Sign Up
            </Link>
          </div>

          <div className="mx-auto max-w-md">
            <p className="text-sm uppercase tracking-[0.2em] text-white/45">
              Login
            </p>
            <h2 className="mt-2 text-3xl font-bold">Welcome back</h2>
            <p className="mt-3 text-white/65">Log in to access your account.</p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-purple-400/50 focus:bg-white/8"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-purple-400/50 focus:bg-white/8"
                />
              </div>

              <button
                type="submit"
                className="neon-button w-full rounded-2xl px-6 py-3 font-semibold text-white"
              >
                Login
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-white/55">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-purple-300 transition hover:text-pink-300"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}