"use client";

import NewAnalysis from "./components/new-analysis";
import AdditionalAnalysis from "./components/additional-analysis";

export default function RequestPage() {
  return (
    <div className="flex size-full max-h-screen gap-4 overflow-hidden">
      <section className="max-h-screen flex-1 space-y-4 overflow-y-auto">
        <NewAnalysis />
        <AdditionalAnalysis />
      </section>
      <section className="flex-1 rounded-2xl border-1 border-white/60 bg-neutral-800/60 backdrop-blur-md">
        <div className="size-64 p-8 text-white">
          <h1 className="text-2xl font-bold">AI 分析報告</h1>
        </div>
      </section>
    </div>
  );
}
