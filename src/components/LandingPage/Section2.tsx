import Section from "../Layout/Section";
import Image from "next/image";
import SliderImage from "@/assets/Slider_animation.gif";
import DashboardImage from "@/assets/Dashboard_2x.webp";
export default function Section2() {
  return (
    <Section>
      <div className="space-y-16">
        <div className="flex flex-col gap-4 items-center md:flex-row md:space-x-8">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold">
              Ensure your sites are available{" "}
              <span className="text-primary">worldwide</span> 24/7/365.
            </h2>
            <p className="text-muted-foreground">
              Detect website outages or performance issues across your sites
              before yours customers. Our advanced scheduling platform can run
              checks around the world in as low as 30 seconds. Avoid false
              alarms across sites with our advanced alerting logic that prevents
              false alerts. Associate individual checks into Group Checks to get
              updates on your system-wide uptime and website performance.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src={SliderImage}
              alt="Uptime.com Website Monitoring"
              className="w-full h-auto"
              width="500"
              height="300"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center md:flex-row md:space-x-8">
          <div className="flex-1">
            <Image
              src={DashboardImage}
              alt="Uptime.com Website Monitoring"
              className="w-full h-auto"
              width="500"
              height="300"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold">
              Have an eye on it all.{" "}
              <span className="text-primary">Dashboards</span> for every check,
              for every user. <span className="text-primary">Unlimited.</span>
            </h2>
            <p className="text-muted-foreground">
              Here, everyone gets full access without any extra charges – enjoy
              unlimited dashboards and reports with every account. Choose from
              dozens of checks that monitor everything related to the
              performance, health and downtime of public & internal websites,
              applications and services. Configure sophisticated uptime
              monitoring checks without sacrificing simplicity. Quickly pinpoint
              issues with funnels, flows, and forms with our no-code approach to
              transaction checks.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
