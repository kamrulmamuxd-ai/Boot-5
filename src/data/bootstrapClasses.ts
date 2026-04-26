import { BootstrapClass } from '../types/bootstrap';

export const bootstrapClasses: BootstrapClass[] = [
  // Layout
  {
    class: 'container',
    description: 'Centers content horizontally and provides a responsive fixed width.',
    usage: '<div class="container">...</div>',
    category: 'layout',
    tailwindEquivalent: 'container mx-auto'
  },
  {
    class: 'row',
    description: 'Horizontal group of columns that ensures your columns are lined up properly.',
    usage: '<div class="row">...</div>',
    category: 'grid',
    tailwindEquivalent: 'flex flex-wrap'
  },
  {
    class: 'col',
    description: 'Generic column that distributes width equally.',
    usage: '<div class="col">...</div>',
    category: 'grid',
    tailwindEquivalent: 'flex-1'
  },
  // Spacing (Simplified representation of m-* and p-*)
  {
    class: 'm-',
    description: 'Margin utility for all sides.',
    usage: '<div class="m-3">...</div>',
    category: 'spacing',
    tailwindEquivalent: 'm-',
    parameters: ['0', '1', '2', '3', '4', '5', 'auto']
  },
  {
    class: 'p-',
    description: 'Padding utility for all sides.',
    usage: '<div class="p-4">...</div>',
    category: 'spacing',
    tailwindEquivalent: 'p-',
    parameters: ['0', '1', '2', '3', '4', '5']
  },
  // Typography
  {
    class: 'text-',
    description: 'Text color or alignment.',
    usage: '<p class="text-primary">...</p>',
    category: 'typography',
    tailwindEquivalent: 'text-',
    parameters: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'body', 'muted', 'white', 'black-50', 'white-50', 'start', 'center', 'end', 'lowercase', 'uppercase', 'capitalize']
  },
  {
    class: 'fw-',
    description: 'Font weight utilities.',
    usage: '<p class="fw-bold">...</p>',
    category: 'typography',
    tailwindEquivalent: 'font-',
    parameters: ['bold', 'semibold', 'normal', 'light', 'lighter']
  },
  {
    class: 'fst-',
    description: 'Font style utilities (italic, normal).',
    usage: '<p class="fst-italic">...</p>',
    category: 'typography',
    tailwindEquivalent: 'italic / not-italic',
    parameters: ['italic', 'normal']
  },
  // Background
  {
    class: 'bg-',
    description: 'Sets the background color of an element.',
    usage: '<div class="bg-primary">...</div>',
    category: 'background',
    tailwindEquivalent: 'bg-',
    parameters: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'transparent']
  },
  // Border
  {
    class: 'border',
    description: 'Adds an additive border to an element.',
    usage: '<div class="border">...</div>',
    category: 'border',
    tailwindEquivalent: 'border'
  },
  {
    class: 'rounded',
    description: 'Adds rounded corners to an element.',
    usage: '<div class="rounded-circle">...</div>',
    category: 'border',
    tailwindEquivalent: 'rounded-',
    parameters: ['0', '1', '2', '3', 'circle', 'pill']
  },
  // Display
  {
    class: 'd-',
    description: 'Display utility for controlling visibility and layout.',
    usage: '<div class="d-none d-md-block">...</div>',
    category: 'utilities',
    tailwindEquivalent: '',
    parameters: ['none', 'inline', 'inline-block', 'block', 'grid', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex']
  },
  // Flex
  {
    class: 'flex-',
    description: 'Flexbox behavior utilities.',
    usage: '<div class="d-flex flex-row">...</div>',
    category: 'flex',
    tailwindEquivalent: 'flex-',
    parameters: ['row', 'row-reverse', 'column', 'column-reverse', 'wrap', 'nowrap', 'wrap-reverse', 'fill', 'grow-0', 'grow-1', 'shrink-0', 'shrink-1']
  },
  {
    class: 'justify-content-',
    description: 'Aligns flex items along the main axis.',
    usage: '<div class="d-flex justify-content-center">...</div>',
    category: 'flex',
    tailwindEquivalent: 'justify-',
    parameters: ['start', 'end', 'center', 'between', 'around', 'evenly']
  },
  {
    class: 'align-items-',
    description: 'Aligns flex items along the cross axis.',
    usage: '<div class="d-flex align-items-center">...</div>',
    category: 'flex',
    tailwindEquivalent: 'items-',
    parameters: ['start', 'end', 'center', 'baseline', 'stretch']
  },
  // Sizing
  {
    class: 'w-',
    description: 'Width utilities (25%, 50%, 75%, 100%, auto).',
    usage: '<div class="w-50">...</div>',
    category: 'sizing',
    tailwindEquivalent: 'w-',
    parameters: ['25', '50', '75', '100', 'auto']
  },
  {
    class: 'h-',
    description: 'Height utilities (25%, 50%, 75%, 100%, auto).',
    usage: '<div class="h-100">...</div>',
    category: 'sizing',
    tailwindEquivalent: 'h-',
    parameters: ['25', '50', '75', '100', 'auto']
  },
  // Components
  {
    class: 'btn',
    description: 'Base class for a button. Must be paired with a modifier.',
    usage: '<button class="btn btn-primary">Button</button>',
    category: 'components',
    tailwindEquivalent: 'bg-blue-500 ...'
  },
  {
    class: 'card',
    description: 'A flexible and extensible content container.',
    usage: '<div class="card"><div class="card-body">...</div></div>',
    category: 'components',
    tailwindEquivalent: 'border rounded-lg ...'
  },
  {
    class: 'navbar',
    description: 'Responsive navigation header.',
    usage: '<nav class="navbar navbar-expand-lg navbar-light bg-light">...</nav>',
    category: 'components'
  },
  {
    class: 'alert',
    description: 'Provides contextual feedback messages.',
    usage: '<div class="alert alert-primary">...</div>',
    category: 'components',
    parameters: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
  },
  {
    class: 'modal',
    description: 'Customized dialog prompts.',
    usage: '<div class="modal">...</div>',
    category: 'components'
  },
  // Position
  {
    class: 'position-',
    description: 'Positioning utilities.',
    usage: '<div class="position-absolute">...</div>',
    category: 'utilities',
    tailwindEquivalent: '',
    parameters: ['static', 'relative', 'absolute', 'fixed', 'sticky']
  },
  // Shadow
  {
    class: 'shadow',
    description: 'Box-shadow utilities.',
    usage: '<div class="shadow-lg">...</div>',
    category: 'effects',
    tailwindEquivalent: 'shadow-',
    parameters: ['none', 'sm', '', 'lg']
  },
  // Z-index
  {
    class: 'z-',
    description: 'Layering utilities.',
    usage: '<div class="z-3">...</div>',
    category: 'effects',
    tailwindEquivalent: 'z-',
    parameters: ['0', '1', '2', '3', 'n1']
  }
];
