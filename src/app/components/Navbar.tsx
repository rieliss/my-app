import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  const time = new Date();

  const menu = [
    { name: "Safety Control", Link: "http://localhost:3000/SafetyControl" },
    { name: "DEKIDAKA", Link: "http://localhost:3000/DEKIDAKA" },
    { name: "Manpower", Link: "http://localhost:3000/Manpower" },
    { name: "Inventory", Link: "http://localhost:3000/Inventory" },
    { name: "TruckTime", Link: "http://localhost:3000/TruckTime" },
    { name: "Quality", Link: "http://localhost:3000/Quality" },
  ];
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-4xl font-bold pt-2 pl-2">
          EPD Manufacturing Top View Management
        </h1>
        <div className="flex items-center pt-4 w-full">
          <div className="pl-4 mr-20">
            <h2 className="text-[1rem]">MORE INFORMATION</h2>
          </div>
          <div className="flex gap-x-8">
            {menu.map((e, index) => {
              return (
                <Link
                  href={e.Link}
                  key={index}
                  className="button w-[180px] h-[30px] duration-300 text-[1.2rem]"
                >
                  {e.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pr-5 pt-5">
        <span className="text-center pb-2">Powered by EPD DX Promotion</span>
        <hr />
        <span className="text-center pt-2">{time.toLocaleString()}</span>
      </div>
    </div>
  );
}
