"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { stockCategories } from "../instant";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const defaultReportCategories = [
  "trend_analysis",
  "financial_analysis",
  "valuation_analysis",
  "peer_comparison",
];

type Step1Props = {
  setStep: (step: number) => void;
};

export default function Step1({ setStep }: Step1Props) {
  const t = useTranslations("request");
  const t_lng = useTranslations("language");

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
    <Card className="border-white/60 bg-neutral-800/60 text-white backdrop-blur-md">
      <CardContent>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="text-white"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-none outline-none">
              <CardTitle className="text-xl">
                {t("handle_industry_analysis")}
              </CardTitle>
            </AccordionTrigger>

            <AccordionContent>
              <form className="grid gap-6" onSubmit={e => e.preventDefault()}>
                {/* 分析類別 */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <Label htmlFor="category">{t("analysis_category")}</Label>
                  <h2 className="font-bold">{t("IPO")}</h2>
                </div>

                {/* 所屬產業 */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <Label htmlFor="category">{t("industry_category")}</Label>
                  <Select required>
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={t("industry_categoryPlaceholder")}
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-800 text-white">
                      {stockCategories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* 報告類別（多選） */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <Label>{t("report_category")}</Label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {defaultReportCategories.map(key => (
                      <label key={key} className="flex items-center gap-2">
                        <Checkbox
                          id={`report-${key}`}
                          checked={reportCategories.includes(key)}
                          onCheckedChange={c => toggleCategory(key, c)}
                        />
                        <p>{t(key)}</p>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 報告語言 */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <Label>{t("report_language")}</Label>
                  <Select required>
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={t("report_languagePlaceholder")}
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-800 text-white">
                      <SelectItem value="zh-hant">
                        {t_lng("zh-hant")}
                      </SelectItem>
                      <SelectItem value="zh-hans">
                        {t_lng("zh-hans")}
                      </SelectItem>
                      <SelectItem value="en">{t_lng("en")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end gap-2 md:col-span-2">
                  <Button
                    type="reset"
                    variant="outline"
                    className="border-none bg-neutral-300 text-black"
                  >
                    {t("reset")}
                  </Button>
                  <Button type="button" onClick={() => setStep(2)}>
                    {t("startAnalysis")}
                  </Button>
                </div>
              </form>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
