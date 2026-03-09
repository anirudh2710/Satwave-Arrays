import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCategoryColor(category?: string): string {
  const norm = (category || '').toLowerCase();
  switch (norm) {
    case 'event':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    case 'company':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    case 'product':
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    case 'technology':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    case 'news':
    default:
      return 'bg-brand-black/40 text-brand-accent border-brand-accent/30';
  }
}
