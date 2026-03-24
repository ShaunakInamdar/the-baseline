import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { isClerkConfigured } from "@/lib/auth-config";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Baseline",
  description: "Hackathon starter — Clerk + Supabase + Claude AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = (
    <html lang="en">
      <body>{children}</body>
    </html>
  );

  if (!isClerkConfigured) {
    return content;
  }

  return <ClerkProvider>{content}</ClerkProvider>;
}
