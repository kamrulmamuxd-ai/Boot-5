import React from 'react';
import { BootstrapCategory } from '../types/bootstrap';
import { 
  Layout, 
  Grid, 
  Type, 
  Square, 
  Layers, 
  Maximize, 
  PlusSquare, 
  Box, 
  Settings,
  Zap,
  Menu,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeCategory: BootstrapCategory | 'all';
  onSelectCategory: (category: BootstrapCategory | 'all') => void;
}

const CATEGORIES: { id: BootstrapCategory | 'all'; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All Classes', icon: <Zap className="w-4 h-4" /> },
  { id: 'layout', label: 'Layout', icon: <Layout className="w-4 h-4" /> },
  { id: 'grid', label: 'Grid', icon: <Grid className="w-4 h-4" /> },
  { id: 'spacing', label: 'Spacing', icon: <PlusSquare className="w-4 h-4" /> },
  { id: 'typography', label: 'Typography', icon: <Type className="w-4 h-4" /> },
  { id: 'components', label: 'Components', icon: <Box className="w-4 h-4" /> },
  { id: 'background', label: 'Background', icon: <Square className="w-4 h-4" /> },
  { id: 'border', label: 'Border', icon: <Layers className="w-4 h-4" /> },
  { id: 'sizing', label: 'Sizing', icon: <Maximize className="w-4 h-4" /> },
  { id: 'flex', label: 'Flexbox', icon: <Settings className="w-4 h-4" /> },
  { id: 'utilities', label: 'Utilities', icon: <Menu className="w-4 h-4" /> },
  { id: 'effects', label: 'Effects', icon: <Zap className="w-4 h-4" /> },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory }) => {
  return (
    <aside className="w-[240px] bg-[#252526] border-r border-[#333333] flex flex-col h-full flex-shrink-0">
      <div className="p-3 text-[11px] font-bold uppercase tracking-wider text-white/50 flex items-center justify-between">
        Explorer
        <div className="flex gap-2 opacity-50">
           <span className="cursor-pointer hover:opacity-100">⋯</span>
        </div>
      </div>
      
      <div className="flex items-center px-4 py-1.5 bg-[#37373d]/50 text-white border-y border-[#333333]/50">
        <span className="mr-2 text-[10px] opacity-50 transition-transform rotate-0">▼</span>
        <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">Categories</span>
      </div>

      <nav className="flex-1 py-2 overflow-y-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={cn(
              "w-full flex items-center px-4 py-1.5 text-[13px] transition-all group relative",
              activeCategory === cat.id 
                ? "bg-[#37373d] text-white" 
                : "text-[#d4d4d4]/60 hover:bg-[#2a2d2e] hover:text-[#d4d4d4]"
            )}
            id={`sidebar-cat-${cat.id}`}
          >
            {activeCategory === cat.id && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#007acc]" />
            )}
            <div className="flex items-center gap-2.5">
              <span className={cn(
                "transition-colors",
                activeCategory === cat.id ? "text-[#9cdcfe]" : "text-white/20 group-hover:text-white/40"
              )}>
                {cat.icon}
              </span>
              <span className="font-normal truncate">{cat.label}</span>
            </div>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-[#333333]">
        <div className="flex items-center gap-2 text-[11px] opacity-40 font-mono">
           <div className="w-2 h-2 rounded-full bg-[#007acc]" />
           V5.3 INTEL
        </div>
      </div>
    </aside>
  );
};
