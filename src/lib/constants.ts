export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://seo-landing-page-lac.vercel.app/"
    : "http://localhost:3000";

export const tableData = [
  {
    title: "366 total checks",
    checks: [
      { label: "Down", count: 63, icon: "🔴", color: "text-red-500" },
      { label: "Paused", count: 141, icon: "⏸", color: "text-yellow-500" },
      {
        label: "Maintenance",
        count: 5,
        icon: "🛠️",
        color: "text-yellow-500",
      },
    ],
  },
  {
    title: "Outages",
    outages: [
      { label: "Last 24h", count: 9 },
      { label: "Last 7d", count: 29 },
      { label: "Last 30d", count: "100+" },
    ],
  },
  {
    title: "Response Time",
    responseTimes: [
      { label: "HTTP", count: 63 },
      { label: "Transaction", count: 141 },
      { label: "API", count: 5 },
    ],
  },
  {
    title: "Other",
    others: [
      { label: "Global Uptime", count: "" },
      { label: "Last Alert", count: "" },
      { label: "RUM Load Time", count: "" },
    ],
  },
];
export const cardData = [
  {
    title: "uptime.com",
    url: "https://uptime.com",
    status: "Up for 22d 15h",
    uptime: "100%",
    type: "HTTP(S)",
  },
  {
    title: "Add To Cart Flow",
    url: "https://shop.uptime.com",
    status: "Up for 22d 15h",
    uptime: "100%",
    type: "Transactional",
  },
  {
    title: "uptime.com",
    url: "https://uptime.com",
    status: "Up for 22d 15h",
    uptime: "100%",
    type: "HTTP(S)",
  },
];
