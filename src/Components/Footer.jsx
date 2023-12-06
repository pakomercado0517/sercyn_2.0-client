import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [year, setYear] = useState();

  useEffect(() => {
    const newYear = new Date().getFullYear();
    setYear(newYear);
  }, []);

  return (
    <footer className="mt-16 p-4 bg-zinc-50 rounded-lg shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link to="#" className="flex items-center mb-4 sm:mb-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/sercyn-22d2f.appspot.com/o/web-images%2Flogo_sercyn_final.png?alt=media&token=5ca8fceb-814c-4e5d-8f2d-4636ea6babff"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-[#064273] text-2xl font-semibold whitespace-nowrap">
            Náutica SerCyn
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-[#064273] sm:mb-0 ">
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6 ">
              Acerca de Nosotros
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">
              Polítca de Privacidad
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6 ">
              Licencia
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-[#eccca2] sm:mx-auto lg:my-8" />
      <span className="block text-sm text-[#1da2d8] sm:text-center">
        {year} ©{" "}
        <Link to="#" className="hover:underline">
          Náutica SerCyn™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
