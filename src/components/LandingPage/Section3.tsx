import { Card } from "@/components/ui/card";
import { SVGProps } from "react";
import Section from "../Layout/Section";

export default function Section3() {
  return (
    <Section>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-primary">Advanced features</span> accessible to
          every user and team.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="text-center p-6 shadow-lg">
            <div className="mb-4">
              <GlobeIcon className="w-16 h-16 mx-auto text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Global Observability Network
            </h3>
            <p className="text-muted-foreground">
              Access the largest global observability network that is growing
              and expanding constantly.
            </p>
          </Card>
          <Card className="text-center p-6 shadow-lg">
            <div className="mb-4">
              <BadgeAlertIcon className="w-16 h-16 mx-auto text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Advanced Notifications
            </h3>
            <p className="text-muted-foreground">
              Receive advanced alerts with root cause and advanced details on
              the alert failure.
            </p>
          </Card>
          <Card className="text-center p-6 shadow-lg">
            <div className="mb-4">
              <BarChartIcon className="w-16 h-16 mx-auto text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real Time Analysis</h3>
            <p className="text-muted-foreground">
              Dive deep in to failures and errors when checks fail to enable
              real-time troubleshooting.
            </p>
          </Card>
          <Card className="text-center p-6 shadow-lg">
            <div className="mb-4">
              <MonitorIcon className="w-16 h-16 mx-auto text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Maintenance Windows</h3>
            <p className="text-muted-foreground">
              Configure maintenance windows to control monitoring and alerts
              during maintenance events.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function BadgeAlertIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}

function BarChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function MonitorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}
