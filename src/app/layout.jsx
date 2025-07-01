import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = {
  title: "Daniel Crutti",
  description: "Daniel Crutti's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
