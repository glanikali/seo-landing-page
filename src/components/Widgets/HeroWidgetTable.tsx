export default function HeroWidgetTable() {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md text-[.5rem]">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div className="font-bold w-[75px]">Checks</div>
          <div className="flex items-center mt-2 border-b pb-2">
            <span className="text-red-500 mr-2">●</span> Down
            <span className="ml-auto">63</span>
          </div>
          <div className="flex items-center mt-2 border-b pb-2">
            <span className="text-yellow-500 mr-2">⏸</span> Paused
            <span className="ml-auto">141</span>
          </div>
          <div className="flex items-center mt-2 border-b pb-2">
            <span className="text-yellow-500 mr-2">⚠️</span> Maintenance
            <span className="ml-auto">5</span>
          </div>
        </div>
        <div>
          <div className="font-bold">Outages </div>
          <div className="flex items-center mt-2 border-b pb-2">
            Last 24h
            <span className="ml-auto">9</span>
          </div>
          <div className="flex items-center mt-2 border-b pb-2">
            Last 7d
            <span className="ml-auto">29</span>
          </div>
          <div className="flex items-center mt-2 border-b pb-2">
            Last 30d
            <span className="ml-auto">100+</span>
          </div>
        </div>
        <div>
          <div className="font-bold">Response Time</div>
          <div className="flex items-center mt-2 border-b pb-2">
            HTTP
            <span className="ml-auto">63</span>
          </div>
          <div className="flex items-center mt-2 border-b pb-2">
            Transaction
            <span className="ml-auto">141</span>
          </div>
          <div className="flex items-center mt-2 border-b pb-2">
            API
            <span className="ml-auto">5</span>
          </div>
        </div>
        <div>
          <div className="font-bold">Other</div>
          <div className="flex items-center mt-2 border-b pb-2">
            Global Uptime
            <span className="ml-auto">63</span>
          </div>
          <div className="flex items-center mt-2 border-b pb-2">
            Last Alert
            <span className="ml-auto">141</span>
          </div>
          <div className="flex items-center mt-2 border-b pb-2">
            RUM Load Time
            <span className="ml-auto">5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
