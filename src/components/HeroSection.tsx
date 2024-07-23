import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/Spotlight";
import { FlipWords } from "../components/ui/flip-words";
import { AnimatedModal } from "./AnimatedModal";


export default function HeroSection() {
  const words = ["Vijay Indalkar", "An Full Stack Engineer", "A Chess Player, Soccer Player", "Space aficionados"];
  return (
    <div className="min-h-screen  w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-80 md:left-60 md:-top-20"
        fill="white"
      />     
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-neutral-900 bg-opacity-50">
        Hello, I am <br />
        <FlipWords words={words} /> <br />
        </h1><br />

        {/* <AnimatedModal /> */}
     </div>
  );
}
