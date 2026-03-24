import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { isClerkConfigured } from "@/lib/auth-config";

export default function Home() {
  const authConfigured = isClerkConfigured;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">The Baseline</h1>
        <p className="text-xl text-gray-500 mb-8">
          A lean hackathon starter with auth, data, and AI helpers ready to wire
          into whatever you build next.
        </p>

        <div className="flex gap-4 justify-center">
          {authConfigured ? (
            <>
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  Sign Up
                </Link>
              </SignedOut>

              <SignedIn>
                <UserButton />
                <p className="text-sm text-gray-500 self-center">
                  Auth is configured. Add your product pages in <code>app/</code>.
                </p>
              </SignedIn>
            </>
          ) : (
            <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Add your Clerk keys to `.env.local` to enable sign-in and protected
              routes.
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full max-w-2xl">
        {[
          { name: "Next.js 15", desc: "App Router starter shell" },
          { name: "Clerk", desc: "Optional auth scaffolding" },
          { name: "Supabase", desc: "Client/server helpers in lib/" },
          { name: "Claude AI", desc: "Server helper ready for routes" },
        ].map((item) => (
          <div
            key={item.name}
            className="border border-gray-200 rounded-lg p-4 text-center"
          >
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-2xl rounded-lg border border-gray-200 p-6 space-y-3">
        <h2 className="text-xl font-semibold">Suggested setup order</h2>
        <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
          <li>Copy <code>.env.example</code> to <code>.env.local</code>.</li>
          <li>Connect Clerk if you want auth.</li>
          <li>Connect Supabase and create your product tables.</li>
          <li>Add server routes or actions for product logic and AI.</li>
          <li>Build pages and shared UI for your product.</li>
        </ol>
        <p className="text-sm text-gray-500">
          For a low-token setup brief, read <code>AGENTS.md</code>.
        </p>
      </div>
    </main>
  );
}
