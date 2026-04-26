import React, { useMemo } from 'react';
import { bootstrapClasses } from '../data/bootstrapClasses';
import { Copy, Terminal } from 'lucide-react';

export const SnippetView: React.FC = () => {
  const snippetsJson = useMemo(() => {
    const snippets: Record<string, any> = {};

    bootstrapClasses.forEach((bc) => {
      if (bc.parameters) {
        bc.parameters.forEach((p) => {
          const fullClass = bc.class.endsWith('-') ? `${bc.class}${p}` : `${bc.class}-${p}`;
          snippets[`Bootstrap ${fullClass}`] = {
            prefix: fullClass,
            body: [fullClass],
            description: `${bc.description} (Category: ${bc.category})`
          };
        });
      } else {
        snippets[`Bootstrap ${bc.class}`] = {
          prefix: bc.class,
          body: [bc.class],
          description: `${bc.description} (Category: ${bc.category})`
        };
      }
    });

    return JSON.stringify(snippets, null, 2);
  }, []);

  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippetsJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1e1e1e] text-[#d4d4d4] p-0 h-full overflow-hidden flex flex-col font-mono">
      <div className="flex items-center justify-between px-6 py-2 bg-[#252526] border-b border-black/20 shrink-0">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#808080]" />
          <h2 className="text-[11px] font-bold uppercase tracking-widest opacity-40">JSON EDITOR</h2>
        </div>
        <button 
          onClick={copyToClipboard}
          className={cn(
            "flex items-center gap-2 px-3 py-1 text-[10px] font-bold uppercase transition-all border",
            copied 
              ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" 
              : "bg-white/5 border-white/10 hover:bg-white/10 text-white/60 hover:text-white"
          )}
          id="copy-snippets-btn"
        >
          <Copy className="w-3 h-3" />
          {copied ? 'COPIED TO CLIPBOARD' : 'COPY SNIPPETS'}
        </button>
      </div>
      
      <div className="flex-1 overflow-auto p-6 bg-[#1e1e1e]">
        <pre className="text-[13px] leading-relaxed text-[#9cdcfe]">
          <code>{snippetsJson}</code>
        </pre>
      </div>
    </div>
  );
};
