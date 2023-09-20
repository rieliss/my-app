import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  const time = new Date();
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-4xl font-bold pt-2 pl-2">
          EPD Manufacturing Top View Management
        </h1>
        <h2 className="text-base pt-3 pl-2">MORE INFORMATION</h2>
      </div>
      <div className="pr-5">
        <p className="text-center py-2">Powered by EPD DX Promotion</p>
        <hr />
        <p className="text-center pt-2">{time.toLocaleString()}</p>
      </div>
    </div>
  );
}
