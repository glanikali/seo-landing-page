"use client";
import Logo from "@/assets/full.svg";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import Image from "next/image";
import Container from "./Container";
import { FaRocket } from "react-icons/fa";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Header() {
  return (
    <header className="p-2 z-50 bg-white drop-shadow-sm sticky top-0">
      <Container className="flex gap-4 justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={Logo}
            alt="Uptime.com Logo"
            className="max-w-full h-auto"
            width="220"
            height="58"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* <nav className="flex items-center space-x-8">
          <div className="flex items-center space-x-1">
            <span>Platform</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1">
            <span>Free Tools</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1">
            <span>Solutions</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1">
            <span className="relative">
              Pricing
              <Badge variant="secondary" className="absolute -top-2 -right-4">
                PROMO
              </Badge>
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Resources</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-1">
            <span>Company</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
        </nav> */}
        {/* <Navigation /> */}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="text-primary border-primary bg-white hover:text-white hover:bg-primary"
            onClick={() => {
              sendGTMEvent({
                type: "event",
                event: "buttonClicked",
                value: "sign in clicked",
              });
            }}
          >
            Sign In
          </Button>
          <Button
            className="bg-primary text-white hover:bg-[#00844f] flex gap-0.5 items-center"
            onClick={() => {
              console.log("sending event");
              sendGTMEvent({
                type: "event",
                event: "buttonClicked",
                value: "try for free button clicked",
              });
            }}
          >
            Try For Free
            <FaRocket />
          </Button>
        </div>
      </Container>
    </header>
  );
}

function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
