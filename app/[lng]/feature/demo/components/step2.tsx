"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EnterpriseAnalysis from "./enterpriseAnalysis";
import { defaultReportCategories } from "../instant";

type Step2Props = {
  setStep: (step: number) => void;
};

export default function Step2({ setStep }: Step2Props) {
  const { lng } = useParams<{ lng: string }>();
  const t = useTranslations("request");
  const tl = useTranslations("language");
  const [reportCategories, setReportCategories] = useState(
    defaultReportCategories
  );

  function toggleCategory(value: string, checked: boolean | "indeterminate") {
    setReportCategories(prev =>
      checked === true
        ? [...new Set([...prev, value])]
        : prev.filter(v => v !== value)
    );
  }

  return (
    <>
      <Card className="border-white/60 bg-neutral-800/60 text-white backdrop-blur-md">
        <CardContent>
          <Accordion type="single" collapsible className="text-white">
            <AccordionItem value="item-1">
              <AccordionTrigger className="border-none outline-none">
                <CardTitle className="text-xl">
                  {t("industry_analysis")}
                </CardTitle>
              </AccordionTrigger>

              <AccordionContent>
                <CardContent>
                  <form
                    className="grid gap-6"
                    onSubmit={e => e.preventDefault()}
                  >
                    {/* 分析類別 */}
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <Label htmlFor="category">{t("analysis_category")}</Label>
                      <h2 className="font-bold">{t("IPO")}</h2>
                    </div>

                    {/* 報告類別（as const） */}
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <Label>{t("report_category")}</Label>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {defaultReportCategories.map(key => (
                          <label key={key} className="flex items-center gap-2">
                            <Checkbox
                              id={`report-${key}`}
                              checked={reportCategories.includes(key)}
                              onCheckedChange={c => toggleCategory(key, c)}
                              disabled
                            />
                            <p>{t(key)}</p>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* 報告語言 */}
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <Label>{t("report_language")}</Label>
                      <p>{tl(lng)}</p>
                    </div>
                  </form>
                </CardContent>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <EnterpriseAnalysis nextStep={3} handleStep={setStep} />
    </>
  );
}
