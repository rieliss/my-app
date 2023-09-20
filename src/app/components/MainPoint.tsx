import React from "react";

type Props = {};

export default function MainPoint({}: Props) {
  return (
    <div className="flex justify-between">
      <div>
        <div>
          <h1 className="text-2xl font-bold pt-2 pl-2">Safety</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold pt-2 pl-2">Quality Control</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold pt-2 pl-2">Cost</h1>
        </div>
      </div>
      <div className="">
        <img src="" alt="" />
      </div>
      <div>
        <div>
          <h1 className="text-2xl font-bold pt-2 pl-2">Delivery</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold pt-2 pl-2">Productivity</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold pt-2 pl-2">Energy</h1>
        </div>
      </div>
    </div>
  );
}
