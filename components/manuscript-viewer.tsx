"use client";

import { IIIFViewer } from "./iiif-viewer";

interface TranscriptionLine {
  oldFrench: string;
  english: string;
}

interface ManuscriptViewerProps {
  manifestUrl: string;
  transcription: TranscriptionLine[];
  initialPage?: number;
}

export function ManuscriptViewer({ 
  manifestUrl, 
  transcription,
  initialPage = 0 
}: ManuscriptViewerProps) {
  return (
    <div className="bg-white rounded-lg border border-stone-200 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
        {/* Facsimile Panel */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-stone-200">
          <div className="bg-stone-100 px-4 py-3 border-b border-stone-200">
            <h3 className="font-semibold text-stone-800">Facsimile</h3>
          </div>
          <div className="flex-1 min-h-[400px]">
            <IIIFViewer manifestUrl={manifestUrl} initialPage={initialPage} />
          </div>
        </div>

        {/* Transcription Panel */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-stone-200">
          <div className="bg-stone-100 px-4 py-3 border-b border-stone-200 flex justify-between items-center">
            <h3 className="font-semibold text-stone-800">Transcription</h3>
            <span className="text-xs text-stone-500">Old French</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1 font-serif text-stone-800 italic leading-relaxed">
              {transcription.map((line, index) => (
                <p key={index}>{line.oldFrench}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Translation Panel */}
        <div className="flex flex-col">
          <div className="bg-stone-100 px-4 py-3 border-b border-stone-200 flex justify-between items-center">
            <h3 className="font-semibold text-stone-800">Translation</h3>
            <span className="text-xs text-stone-500">English</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4 text-stone-700 leading-relaxed">
              {transcription.map((line, index) => (
                <p key={index}>{line.english}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Help text */}
      <div className="bg-stone-50 px-4 py-2 text-center text-sm text-stone-500 border-t border-stone-200">
        Use the controls below the facsimile to navigate. Scroll or pinch to zoom the manuscript image.
      </div>
    </div>
  );
}
