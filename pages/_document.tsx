import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark" suppressHydrationWarning>
      <Head>
        <meta name="description" content="Arsene Demenou — Fullstack Web Developer & Odoo ERP Specialist based in Cameroon. React, Next.js, Node.js, PostgreSQL, Odoo." />
        <meta name="author" content="Arsene Demenou" />
        <meta property="og:title" content="GDACTECH — Arsene Demenou | Portfolio" />
        <meta property="og:description" content="Fullstack Web Developer & Odoo ERP Specialist — Websites, E-commerce, Desktop & Mobile Apps" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gdac.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@guekoue" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/Icons/fav_GDAC.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/Icons/fav_GDAC.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/Icons/fav_GDAC.png" />
      </Head>
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
