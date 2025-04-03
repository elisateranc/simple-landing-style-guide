
import React from 'react';
import Image from '../components/ui/image';

const PromoBanner: React.FC = () => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg bg-white flex items-center gap-4 max-w-md">
      <div className="flex-shrink-0 w-32">
        <Image src="/cracks-logo.png" alt="Cracks Logo" width={120} height={80} className="object-contain" />
      </div>
      <div>
        <h3 className="font-bold text-xl mb-1">Obtén 20% de descuento</h3>
        <p className="text-sm text-gray-700">
          en tu primer año de licenciamiento por ser escucha de Cracks.
        </p>
        <div className="text-xs text-gray-500 mt-2">
          <p>*Promoción válida sobre el primer año de tu licencia anual</p>
          <p>*Aplican restricciones</p>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
