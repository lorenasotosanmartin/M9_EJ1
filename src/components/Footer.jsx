import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-8" style={{ backgroundColor: '#121E41' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <a href="#home" className="text-md  text-white before:content-['■'] before:mr-2 before:text-white-500 ">
        <span class="font-bold"> LORENA SOTO </span> | DESARROLLADORA FRONT END
        </a>
          </div>

          <div className="text-sm text-gray-300">
            &copy; {currentYear} Todos los derechos reservados
          </div>

          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#home"
                  className="hover:text-secondary transition-colors"
                >
                  INICIO
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  className="hover:text-secondary transition-colors"
                >
                  CURRICULUM
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-secondary transition-colors"
                >
                  PROYECTOS
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-secondary transition-colors"
                >
                  CONTACTO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
