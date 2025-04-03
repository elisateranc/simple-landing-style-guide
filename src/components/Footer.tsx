
import React from 'react';
import Logo from './Logo';
import { Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-legalario-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
          <div>
            <div className="mb-2">
              <Logo />
            </div>
            <p className="text-gray-300 text-sm">
              Simplificando y digitalizando procesos legales
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold mb-2">Síguenos</h3>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-gray-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <Button className="bg-transparent border border-white hover:bg-white hover:text-legalario-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              Contactar a Ventas
            </Button>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-400 mb-4 md:mb-0">
            © LegaLario 2023, todos los derechos reservados
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <a href="#" className="hover:underline">Términos y condiciones</a>
            <a href="#" className="hover:underline">Aviso de privacidad</a>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <img src="/certification1.png" alt="Certificación 1" className="h-10 w-auto" />
            <img src="/certification2.png" alt="Certificación 2" className="h-10 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
