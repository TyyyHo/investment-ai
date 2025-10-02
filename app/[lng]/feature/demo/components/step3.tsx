"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useParams } from "next/navigation";
import EnterpriseAnalysis from "./enterpriseAnalysis";
import { defaultReportCategories } from "../instant";
import { reportType } from "../page";
import { CgAdd } from "react-icons/cg";
import { cn } from "@/lib/utils";

type Step3Props = {
  setStep: (step: number) => void;
  currentReport: reportType;
  setCurrentReport: (report: reportType) => void;
};

export default function Step3({
  setStep,
  currentReport,
  setCurrentReport,
}: Step3Props) {
  const { lng } = useParams<{ lng: string }>();
  const t = useTranslations("request");
  const tl = useTranslations("language");
  const [wantAnalysis, setWantAnalysis] = useState(false);
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
      <Card
        className={cn(
          "text-white backdrop-blur-md",
          currentReport === "industry"
            ? "border-2 border-orange-300 bg-neutral-800/90"
            : "border-white/60 bg-neutral-800/60"
        )}
        onClick={() => setCurrentReport("industry")}
      >
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
                    className="grid gap-6 text-base"
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
                      <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
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

      {/* 企業分析歷史紀錄 */}
      <Card
        className={cn(
          "text-white backdrop-blur-md",
          currentReport === "price"
            ? "border-2 border-orange-300 bg-neutral-800/90"
            : "border-white/60 bg-neutral-800/60"
        )}
        onClick={() => setCurrentReport("price")}
      >
        <CardContent>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-enterpriseAnalysis"
            className="text-white"
          >
            <AccordionItem value="item-enterpriseAnalysis">
              <AccordionTrigger className="border-none outline-none">
                <CardTitle className="text-xl">
                  {t("enterpriseAnalysis")}
                </CardTitle>
              </AccordionTrigger>

              <AccordionContent>
                <CardContent>
                  <form
                    className="grid gap-6 text-base"
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
                      <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
                        <label className="flex items-center gap-2">
                          <Checkbox
                            id={`report-valuation_report`}
                            checked={true}
                            disabled
                          />
                          <p>{t("valuation_report")}</p>
                        </label>
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

      {wantAnalysis ? (
        <EnterpriseAnalysis nextStep={3} handleStep={setStep} />
      ) : (
        <div className="grid h-12 w-full items-center justify-center">
          <button onClick={() => setWantAnalysis(true)}>
            <CgAdd className="size-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
}
