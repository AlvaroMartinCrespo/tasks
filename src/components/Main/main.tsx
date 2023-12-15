import Nav from '../Nav/nav';
import Footer from '../Footer/footer';
import { ReactNode } from 'react';

function Main({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <>
      <head>
        <title>{title}</title>
        {/* Tags Seo */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <main className="h-screen">
        <Nav />
        {children ? children : <></>}
      </main>
      <Footer />
    </>
  );
}

export default Main;
