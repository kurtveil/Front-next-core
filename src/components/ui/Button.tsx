export function Button({
  children,
  name,
  handleClick,
  type,
  isDisabled,
  className
}: {
  children?: React.ReactNode,
  name: string,
  isDisabled?: boolean,
  handleClick?: () => void,
  type: "submit" | "button",
  className?: string,
}) {
  const colorClasses = isDisabled
    ? "bg-gray-400 cursor-not-allowed opacity-50"
    : "bg-linear-to-r from-blue-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 cursor-pointer shadow-md";

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={handleClick}
      className={` justify-center flex p-6 max-w-2xl cursor-pointer my-3 py-2 text-white ${className} text-center rounded-3xl hover:from-slate-800 hover:to-slate-600 transition-all shadow-md ${colorClasses} `}
    >
      {children}
      {name}
    </button>
  );
}
