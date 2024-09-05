export function WindowUI({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[100%] lg:max-w-[500px] h-auto bg-gray-100 rounded-lg shadow-md border border-gray-300 overflow-hidden">
      <div className="h-8 bg-gray-200 flex items-center px-2">
        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      {children}
    </div>
  );
}
