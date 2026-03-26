import { Search } from 'lucide-react';

export default function SearchInput() {
  return (
    <div className="relative max-w-sm">
      {/* Icono posicionado a la izquierda */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      
      <input
        type="search"
        placeholder="Buscar productos..."
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-cyan text-white focus:ring-2 focus:ring-blue-900 focus:border-blue-500 outline-none transition-all"
      />
    </div>
  );
}
