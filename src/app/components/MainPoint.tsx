import React from "react";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

export default function MainPoint({ children }: Props) {
  return (
    <div className="w-[420px] max-h-[400px] bg-[#59595980] rounded-[10px] p-4 mt-4">
      {children}
    </div>
  );
}

export function MainTopic({
  srcImg,
  topicname,
  status,
}: {
  srcImg: string;
  topicname: string;
  status: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-x-3 grow-[6] basis-0">
        <Image alt="" width={30} height={30} src={srcImg} />
        <span className="text-[1.8rem] text-teal-200">
          <b>{topicname}</b>
        </span>
      </div>
      <div className="grow-[2] basis-0 w-full h-full bg-green-400 rounded-full px-5 text-center text-zinc-700">
        <b> {status}</b>
      </div>
    </div>
  );
}
export function Points({
  title,
  unit,
  value,
}: {
  title: string;
  unit: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-center my-2.5">
      <div className="grow-[6] basis-0">
        <span className="text-[1.2rem]">
          <b>{title}</b>
        </span>
        <br />
        <span>{unit}</span>
      </div>
      <div className=" bg-green-200 grow-[2] basis-0 w-full h-full flex items-center justify-center rounded-full px-5 text-[0.9rem] text-gray-900">
        <span>
          <b>{value}</b>
        </span>
      </div>
    </div>
  );
}
