import Nav from '../Nav/nav';
import Footer from '../Footer/footer';
import { ReactNode } from 'react';

function Main({ title, children, isSession }: { title: string; children?: ReactNode; isSession: boolean }) {
  return (
    <>
      <head>
        <title>{title ? title : 'Tasks'}</title>
        {/* Tags Seo */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <main className="min-h-screen">
        <Nav isSession={isSession} />
        {children ? children : <></>}
      </main>
      <Footer />
    </>
  );
}

export default Main;
