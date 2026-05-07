
interface InputLabel {
    label: string;
    // value: string;
    placelholder?: string;
    type?: string;
    setValue: (value: string)=> void;
}

export default function Input({type ,label, setValue}: InputLabel) {
  return (
    <div>
        <label className="block text-sm font-medium text-gray-500 mb-1">{label}</label>
        <input autoComplete="on" type={type} onChange={(e)=> setValue(e.target.value)} placeholder={label} className="w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"  />
    </div>
  )
}
