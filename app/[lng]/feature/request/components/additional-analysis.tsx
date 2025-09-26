"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useState } from "react";

const defaultReportCategories = [
  "trend_analysis",
  "financial_analysis",
  "valuation_analysis",
  "peer_comparison",
  "regulatory_impact_analysis",
];

export default function AdditionalAnalysis() {
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
      <CardHeader>
        <CardTitle className="text-xl">{t("additionalAnalysis")}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6" onSubmit={e => e.preventDefault()}>
          {/* 分析標的 */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="target">{t("target")}</Label>
            <h2>2230 TSMC</h2>
          </div>

          {/* 分析類別 */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <Label htmlFor="category">{t("analysis_category")}</Label>
            <h2>併購</h2>
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
                  <span>{t(key)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 報告語言 */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <Label>{t("report_language")}</Label>
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={t("report_languagePlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="zh-hant">{t("zh-hant")}</SelectItem>
                <SelectItem value="zh-hans">{t("zh-hans")}</SelectItem>
                <SelectItem value="en">{t("en")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 追加資訊 */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <Label htmlFor="details">{t("details")}</Label>
            <Textarea
              id="details"
              rows={5}
              placeholder={t("detailsPlaceholder")}
              className="text-white"
            />
          </div>
          <div className="flex justify-end gap-2 md:col-span-2">
            <Button
              type="reset"
              variant="outline"
              className="border-none bg-neutral-300 text-black"
            >
              {t("reset")}
            </Button>
            <Button type="submit">{t("startAnalysis")}</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
