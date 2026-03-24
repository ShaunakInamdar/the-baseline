import { SignUp } from "@clerk/nextjs";
import { isClerkConfigured } from "@/lib/auth-config";

export default function SignUpPage() {
  if (!isClerkConfigured) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md rounded-lg border border-amber-300 bg-amber-50 p-6 text-sm text-amber-950">
          Add your Clerk keys to `.env.local` before using the sign-up flow.
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <SignUp />
    </main>
  );
}
