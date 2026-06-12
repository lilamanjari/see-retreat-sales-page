import "./globals.css";

export const metadata = {
  title: "SEE Retreat",
  description: "A 7-day transformational retreat landing page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
