import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "MealDeals Frontend Showcase",
  description: "Frontend-only demo inspired by MealDeals.app"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
