import { SITE_URL, markdownUrl, profile } from "@/constants/profile";
import { withBasePath } from "@/lib/basePath";
import { getFontFacesCSS } from "@/lib/fontFaces";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — Software Engineer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: `${SITE_URL}/` }],
  creator: profile.name,
  publisher: profile.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: profile.name,
    images: [
      {
        url: `${SITE_URL}/Logo.png`,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    images: [`${SITE_URL}/Logo.png`],
  },
  icons: {
    icon: withBasePath("/logo.svg"),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: getFontFacesCSS() }} />
        <link rel="describedby" href={markdownUrl("llms.txt")} />
      </head>
      <body>{children}</body>
    </html>
  );
}
