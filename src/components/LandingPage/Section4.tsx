"use client";
import { Button } from "@/components/ui/button";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Section4() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Start <span className="text-primary">free website monitoring</span>{" "}
          today with access to all <br />{" "}
          <span className="text-gray-900">Premium Plan features.</span>
        </h1>
        <div className="flex justify-center mt-6 space-x-4">
          <Button
            onClick={() => {
              sendGTMEvent({
                type: "event",
                event: "buttonClicked",
                value: "try for free button clicked",
              });
            }}
            className="bg-primary text-white "
          >
            Try For Free
          </Button>
          <Button
            onClick={() => {
              sendGTMEvent({
                type: "event",
                event: "buttonClicked",
                value: "request demo button clicked",
              });
            }}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Request a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
