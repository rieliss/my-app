"use client";
import React, { Children, useEffect } from "react";
import Navbar from "./components/Navbar";
import Topic from "./components/Topic";
import MainPoint, { MainTopic, Points } from "./components/MainPoint";
import Image from "next/image";
import Manager from "./components/Manager";

type Props = {};

export default function Page({}: Props) {
  return (
    <div>
      <Navbar />
      <Topic />
      <div className="flex justify-around items-center px-2 h-full">
        <div>
          <MainPoint>
            <MainTopic
              srcImg={"/icons/Safety.png"}
              topicname={"Safety"}
              status={"Normal"}
            />
            <Points title={"● Risk Map"} unit={"(Points)"} value={"0"} />
            <Points title={"● Contactor"} unit={"(Area)"} value={"0"} />
            <Points
              title={"● Accident/Nearmiss"}
              unit={"(Cases)"}
              value={"0 / 0"}
            />
            <Points
              title={"● Safety Device Release"}
              unit={"(Cases)"}
              value={"0"}
            />
          </MainPoint>
          <MainPoint>
            <MainTopic
              srcImg={"/icons/QC.png"}
              topicname={"Quality Control"}
              status={"Abnormal"}
            />
            <Points
              title={"● Quality Control"}
              unit={"(% : P-Chart)"}
              value={"0% / 0%"}
            />
            <Points title={"● Internal Loss"} unit={"(%)"} value={"0% / 0%"} />
          </MainPoint>
          <MainPoint>
            <MainTopic
              srcImg={"/icons/Cost.png"}
              topicname={"Cost"}
              status={"Normal"}
            />
            <Points
              title={"● Investment"}
              unit={"(Acc. KB/Month)"}
              value={"0 K / 0 K"}
            />
            <Points
              title={"● Expense control"}
              unit={"(Acc. KB/Month)"}
              value={"0% / 0%"}
            />
          </MainPoint>
        </div>
        <div className="flex flex-col h-[76vh] justify-between relative">
          <Image
            alt=""
            width={1250}
            height={675}
            src="/icons/Picture1.png"
            className="mr-10 mt-10"
          />
          <div className="flex justify-between px-2 w-full ">
            <Manager
              Imgmgr={"/icons/AssyMGR.png"}
              Department={"Assy Manufacturing"}
              NameManager={"Mr. Thanong Wongsukjit"}
            />
            <Manager
              Imgmgr={"/icons/PartMGR.png"}
              Department={"Part Manufacturing"}
              NameManager={"Mr. Sirichai Kitjumroen"}
            />
          </div>
          {/* <span className="bg-white w-[30px] h-[30px] rounded-full absolute top-[55%]"></span> */}
        </div>

        <div>
          <MainPoint>
            <MainTopic
              srcImg={"/icons/Delivery.png"}
              topicname={"Delivery"}
              status={"Abnormal"}
            />
            <Points
              title={"● In-house Stock"}
              unit={"(DOH)"}
              value={"0% / 0%"}
            />
            <Points title={"● Shipment"} unit={"(Rounds)"} value={"0 / 0"} />
            <Points title={"● Risk Stock"} unit={"(DOH)"} value={"0 / 0"} />
            <Points title={"● Active AGV"} unit={"(Units)"} value={"0 / 0"} />
          </MainPoint>
          <MainPoint>
            <MainTopic
              srcImg={"/icons/Prod.png"}
              topicname={"Productivity"}
              status={"Abnormal"}
            />
            <Points
              title={"● PROD. Progress"}
              unit={"(Acc. Q'ty/Day)"}
              value={"0K / 0K"}
            />
            <Points
              title={"● Man Power Att."}
              unit={"(Person/Day)"}
              value={"0"}
            />
            <Points
              title={"● TPM Notify"}
              unit={"(Abnormal/Normal points.)"}
              value={"0 / 0"}
            />
          </MainPoint>
          <MainPoint>
            <MainTopic
              srcImg={"/icons/Energy.png"}
              topicname={"Energy"}
              status={"Normal"}
            />
            <Points
              title={"● CO2 Emission"}
              unit={"(Kg./piece)"}
              value={"0 K / 0 K"}
            />
          </MainPoint>
        </div>
      </div>
      <div className="flex justify-around mt-6">
        <Manager
          Imgmgr={"/icons/MFG1MGR.png"}
          Department={"Mfg. 1 Alternator"}
          NameManager={"Mr. Rangsan Thongsiri"}
        />
        <Manager
          Imgmgr={"/icons/MFG2MGR.png"}
          Department={"Mfg. 2 Starter"}
          NameManager={"Mr. Suraphun Paenthongrong"}
        />
        <Manager
          Imgmgr={"/icons/MFG3MGR.png"}
          Department={"Mfg. 3 ECC,ABS,ASMO"}
          NameManager={"Mr. Nuttapark Sutthitearranun"}
        />
        <Manager
          Imgmgr={"/icons/Part1MGR.png"}
          Department={"Part Manufacturing 1"}
          NameManager={"Mr. Sirichai Kitjumroen"}
        />
        <Manager
          Imgmgr={"/icons/Part2MGR.png"}
          Department={"Part Manufacturing 2"}
          NameManager={"Mr. Jaruek Sujawipan"}
        />
      </div>
    </div>
  );
}
// function setIsConnected(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }

// function setSocket(socketInstance: any) {
//   throw new Error("Function not implemented.");
// }
