import Nav from '../Nav/nav';
import Footer from '../Footer/footer';

export default function Main({ title, children }) {
  <>
    <head>
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      {/* Tags Seo */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <main>
      <Nav />
      {children ? children : <></>}
    </main>
    <Footer />
  </>;
}
