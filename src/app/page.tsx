import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedModal } from "@/components/AnimatedModal";
import { LampDemo } from "@/components/lampSection";

export default function Home() {
  const words = ["Hello", "World", "Example", "Words"];
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      {/* <AnimatedModal /> */}
      <LampDemo />
      </main>
  );
}
