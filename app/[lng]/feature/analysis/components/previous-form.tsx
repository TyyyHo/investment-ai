"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const defaultReportCategories = [
  "trend_analysis",
  "financial_analysis",
  "valuation_analysis",
  "peer_comparison",
  "regulatory_impact_analysis",
];

export default function PreviousForm() {
  const t = useTranslations("request");
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
        <Accordion type="single" collapsible className="text-white">
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-none outline-none">
              <CardTitle className="text-xl">{t("previousInfo")}</CardTitle>
            </AccordionTrigger>

            <AccordionContent>
              <CardContent>
                <form className="grid gap-6" onSubmit={e => e.preventDefault()}>
                  {/* 分析標的 */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="target">{t("target")}</Label>
                    <h2 className="font-bold">2230 TSMC</h2>
                  </div>

                  {/* 分析類別 */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <Label htmlFor="category">{t("analysis_category")}</Label>
                    <h2 className="font-bold">併購</h2>
                    {/* <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t("analysis_categoryPlaceholder")} />
              </SelectTrigger>
              <SelectContent className="bg-neutral-800 text-white">
                <SelectItem value="M&A">{t("M&A")}</SelectItem>
                <SelectItem value="IPO">{t("IPO")}</SelectItem>
                <SelectItem value="bond_issue">{t("bond_issue")}</SelectItem>
                <SelectItem value="financing">{t("financing")}</SelectItem>
                <SelectItem value="other">{t("other")}</SelectItem>
              </SelectContent>
            </Select> */}
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
                    <p>繁體中文</p>
                  </div>

                  {/* 追加資訊 */}
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <Label htmlFor="details">{t("details")}</Label>
                    <p>無</p>
                  </div>
                </form>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );

  return (
    <Card className="border-white/60 bg-neutral-800/60 text-white backdrop-blur-md">
      <CardHeader>
        <CardTitle className="text-xl">{t("previousInfo")}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6" onSubmit={e => e.preventDefault()}>
          {/* 分析標的 */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="target">{t("target")}</Label>
            <h2 className="font-bold">2230 TSMC</h2>
          </div>

          {/* 分析類別 */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <Label htmlFor="category">{t("analysis_category")}</Label>
            <h2 className="font-bold">併購</h2>
            {/* <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t("analysis_categoryPlaceholder")} />
              </SelectTrigger>
              <SelectContent className="bg-neutral-800 text-white">
                <SelectItem value="M&A">{t("M&A")}</SelectItem>
                <SelectItem value="IPO">{t("IPO")}</SelectItem>
                <SelectItem value="bond_issue">{t("bond_issue")}</SelectItem>
                <SelectItem value="financing">{t("financing")}</SelectItem>
                <SelectItem value="other">{t("other")}</SelectItem>
              </SelectContent>
            </Select> */}
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
            <p>繁體中文</p>
          </div>

          {/* 追加資訊 */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <Label htmlFor="details">{t("details")}</Label>
            <p>無</p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
