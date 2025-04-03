
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
      <h2 className="font-medium text-lg mb-4">Déjanos tus datos y obtén 20% de descuento</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <Input 
              id="name" 
              placeholder="p. ej. Juan Pérez Gutiérrez" 
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">
              Nombre de la empresa
            </label>
            <Input 
              id="company" 
              placeholder="p. ej. Company Name" 
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Correo electrónico empresarial <span className="text-red-500">*</span>
            </label>
            <Input 
              id="email" 
              type="email"
              placeholder="p. ej. juanperez@company.com" 
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <Input 
              id="phone" 
              placeholder="p. ej. 55 4567 8976" 
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium">
            ¿En cuál de nuestros servicios estás interesado?
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="p. ej. Firma electrónica" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="firma">Firma Electrónica</SelectItem>
              <SelectItem value="clm">CLM (Contract Lifecycle Management)</SelectItem>
              <SelectItem value="verificacion">Verificación de Identidad</SelectItem>
              <SelectItem value="extraccion">Extracción de datos con IA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" className="mt-1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm text-gray-500 leading-tight"
            >
              Al enviar este formulario aceptas nuestro{" "}
              <a href="#" className="text-blue-600 underline underline-offset-2">
                Aviso de Privacidad
              </a>
              .
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="bg-gray-100 p-4 rounded-md flex items-center justify-center">
            <div>No soy un robot</div>
            <div className="ml-4">reCAPTCHA</div>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
