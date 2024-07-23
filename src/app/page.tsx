import Navbar from "@/components/Navbar";
import Image from "next/image";
import Spotlight from "@/components/HeroSection";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words = ["Hello", "World", "Example", "Words"];
  return (
    <div>
      <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      <Spotlight />
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
    </div>
  );
}
