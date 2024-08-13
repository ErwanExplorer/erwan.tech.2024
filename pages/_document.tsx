import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <title>Erwan Sagnardon - Software Engineer</title>
        <link rel="icon" href="/assets/images/icon.png" />
        <meta name="description" content="Erwan Sagnardon - Software Engineer" />
        <meta name="author" content="Erwan Sagnardon" />
        <meta name="keywords" content="Erwan Sagnardon Développeur Web, Fullstack,Software Engineer, React, Next.js, Node.js, TailwindCSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
