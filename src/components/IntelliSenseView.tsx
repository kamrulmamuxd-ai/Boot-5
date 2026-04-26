import React, { useState, useMemo } from 'react';
import { bootstrapClasses } from '../data/bootstrapClasses';
import { BootstrapClass, BootstrapCategory } from '../types/bootstrap';
import { Search, Info, Code2, Eye, ArrowRightLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

// Import bootstrap CSS for the live preview
import 'bootstrap/dist/css/bootstrap.min.css';

interface IntelliSenseViewProps {
  category: BootstrapCategory | 'all';
}

export const IntelliSenseView: React.FC<IntelliSenseViewProps> = ({ category }) => {
  const [search, setSearch] = useState('');
  const [selectedClass, setSelectedClass] = useState<BootstrapClass | null>(null);

  const filteredClasses = useMemo(() => {
    return bootstrapClasses.filter(bc => {
      const matchesCategory = category === 'all' || bc.category === category;
      const term = search.toLowerCase();
      const matchesSearch = bc.class.toLowerCase().includes(term) || 
                            bc.description.toLowerCase().includes(term) ||
                            (bc.parameters?.some(p => p.toLowerCase().includes(term)));
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] text-[#d4d4d4]">
      {/* Subtle Search Bar at Top of View */}
      <div className="px-6 py-2 border-b border-black/20 bg-[#252526]">
        <div className="relative group max-w-sm">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-30 group-focus-within:opacity-100 transition-opacity" />
          <input 
            type="text"
            placeholder="Search classes..."
            className="w-full bg-[#1e1e1e] text-[13px] pl-8 pr-4 py-1 border border-[#3c3c3c] focus:border-[#007acc] outline-none transition-all placeholder:opacity-30"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="main-search-input"
          />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Suggestion List (Left Section) */}
        <div className="w-[300px] overflow-y-auto border-r border-black/20 bg-[#252526]">
          <div className="py-1">
            <AnimatePresence mode="popLayout">
              {filteredClasses.map((bc) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={bc.class}
                  onClick={() => setSelectedClass(bc)}
                  className={cn(
                    "flex items-center px-4 py-0.5 cursor-pointer text-[13px] group",
                    selectedClass?.class === bc.class ? "bg-[#094771] text-white" : "hover:bg-[#2a2d2e]"
                  )}
                >
                  <span className="w-4 h-4 bg-purple-500 rounded-sm mr-3 text-[10px] flex items-center justify-center text-white shrink-0">■</span>
                  <span className={cn(
                    "flex-1 truncate",
                    selectedClass?.class === bc.class ? "text-white" : "text-[#d4d4d4]/90 group-hover:text-white"
                  )}>
                    {bc.class}
                  </span>
                  <span className="text-[10px] opacity-40 italic ml-2 shrink-0">Class</span>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredClasses.length === 0 && (
              <div className="px-6 py-10 text-[12px] opacity-30 italic text-center">
                No matches found
              </div>
            )}
          </div>
        </div>

        {/* Documentation Hover Area (Right Section) */}
        <div className="flex-1 overflow-y-auto bg-[#1e1e1e] relative">
          {selectedClass ? (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              key={selectedClass.class}
              className="max-w-2xl"
            >
              <div className="m-6 vscode-panel rounded-none">
                <div className="p-4 border-b border-[#454545] bg-[#37373d]/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[14px] font-bold text-[#569cd6]">{selectedClass.class}</span>
                    <span className="bg-white/5 px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-wider opacity-40">{selectedClass.category}</span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#d4d4d4]/80">
                    {selectedClass.description}
                  </p>
                </div>

                <div className="p-4 space-y-6">
                  {selectedClass.tailwindEquivalent && (
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#d4d4d4]/30 mb-2">Tailwind Equivalent</h4>
                      <code className="block bg-black/30 p-2 text-[#9cdcfe] text-[12px] font-mono border border-white/5">
                        {selectedClass.tailwindEquivalent}
                      </code>
                    </div>
                  )}

                  <div>
                     <div className="flex items-center justify-between mb-2">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#d4d4d4]/30">Preview.html</h4>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(selectedClass.usage);
                            const btn = document.getElementById('copy-usage-btn');
                            if (btn) {
                              btn.innerText = 'COPIED';
                              setTimeout(() => btn.innerText = 'COPY', 2000);
                            }
                          }}
                          id="copy-usage-btn"
                          className="text-[10px] font-bold opacity-30 hover:opacity-100 uppercase hover:text-[#007acc]"
                        >
                          COPY
                        </button>
                     </div>
                     <div className="bg-black/40 p-4 font-mono text-[13px] text-[#ce9178] border border-white/5 overflow-x-auto">
                        <pre><code>{selectedClass.usage}</code></pre>
                     </div>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#d4d4d4]/30 mb-3">Rendered Result</h4>
                    <div className="bg-white p-8 min-h-[120px] flex items-center justify-center relative overflow-hidden group border border-white/5">
                      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                      <div className="relative z-10 w-full" dangerouslySetInnerHTML={{ __html: selectedClass.usage }} />
                    </div>
                  </div>

                  {selectedClass.parameters && (
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#d4d4d4]/30 mb-2">Variants</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedClass.parameters.map(p => (
                          <span key={p} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[11px] font-mono text-[#9cdcfe] hover:bg-[#007acc] hover:text-white cursor-default transition-all">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-20 text-center">
              <div className="mb-6 opacity-10">
                <Code2 className="w-20 h-20" />
              </div>
              <h3 className="text-[18px] font-medium opacity-40">Hover a selection to see help</h3>
              <p className="text-[12px] opacity-20 mt-2 max-w-xs font-mono">
                Select a Bootstrap utility class from the IntelliSense menu to view its documentation and live preview.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
