import AuthScreen from "@/components/auth/auth-screen";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  component: AuthScreen,
});
