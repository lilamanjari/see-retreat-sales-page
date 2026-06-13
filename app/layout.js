import "./globals.css";

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

const siteUrl = getSiteUrl();

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
