"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  readonly code: string;
  readonly language?: string;
}

export function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API may not be available
    }
  };

  return (
    <div className="group relative mt-2 overflow-hidden rounded-lg border border-slate-700 bg-[#0d1117] shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
        <span className="font-mono text-xs text-slate-500">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-slate-700 hover:text-slate-300"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="size-3.5" />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}
