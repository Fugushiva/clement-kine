'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface TabItem {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  className?: string;
}

export function Tabs({ items, defaultTab, className }: TabsProps) {
  const [activeId, setActiveId] = React.useState(
    defaultTab ?? items[0]?.id ?? '',
  );
  const tabRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map());

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const ids = items.map((i) => i.id);
    const currentIndex = ids.indexOf(activeId);

    let nextIndex: number | null = null;

    switch (e.key) {
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % ids.length;
        break;
      case 'ArrowLeft':
        nextIndex = (currentIndex - 1 + ids.length) % ids.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = ids.length - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    const nextId = ids[nextIndex];
    setActiveId(nextId);
    tabRefs.current.get(nextId)?.focus();
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Tab list */}
      <div
        role="tablist"
        aria-label="Onglets"
        className="flex border-b border-[var(--color-border-default)]"
      >
        {items.map((item) => {
          const isSelected = item.id === activeId;
          const panelId = `tabpanel-${item.id}`;
          const tabId = `tab-${item.id}`;

          return (
            <button
              key={item.id}
              id={tabId}
              ref={(el) => {
                if (el) tabRefs.current.set(item.id, el);
              }}
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              onKeyDown={handleKeyDown}
              className={cn(
                'px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2',
                isSelected
                  ? 'border-[var(--color-brand-primary)] text-[var(--color-brand-primary)]'
                  : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] hover:border-[var(--color-border-default)]',
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Tab panels */}
      {items.map((item) => {
        const isSelected = item.id === activeId;
        const panelId = `tabpanel-${item.id}`;
        const tabId = `tab-${item.id}`;

        return (
          <div
            key={item.id}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!isSelected}
            tabIndex={0}
            className="py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]"
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
}
