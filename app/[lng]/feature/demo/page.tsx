"use client";

import { useState } from "react";

import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";

import ReportIndustry from "./components/report-industry";
import ReportPrice from "./components/report-price";

export type reportType = "industry" | "price";

export default function DemoPage() {
  const [step, setStep] = useState(1);
  const [currentReport, setCurrentReport] = useState<reportType>("industry");

  return (
    <div className="flex h-screen flex-1 gap-2 overflow-hidden">
      <section className="max-h-screen max-w-1/3 flex-1 space-y-4 overflow-y-auto">
        {step === 1 && <Step1 setStep={setStep} />}
        {step === 2 && (
          <Step2 setStep={setStep} setCurrentReport={setCurrentReport} />
        )}
        {step === 3 && (
          <Step3
            setStep={setStep}
            currentReport={currentReport}
            setCurrentReport={setCurrentReport}
          />
        )}
      </section>

      {step !== 1 && (
        <section className="flex-1 overflow-y-scroll rounded-2xl border-1 border-white/60 bg-neutral-800/60 backdrop-blur-md">
          {currentReport === "industry" && <ReportIndustry />}
          {currentReport === "price" && <ReportPrice />}
        </section>
      )}
    </div>
  );
}
