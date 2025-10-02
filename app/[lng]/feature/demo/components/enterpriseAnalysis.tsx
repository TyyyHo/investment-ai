"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { Input } from "@/components/ui/input";

type EnterpriseAnalysisProps = {
  nextStep: number;
  handleStep: (step: number) => void;
};

export default function EnterpriseAnalysis({
  nextStep,
  handleStep,
}: EnterpriseAnalysisProps) {
  const t = useTranslations("request");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleAddFile() {
    console.log("handleAddFile");
    fileInputRef.current?.click();
  }

  return (
    <Card className="border-white/60 bg-neutral-800/60 text-white backdrop-blur-md">
      <CardHeader>
        <CardTitle className="text-xl">
          {t("handle_enterprise_analysis")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid w-full gap-6" onSubmit={e => e.preventDefault()}>
          {/* 分析類別 */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <Label htmlFor="category">{t("analysis_category")}</Label>
            <h2 className="font-bold">{t("IPO")}</h2>
          </div>

          {/* 分析標的 */}
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="target">{t("target")}</Label>
            <Input
              id="target"
              className="w-full"
              defaultValue={process.env.NEXT_PUBLIC_DEMO_TARGET}
            />
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
            <button
              type="button"
              className="flex items-center space-x-1 p-0"
              onClick={handleAddFile}
            >
              <AiOutlinePaperClip className="size-4" />
              <p className="text-xs">添加檔案</p>
            </button>

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
              id="file"
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
            <Button type="button" onClick={() => handleStep(nextStep)}>
              {t("startAnalysis")}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
