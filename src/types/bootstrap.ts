export type BootstrapCategory = 
  | 'layout' 
  | 'grid' 
  | 'content' 
  | 'forms' 
  | 'components' 
  | 'helpers' 
  | 'utilities' 
  | 'spacing' 
  | 'typography' 
  | 'flex' 
  | 'sizing' 
  | 'border' 
  | 'background' 
  | 'effects';

export interface BootstrapClass {
  class: string;
  description: string;
  usage: string;
  category: BootstrapCategory;
  tailwindEquivalent?: string;
  parameters?: string[]; // e.g. ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]
}

export interface BootstrapSnippet {
  prefix: string;
  body: string[];
  description: string;
}
