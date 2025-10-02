"use client";

import React from "react";
import {
  Document,
  Page,
  pdfjs,
  type DocumentProps,
  type PageProps,
} from "react-pdf";

// Configure worker on the client
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export default function ReactPdfDocument(props: DocumentProps) {
  return <Document {...props} />;
}

export function ReactPdfPage(props: PageProps) {
  return <Page {...props} />;
}

export type { DocumentProps, PageProps } from "react-pdf";
