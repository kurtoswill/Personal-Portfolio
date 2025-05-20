/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[calc(100vw-400px)] mx-auto">
      <Navbar />

      <div className="w-full h-[200px] mt-8 bg-[#f6f6f6] rounded-2xl shadow-[0_8px_24px_0_rgba(0,0,0,0.10),0_1.5px_0_0_rgba(0,0,0,0.02)_inset] flex items-center justify-center">
        {/* Content goes here */}
      </div>
    </div>
  );
}
