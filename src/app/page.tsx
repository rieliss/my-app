import React from "react";
import Navbar from "./components/Navbar";
import MainPoint from "./components/MainPoint";
import Topic from "./components/Topic";
// import Image from "next/image";
// import mountains from "../../public/icons/Background.png";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <Navbar />
      <Topic />
      <MainPoint />
    </div>
  );
}
