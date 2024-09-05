import React from "react";

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-background py-10">
      {children}
    </div>
  );
}
