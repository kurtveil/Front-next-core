
export function ErrorModal({ message, onClose }: { message: string, onClose: () => void }) {
  if (!message) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
        <h2 className="text-red-600 font-bold text-lg mb-2">¡Ups! Algo salió mal</h2>
        <p className="text-gray-600 mb-4">{message}</p>
        <button onClick={onClose} className="bg-red-600 text-white px-4 py-2 rounded">
          Entendido
        </button>
      </div>
    </div>
  );
}