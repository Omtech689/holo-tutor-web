import { createFileRoute, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth/callback")({
  beforeLoad: async ({ location }) => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const type = params.get("type");

    if (code && code.length > 10) {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (!error && data.session) {
        if (type === "signup") {
          throw redirect({ to: "/auth/signup-confirmed" });
        }

        if (type === "email_change") {
          // new_email is still set when the first link (new address) was clicked
          // and cleared once the second link (old address) completes the change
          const isPending = Boolean(data.session.user.new_email);
          throw redirect({
            to: isPending ? "/auth/email-change-pending" : "/auth/email-changed",
          });
        }

        throw redirect({ to: "/chat" });
      }

      if (error) {
        console.error("Auth callback error:", error);
      }
    }

    throw redirect({ to: "/login?error=auth_failed" });
  },
  component: () => null,
});
