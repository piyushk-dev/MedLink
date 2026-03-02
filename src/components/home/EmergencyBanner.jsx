import { Phone, AlertTriangle } from 'lucide-react';

export function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-2 text-xs sm:text-sm">
        <AlertTriangle className="h-4 w-4 shrink-0" />
        <span className="font-medium">Emergency?</span>
        <span className="hidden sm:inline text-red-100">Call national helpline</span>
        <a
          href="tel:112"
          className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-0.5 font-bold transition hover:bg-white/30"
        >
          <Phone className="h-3 w-3" /> 112
        </a>
        <span className="text-red-200">|</span>
        <a
          href="tel:102"
          className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-0.5 font-bold transition hover:bg-white/30"
        >
          <Phone className="h-3 w-3" /> 102
        </a>
      </div>
    </div>
  );
}
