import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroImage from "@/assets/Dashboard-Setup-Hero-Crop.gif";
import Section from "../Layout/Section";

export default function HeroSection() {
  return (
    <Section>
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold sm:tracking-tighter sm:text-5xl md:text-6xl">
              Incidents Happen.
              <br />
              Receive Alerts with the
              <br />
              Best{" "}
              <span className="text-primary">
                Website
                <br />
                Monitoring Service
              </span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Respond to outages before your customers notice and prevent loss
              of business and revenue. Try Uptime.com - the industry&apos;s
              authority for website monitoring and website performance
              monitoring!
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button className="bg-primary text-white hover:bg-primary-foreground">
                Try For Free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Button>
              <Button
                variant="outline"
                className="bg-white hover:bg-primary hover:text-white"
              >
                Request a Demo
              </Button>
            </div>
          </div>
          <div className="relative mx-auto px-4">
            <Image
              src={HeroImage}
              height={500}
              width={500}
              alt="Uptime.com Website Monitoring"
            ></Image>
          </div>
        </div>
      </div>
    </Section>
  );
}
