"use client";

import PdfViewer from "./pdfReader";

export default function ReportPrice() {
  return (
    <>
      <h1 className="text-2xl font-bold">個案分析報告</h1>

      <PdfViewer pdfUrl="/assets/price.pdf" width={400} height={520} />
    </>
  );
}
