import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Search, CalendarCheck, ClipboardList, HeartPulse } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Search Hospitals', desc: 'Find hospitals by city and check live bed availability in seconds.' },
  { icon: CalendarCheck, title: 'Book Appointment', desc: 'Choose a department, pick a specialist, and reserve your slot online.' },
  { icon: ClipboardList, title: 'Track Records', desc: 'View upcoming visits, past appointments, and health metrics in one dashboard.' },
  { icon: HeartPulse, title: 'Get Better Care', desc: 'Arrive informed — carry your digital records and never miss follow-ups.' },
];

export function AppPromoSection() {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            How Medlink Works
          </h2>
          <p className="mt-3 text-primary-foreground/70">
            Four simple steps to better healthcare
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground ring-2 ring-primary-foreground/20">
                <step.icon className="h-6 w-6" />
              </div>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground text-xs font-bold text-primary">
                {i + 1}
              </span>
              <h3 className="font-semibold text-primary-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" variant="secondary" asChild className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/hospital">
              <Search className="h-4 w-4" />
              Find a Hospital
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/appointments">
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
