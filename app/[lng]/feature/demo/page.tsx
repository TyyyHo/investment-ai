"use client";

import { useState } from "react";

import NewAnalysis from "./components/new-analysis";
import AdditionalAnalysis from "./components/additional-analysis";
import PreviousForm from "./components/previous-form";

export default function DemoPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex size-full max-h-screen gap-4 overflow-hidden">
      <section className="max-h-screen flex-1 space-y-4 overflow-y-auto">
        {step === 1 && <NewAnalysis setStep={setStep} />}
        {step === 2 && <PreviousForm />}
        {step === 3 && <AdditionalAnalysis />}
      </section>
      <section className="flex-1 rounded-2xl border-1 border-white/60 bg-neutral-800/60 backdrop-blur-md">
        <div className="min-h-64 w-full p-8 text-white">
          <h1 className="text-2xl font-bold">AI投資銀行報告預覽</h1>
        </div>
      </section>
    </div>
  );
}
