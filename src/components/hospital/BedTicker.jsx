import { BedDouble, Activity, Wind } from 'lucide-react';

export function BedTicker({ hospitals }) {
  if (!hospitals || hospitals.length === 0) return null;

  // Double the items for seamless loop
  const items = [...hospitals, ...hospitals];

  return (
    <div className="overflow-hidden border-b border-border bg-primary/5">
      <div className="flex animate-marquee items-center gap-8 whitespace-nowrap py-2.5">
        {items.map((h, i) => {
          const totalBeds = h.beds || 0;
          const available = Math.floor(totalBeds * 0.4);
          const icu = Math.floor(totalBeds * 0.1);
          const oxygen = Math.floor(totalBeds * 0.15);

          return (
            <div key={`${h.id}-${i}`} className="inline-flex items-center gap-4 text-sm">
              <span className="font-semibold text-foreground">{h.name}</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <BedDouble className="h-3.5 w-3.5 text-primary" /> {available}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Activity className="h-3.5 w-3.5 text-destructive" /> ICU: {icu}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Wind className="h-3.5 w-3.5 text-accent" /> O₂: {oxygen}
              </span>
              <span className="text-border">|</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
