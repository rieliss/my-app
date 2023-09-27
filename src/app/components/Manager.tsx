import React from "react";
import Image from "next/image";

type Props = {
  Imgmgr: string;
  Department: string;
  NameManager: string;
};

export default function Manager({ Imgmgr, Department, NameManager }: Props) {
  return (
    <div className="flex h-full w-[400px] items-center gap-x-6  rounded-full bgmanager">
      <div className="bg-blue-500 h-[80px] w-[80px] rounded-full flex justify-center relative ">
        <Image
          alt=""
          width={100}
          height={0}
          style={{
            width: "86px",
            height: "95px",
            objectFit: "contain",
            backgroundPosition: "center",
          }}
          className="absolute top-[-12px]"
          src={Imgmgr}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[1.3rem]">
          <b>{Department}</b>
        </span>
        <span className="text-[1.3rem]">{NameManager}</span>
      </div>
    </div>
  );
}
