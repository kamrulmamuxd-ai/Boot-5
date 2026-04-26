/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { IntelliSenseView } from './components/IntelliSenseView';
import { SnippetView } from './components/SnippetView';
import { BootstrapCategory } from './types/bootstrap';
import { Book, Code, Terminal, ExternalLink } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<BootstrapCategory | 'all'>('all');
  const [view, setView] = useState<'docs' | 'snippets'>('docs');

  return (
    <div className="flex flex-col h-screen w-full bg-[#1e1e1e] text-[#d4d4d4] overflow-hidden select-none">
      {/* Top Main Container */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* VS Code Activity Bar */}
        <div className="w-[48px] bg-[#333333] flex flex-col items-center py-4 space-y-6 flex-shrink-0">
          <div className="w-6 h-6 border-2 border-white/40 rounded-sm cursor-pointer hover:border-white"></div>
          <div className="w-6 h-6 border-2 border-white/20 rounded-sm cursor-pointer hover:border-white/40"></div>
          <div className="w-6 h-6 border-2 border-white/20 rounded-sm cursor-pointer hover:border-white/40"></div>
          <div className="w-6 h-6 border-2 border-white/20 rounded-sm cursor-pointer hover:border-white/40"></div>
          <div className="mt-auto mb-4 w-6 h-6 border-2 border-white/20 rounded-sm cursor-pointer"></div>
        </div>

        <Sidebar 
          activeCategory={activeCategory} 
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            setView('docs');
          }} 
        />

        <main className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e]">
          {/* Editor Tabs / Tab Bar */}
          <header className="h-9 bg-[#252526] flex items-center border-b border-[#1e1e1e] flex-shrink-0">
            <button 
              onClick={() => setView('docs')}
              className={cn(
                "px-4 h-full flex items-center text-[13px] transition-all border-r border-[#1e1e1e]",
                view === 'docs' 
                  ? "bg-[#1e1e1e] text-white border-t-2 border-[#007acc]" 
                  : "opacity-50 hover:bg-[#1e1e1e]/50"
              )}
            >
              <Book className="w-3.5 h-3.5 mr-2 text-orange-400" />
              documentation.md
            </button>
            <button 
              onClick={() => setView('snippets')}
              className={cn(
                "px-4 h-full flex items-center text-[13px] transition-all border-r border-[#1e1e1e]",
                view === 'snippets' 
                  ? "bg-[#1e1e1e] text-white border-t-2 border-[#007acc]" 
                  : "opacity-50 hover:bg-[#1e1e1e]/50"
              )}
            >
              <Code className="w-3.5 h-3.5 mr-2 text-blue-400" />
              snippets.json
            </button>

            <div className="ml-auto flex items-center px-4 gap-4">
              <a 
                href="https://getbootstrap.com/docs/5.3/" 
                target="_blank" 
                rel="noreferrer"
                className="text-[11px] opacity-40 hover:opacity-100 flex items-center gap-1.5"
              >
                Official v5.3
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </header>

          {/* Viewport Content */}
          <div className="flex-1 overflow-hidden relative">
            {view === 'docs' ? (
              <IntelliSenseView category={activeCategory} />
            ) : (
              <div className="h-full bg-[#1e1e1e]">
                 <SnippetView />
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Bottom Status Bar */}
      <footer className="h-[22px] bg-[#007acc] text-white flex items-center px-3 text-[11px] justify-between flex-shrink-0">
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-1.5">
            <span className="text-[14px]">⊘</span> 0 
            <span className="text-[14px]">△</span> 0
          </div>
          <div className="opacity-80 italic font-medium">Bootstrap 5 IntelliSense Active</div>
        </div>
        <div className="flex items-center space-x-4 h-full">
          <div className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer">Spaces: 2</div>
          <div className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer">UTF-8</div>
          <div className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer bg-white/10">TypeScript JSX</div>
          <div className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer">🔔</div>
        </div>
      </footer>
    </div>
  );
}

