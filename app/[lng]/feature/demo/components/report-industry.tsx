"use client";

import PdfViewer from "./pdfReader";

export default function ReportIndustry() {
  return (
    <>
      <h1 className="text-2xl font-bold">行業分析報告</h1>

      <PdfViewer pdfUrl="/assets/industry.pdf" width={400} height={515} />
    </>
  );
}
