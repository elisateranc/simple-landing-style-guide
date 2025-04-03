
import React from 'react';

const ClientLogos: React.FC = () => {
  // These are placeholder logo names - in a real application you would use actual logos
  const logos = [
    { name: "Atento", className: "h-6 w-auto opacity-70" },
    { name: "ElBanco", className: "h-6 w-auto opacity-70" },
    { name: "LaHaus", className: "h-6 w-auto opacity-70" },
    { name: "FairPlay", className: "h-6 w-auto opacity-70" },
    { name: "Nowports", className: "h-6 w-auto opacity-70" },
    { name: "Devlyn", className: "h-6 w-auto opacity-70" },
    { name: "Volaris", className: "h-6 w-auto opacity-70" },
    { name: "Toks", className: "h-6 w-auto opacity-70" },
    { name: "KFC", className: "h-6 w-auto opacity-70" },
    { name: "BMW", className: "h-6 w-auto opacity-70" },
    { name: "Prosa", className: "h-6 w-auto opacity-70" },
    { name: "SixFlags", className: "h-6 w-auto opacity-70" },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-10 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-purple-100 rounded-full p-3 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <hr className="border-t border-gray-200" />
        <h2 className="text-2xl font-bold mt-6 mb-8 text-legalario-blue">+ 200 Empresas confían en nosotros</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="text-gray-400 font-semibold text-lg">{logo.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
