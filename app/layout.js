import "./globals.css";

export const metadata = {
  title: "SEE Retreat",
  description: "A 7-day transformational retreat landing page.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "SEE Retreat",
    description: "A 7-day transformational retreat landing page.",
    images: [
      {
        url: "/logo.png",
        width: 1254,
        height: 1254,
        alt: "SEE Retreat logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEE Retreat",
    description: "A 7-day transformational retreat landing page.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
