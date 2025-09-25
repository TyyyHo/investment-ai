"use client";

import Prism from "@/components/prism";

export default function Backgroud() {
  return (
    <div className="fixed inset-0">
      <Prism
        animationType="rotate"
        timeScale={0.2}
        height={3}
        baseWidth={4}
        scale={4}
        hueShift={-0.2}
        colorFrequency={1.25}
        noise={0.1}
        glow={0.7}
      />
    </div>
  );
}
