import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./components/font";

export const metadata = {
  title: "Daniel Crutti",
  description: "Daniel Crutti's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="--font-poppins bg-blue-950 text-white">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
