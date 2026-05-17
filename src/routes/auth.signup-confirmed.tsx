import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/auth/signup-confirmed")({
  head: () => ({
    meta: [
      { title: "Welcome to ScholarX" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: SignupConfirmedPage,
});

function SignupConfirmedPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md text-center">
        <Link to="/" className="mb-8 inline-flex items-center justify-center gap-2 font-display text-lg font-semibold">
          <img src="/logo-removebg-preview.png" className="h-8 w-8 object-contain" alt="ScholarX" />
          ScholarX
        </Link>

        <div className="glass rounded-2xl p-8 shadow-[var(--shadow-card)] mt-4">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
            <CheckCircle className="h-7 w-7 text-primary" />
          </div>

          <h1 className="font-display text-2xl font-bold">Email confirmed!</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your ScholarX account is ready. Start asking questions across Maths,
            Science, English, and History.
          </p>

          <Button asChild className="mt-6 w-full glow">
            <Link to="/chat">Start learning</Link>
          </Button>

          <p className="mt-4 text-xs text-muted-foreground">
            Already signed in?{" "}
            <Link to="/chat" className="text-primary hover:underline">
              Go to the app
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
