"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import HTMLFlipBook from "react-pageflip";
import type { DocumentProps, PageProps } from "./ReactPdfInternal";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

// Client-only dynamic imports to avoid SSR/runtime DOM issues
const ReactPdfDocument = dynamic<DocumentProps>(
  () => import("./ReactPdfInternal").then(m => m.default),
  { ssr: false }
);
const ReactPdfPage = dynamic<PageProps>(
  () => import("./ReactPdfInternal").then(m => m.ReactPdfPage),
  { ssr: false }
);
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Button } from "@/components/ui/button";

// 🚀 指定 public 內的 worker

type Props = {
  pdfUrl: string;
  width?: number;
  height?: number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
};

export default function PdfViewer({
  pdfUrl,
  width = 520,
  height = 366,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
}: Props) {
  const [numPages, setNumPages] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const content = useMemo(() => {
    if (error) return <div className="text-red-600">{error}</div>;

    return (
      <ReactPdfDocument
        file={pdfUrl}
        onLoadSuccess={(info: { numPages: number }) => {
          setNumPages(info.numPages);
        }}
        onLoadError={(e: Error) => setError(e.message)}
        loading={<div>Loading document…</div>}
        error={<div className="text-red-600">{error}</div>}
      >
        {numPages > 0 ? (
          <div className="flex w-full flex-col justify-center gap-2">
            {/* Flipbook wraps each Page as a separate sheet */}
            <HTMLFlipBook
              className="shadow-lg"
              style={{}}
              renderOnlyPageLengthChange
              // IFlipSetting (all required in types)
              startPage={1}
              size="stretch"
              width={width}
              height={height}
              minWidth={minWidth || width}
              maxWidth={maxWidth || width}
              minHeight={minHeight || height}
              maxHeight={maxHeight || height}
              drawShadow
              flippingTime={700}
              usePortrait
              startZIndex={0}
              autoSize
              maxShadowOpacity={0.5}
              showCover={false}
              mobileScrollSupport
              clickEventForward
              useMouseEvents
              swipeDistance={30}
              showPageCorners
              disableFlipByClick={false}
            >
              {Array.from({ length: numPages }, (_, i) => i + 1).map(
                pageNumber => (
                  <div
                    key={pageNumber}
                    className="flex h-full w-full items-center justify-center bg-white"
                  >
                    <ReactPdfPage
                      pageNumber={pageNumber}
                      width={width}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </div>
                )
              )}
            </HTMLFlipBook>

            <div className="flex w-full gap-2">
              <Drawer>
                <DrawerTrigger className="rounded-md bg-sky-700 px-4 py-2 text-sm hover:bg-sky-600">
                  放大檢視
                </DrawerTrigger>
                <DrawerContent className="bg-neutral-300">
                  <DrawerHeader>
                    <DrawerDescription className="flex w-full items-center justify-center">
                      <HTMLFlipBook
                        className="shadow-lg"
                        style={{}}
                        renderOnlyPageLengthChange
                        // IFlipSetting (all required in types)
                        startPage={1}
                        size="stretch"
                        width={width}
                        height={height}
                        minWidth={minWidth || width}
                        maxWidth={maxWidth || width}
                        minHeight={minHeight || height}
                        maxHeight={maxHeight || height}
                        drawShadow
                        flippingTime={700}
                        usePortrait
                        startZIndex={0}
                        autoSize
                        maxShadowOpacity={0.5}
                        showCover={false}
                        mobileScrollSupport
                        clickEventForward
                        useMouseEvents
                        swipeDistance={30}
                        showPageCorners
                        disableFlipByClick={false}
                      >
                        {Array.from({ length: numPages }, (_, i) => i + 1).map(
                          pageNumber => (
                            <div
                              key={pageNumber}
                              className="flex h-full w-full items-center justify-center bg-white"
                            >
                              <ReactPdfPage
                                pageNumber={pageNumber}
                                width={width}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                              />
                            </div>
                          )
                        )}
                      </HTMLFlipBook>
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter className="py-2">
                    <DrawerClose>
                      <Button variant="outline">關閉</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              <Button
                className="bg-sky-700 hover:bg-sky-600"
                onClick={() => window.open(pdfUrl, "_blank")}
              >
                分頁檢視
              </Button>
              <a href={pdfUrl} download>
                <Button className="bg-sky-700 hover:bg-sky-600">
                  Download PDF
                </Button>
              </a>
            </div>
          </div>
        ) : (
          <div>Loading pages…</div>
        )}
      </ReactPdfDocument>
    );
  }, [
    error,
    numPages,
    pdfUrl,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
  ]);

  return content;
}
