
import React, { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface ServiceTagProps {
  icon: ReactNode;
  text: string;
  colorClass?: string;
}

const ServiceTag: React.FC<ServiceTagProps> = ({ icon, text, colorClass = "bg-blue-50" }) => {
  return (
    <div className={cn("flex items-center gap-2 px-4 py-2 rounded-full text-sm", colorClass)}>
      <span className="flex-shrink-0">{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default ServiceTag;
