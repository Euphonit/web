import "./globals.css";
import { poppins } from "./lib/fonts";

export const metadata = {
  title: "Daniel Crutti",
  description: "Daniel Cruttis website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
