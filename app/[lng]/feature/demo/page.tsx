"use client";

import { useState } from "react";

import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";

export default function DemoPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex size-full max-h-screen gap-4 overflow-hidden">
      <section className="max-h-screen flex-1 space-y-4 overflow-y-auto">
        {step === 1 && <Step1 setStep={setStep} />}
        {step === 2 && <Step2 setStep={setStep} />}
        {step === 3 && <Step3 setStep={setStep} />}
      </section>
      <section className="flex-1 rounded-2xl border-1 border-white/60 bg-neutral-800/60 backdrop-blur-md">
        <div className="min-h-64 w-full p-8 text-white">
          <h1 className="text-2xl font-bold">
            {step === 1 ? "行業分析報告" : "個案分析報告"}
          </h1>
        </div>
      </section>
    </div>
  );
}
