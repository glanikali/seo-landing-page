"use client";
import React from "react";
import { WindowUI } from "./WindowUI";
import HeroWidgetTable from "./HeroWidgetTable";
import HeroWidgetCardList from "./HeroWidgetCardList";

export default function HeroWidget() {
  return (
    <WindowUI>
      <div className="bg-slate-600 w-full h-full p-2">
        <div className="my-4">
          <p className="text-white font-semibold mb-2">Dashboard</p>
          <div className=" bg-slate-800 rounded-lg p2 border-2 border-solid border-slate-400">
            <HeroWidgetTable />
          </div>
        </div>
        <div className="my-4">
          <p className="text-white font-semibold mb-2">Checks</p>
          <HeroWidgetCardList />
        </div>
      </div>
    </WindowUI>
  );
}
