
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="min-h-ful flex flex-col  min-h-screen bg-zinc-950 text-zinc-100">
            {children}
      </div>
  );
}
