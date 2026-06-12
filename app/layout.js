import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
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
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "SEE Retreat social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEE Retreat",
    description: "A 7-day transformational retreat landing page.",
    images: ["/social-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
