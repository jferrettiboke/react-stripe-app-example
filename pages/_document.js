import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased font-sans text-black bg-grey-lighter">
          <Main />
          <NextScript />
          <script src="https://js.stripe.com/v3/" async />
        </body>
      </html>
    );
  }
}
