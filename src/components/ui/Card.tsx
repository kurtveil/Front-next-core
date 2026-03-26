import Image from 'next/image';
import React from 'react';

// Contenedor principal (el "esqueleto")
export const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-gray-900  border border-0 rounded-xl p-6 shadow-sm text-white rounded-xl shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

// Sección de imagen
export const CardImage = ({ src, alt }: { src: string, alt: string }) => (
    <div className='flex justify-center items-center'>
        <Image width={300} height={200} className=" w-50 h-10 object-cover border-b border-gray-800" src={src} alt={alt} />
    </div>
);

// Cuerpo con padding
export const CardBody = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`py-1 ${className}`}>
    {children}
  </div>
);

// Título estilizado
export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className=" text-gray-400 mb-2 text-xl font-bold text-white-600 leading-tight">
    {children}
  </h3>
);

// Pie de la card (opcional para botones)
export const CardFooter = ({ children , className}: { children: React.ReactNode , className?: string}) => (
  <div className={`py-3 bg-transparent ${className}`}>
    {children}
  </div>
);
