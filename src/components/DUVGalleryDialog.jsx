import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { duvGallery } from "../data/duvGallery";

export default function DUVGalleryDialog({ open, onOpenChange }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + duvGallery.length) % duvGallery.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % duvGallery.length);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, prev, next]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-5xl w-[95vw] sm:w-[92vw] p-0 overflow-hidden bg-card border border-border rounded-2xl shadow-2xl shadow-black/50">
        {/* Header */}
        <DialogHeader className="px-4 sm:px-8 pt-4 sm:pt-6 pb-2 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0 pr-2">
              <DialogTitle className="text-lg sm:text-2xl font-bold text-white truncate">
                DUV Engineers — Feature Preview
              </DialogTitle>
              <p className="text-xs sm:text-sm text-white mt-1 sm:mt-1.5 flex items-center gap-1.5 sm:gap-2">
                <span className="bg-zinc-800 px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium text-green-400 whitespace-nowrap">
                  {current + 1}/{duvGallery.length}
                </span>
                <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-zinc-600 rounded-full flex-shrink-0" />
                <span className="truncate text-white">{duvGallery[current].label}</span>
              </p>
            </div>
          </div>
        </DialogHeader>

        {/* Main Image */}
        <div className="relative px-2 sm:px-8 pt-2 sm:pt-4 pb-1 sm:pb-2">
          <div className="relative rounded-xl overflow-hidden bg-zinc-900 flex items-center justify-center h-[50vh] sm:h-[400px] md:h-[480px]">
            {/* Mobile counter badge */}
            <div className="absolute top-2 right-2 sm:top-4 sm:left-4 sm:right-auto bg-black/60 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm z-10 md:hidden">
              {current + 1} / {duvGallery.length}
            </div>

            <img
              key={current}
              src={duvGallery[current].src}
              alt={duvGallery[current].label}
              className="max-h-full max-w-full object-contain transition-all duration-500 ease-out"
              loading="lazy"
            />

            {/* Nav buttons */}
            <button
              onClick={prev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800/90 hover:bg-zinc-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500/50 group"
              aria-label="Previous image"
            >
              <ArrowLeft size={18} weight="bold" className="text-white transition-colors" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800/90 hover:bg-zinc-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500/50 group"
              aria-label="Next image"
            >
              <ArrowRight size={18} weight="bold" className="text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="px-3 sm:px-8 pb-4 sm:pb-6 pt-2 sm:pt-3">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {duvGallery.map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-shrink-0 group relative transition-all duration-200 focus:outline-none rounded-lg ${
                  i === current ? "scale-105" : "opacity-50 hover:opacity-100"
                }`}
                aria-label={`View ${item.label}`}
              >
                <div
                  className={`w-16 h-12 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    i === current
                      ? "border-green-500 shadow-lg shadow-green-500/20"
                      : "border-transparent group-hover:border-zinc-600"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                {i === current && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}