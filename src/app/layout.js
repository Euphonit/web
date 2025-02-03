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
