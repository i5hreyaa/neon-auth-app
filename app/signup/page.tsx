"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    setMessage("Account created successfully. Please check your email or log in.");
    router.push("/login");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/25 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-purple-400/20 bg-white/5 shadow-[0_0_40px_rgba(168,85,247,0.12)] backdrop-blur-xl lg:grid-cols-2">
        <div className="hidden flex-col justify-between bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-blue-500/10 p-10 lg:flex">
          <div>
            <p className="mb-4 inline-block rounded-full border border-pink-400/30 px-4 py-1 text-sm text-pink-200">
              Join AetherX
            </p>
            <h1 className="text-4xl font-extrabold leading-tight">
              Create your <span className="neon-text">digital identity</span>
            </h1>
            <p className="mt-5 max-w-md text-white/70">
              Sign up to access your personal workspace, explore creative tools,
              save resources, and manage your projects in one place.
            </p>
          </div>

          <div className="glass-card rounded-[28px] p-5">
            <p className="text-sm text-white/60">Why join?</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>• Personalized creator dashboard</li>
              <li>• Save your favorite resources</li>
              <li>• Manage projects securely</li>
              <li>• Access your account anywhere</li>
            </ul>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-wide">
              AetherX
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-purple-300/40 hover:text-purple-200"
            >
              Login
            </Link>
          </div>

          <div className="mx-auto max-w-md">
            <p className="text-sm uppercase tracking-[0.2em] text-white/45">
              Sign Up
            </p>
            <h2 className="mt-2 text-3xl font-bold">Start your journey</h2>
            <p className="mt-3 text-white/65">
              Create an account to unlock your workspace.
            </p>

            <form onSubmit={handleSignup} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-purple-400/50 focus:bg-white/8"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-purple-400/50 focus:bg-white/8"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-purple-400/50 focus:bg-white/8"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-purple-400/50 focus:bg-white/8"
                  required
                />
              </div>

              {message && (
                <p className="text-sm text-pink-200">{message}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="neon-button w-full rounded-2xl px-6 py-3 font-semibold text-white disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-white/55">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-purple-300 transition hover:text-pink-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}