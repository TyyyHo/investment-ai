"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function RequestPage() {
  const t = useTranslations("request");
  return (
    <div className="size-full">
      <Card className="bg-transparent text-white border-white/20">
        <CardHeader>
          <CardTitle className="text-xl">{t("title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={e => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">{t("titleLabel")}</Label>
              <Input id="title" placeholder="Enter request title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">{t("email")}</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <Label htmlFor="category">{t("category")}</Label>
              <select
                id="category"
                className="bg-transparent text-white border border-white/20 rounded-md h-9 px-3 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                defaultValue="general"
              >
                <option value="general" className="text-black">General</option>
                <option value="bug" className="text-black">Bug</option>
                <option value="feature" className="text-black">Feature</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <Label htmlFor="details">{t("details")}</Label>
              <textarea
                id="details"
                rows={5}
                placeholder="Describe your request..."
                className="bg-transparent text-white border border-white/20 rounded-md px-3 py-2 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
              />
            </div>
            <div className="md:col-span-2 flex justify-end gap-2">
              <Button type="reset" variant="outline">{t("reset")}</Button>
              <Button type="submit">{t("submit")}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
