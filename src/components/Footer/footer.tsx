import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://alvarodev.vercel.app/" className="text-gray-300 hover:text-white">
                  Portofolio
                </a>
              </li>
              <li>
                <a href="https://github.com/AlvaroMartinCrespo" className="text-gray-300 hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/%C3%A1lvaro-mart%C3%ADn-crespo-bb9aa5246/"
                  className="text-gray-300 hover:text-white"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Tecnologías Usadas</h3>
            {/* Añadir iconos */}
            <p>React</p>
            <p>Typescript</p>
            <p>Supabase</p>
            <p>Tailwind</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-4">
        <p className="text-center text-gray-300">&copy; {new Date().getFullYear()} Álvaro Martín Crespo.</p>
      </div>
    </footer>
  );
}

export default Footer;
