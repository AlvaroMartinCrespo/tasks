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
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Acerca de nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Servicios
                </a>
              </li>
              {/* Agregar más enlaces según sea necesario */}
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
            {/* Agregar iconos o enlaces a redes sociales */}
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Información de contacto</h3>
            <p>Dirección: 123 Calle, Ciudad</p>
            <p>Teléfono: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          {/* Agregar más secciones según sea necesario */}
        </div>
      </div>
      <div className="bg-gray-700 py-4">
        <p className="text-center text-gray-300">
          &copy; {new Date().getFullYear()} Nombre de la Empresa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
