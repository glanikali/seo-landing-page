import HeroSection from "@/components/LandingPage/HeroSection";
import Section2 from "@/components/LandingPage/Section2";
import Section3 from "@/components/LandingPage/Section3";
import Section4 from "@/components/LandingPage/Section4";
import Container from "@/components/Layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Monitoring",
  description:
    "Start monitoring in seconds your websites, APIs, cron jobs and more. Unlimited email, SMS, Slack notifications.",
};

export default function Home() {
  return (
    <Container className="p-2 grid gap-4">
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
    </Container>
  );
}
