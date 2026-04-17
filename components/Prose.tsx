import React from 'react';

/**
 * Article prose container matching Lake Logic typography.
 * Headings use Playfair; body uses DM Sans.
 */
export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-lakelogic max-w-none">
      {children}
    </div>
  );
}
