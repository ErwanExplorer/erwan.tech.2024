import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "@/components/component/theme-provider";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <title>Erwan Sagnardon - Software Engineer</title>
        <link rel="icon" href="/assets/images/icon.png" />
        <meta name="description" content="Erwan Sagnardon - Software Engineer" />
        <meta name="author" content="Erwan Sagnardon" />
        <meta name="keywords" content="Développeur Web, Fullstack,Software Engineer, React, Next.js, Node.js, TailwindCSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Main />
        <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
