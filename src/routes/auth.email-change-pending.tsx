import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/auth/email-change-pending")({
  head: () => ({
    meta: [
      { title: "Confirm on your old email — ScholarX" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: EmailChangePendingPage,
});

function EmailChangePendingPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md text-center">
        <Link to="/" className="mb-8 inline-flex items-center justify-center gap-2 font-display text-lg font-semibold">
          <img src="/logo-removebg-preview.png" className="h-8 w-8 object-contain" alt="ScholarX" />
          ScholarX
        </Link>

        <div className="glass rounded-2xl p-8 shadow-[var(--shadow-card)] mt-4">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
            <Mail className="h-7 w-7 text-primary" />
          </div>

          <h1 className="font-display text-2xl font-bold">One more step</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your new email address is confirmed. To complete the change, open
            the confirmation email we sent to your{" "}
            <span className="font-medium text-foreground">old email address</span>{" "}
            and click the link there too.
          </p>

          <div className="mt-5 rounded-xl border border-border bg-muted/20 px-4 py-3 text-left text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Why two confirmations?</p>
            <p>
              We verify both addresses to make sure no one changes your email
              without your knowledge.
            </p>
          </div>

          <Button asChild variant="outline" className="mt-6 w-full">
            <Link to="/profile">Back to profile</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
