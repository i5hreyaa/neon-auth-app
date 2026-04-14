"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        router.replace("/login");
        return;
      }

      setEmail(data.user.email || "");
      setFullName((data.user.user_metadata?.full_name as string) || "User");
      setLoading(false);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session?.user) {
        router.replace("/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center text-white">
        Loading dashboard...
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <nav className="glass-card mb-8 flex items-center justify-between rounded-full px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-wide">
            AetherX
          </Link>

          <button
            onClick={handleLogout}
            className="outline-button rounded-full px-5 py-2 text-sm font-medium"
          >
            Logout
          </button>
        </nav>

        <section className="glass-card rounded-[32px] p-8 md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/50">
            Dashboard
          </p>
          <h1 className="text-4xl font-extrabold">
            Welcome back, <span className="neon-text">{fullName}</span>
          </h1>
          <p className="mt-4 text-white/70">
            You are now logged in to your personalized workspace.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="glass-card rounded-3xl p-5">
              <p className="text-sm text-white/50">Account Email</p>
              <p className="mt-2 text-lg font-semibold">{email}</p>
            </div>

            <div className="glass-card rounded-3xl p-5">
              <p className="text-sm text-white/50">Saved Projects</p>
              <p className="mt-2 text-lg font-semibold">12</p>
            </div>

            <div className="glass-card rounded-3xl p-5">
              <p className="text-sm text-white/50">Workspace Status</p>
              <p className="mt-2 text-lg font-semibold text-purple-300">
                Active
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}