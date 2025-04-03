
import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import ServiceTag from '@/components/ServiceTag';
import ContactForm from '@/components/ContactForm';
import PromoBanner from '@/components/PromoBanner';
import ClientLogos from '@/components/ClientLogos';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Logo />
          <Button variant="outline" className="bg-white border-green-500 text-green-600 hover:bg-green-50 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            Solicita una demo
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-legalario-blue mb-6 leading-tight">
                La mejor solución para digitalizar tus procesos con validez legal.
              </h1>
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">Solución multiservicios</h2>
                <div className="flex flex-wrap gap-3">
                  <ServiceTag 
                    icon={<svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>} 
                    text="Firma Electrónica" 
                    colorClass="bg-green-50"
                  />
                  <ServiceTag 
                    icon={<svg className="h-4 w-4 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>} 
                    text="CLM (Contract Lifecycle Management)" 
                    colorClass="bg-yellow-50"
                  />
                  <ServiceTag 
                    icon={<svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>} 
                    text="Verificación de Identidad" 
                    colorClass="bg-blue-50"
                  />
                  <ServiceTag 
                    icon={<svg className="h-4 w-4 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>} 
                    text="Extracción de datos con IA" 
                    colorClass="bg-purple-50"
                  />
                </div>
              </div>
              <PromoBanner />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="container mx-auto px-4 mb-12">
          <ClientLogos />
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 pb-16 text-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-6 text-lg rounded-md">
            Contáctanos ahora
          </Button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
