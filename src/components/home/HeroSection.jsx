import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Search, BedDouble, CalendarCheck, ShieldCheck } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center lg:px-8 lg:py-32">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          <ShieldCheck className="h-4 w-4" />
          Trusted by 50,000+ patients across India
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Your Health, Our{' '}
          <span className="text-primary">Priority</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Access real-time hospital bed availability, discover top medical specialists,
          and seamlessly book appointments across multiple cities.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild className="gap-2 px-8">
            <Link to="/hospital">
              <Search className="h-4 w-4" />
              Find a Hospital
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2 px-8">
            <Link to="/appointments">
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </Link>
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid w-full max-w-4xl gap-4 md:grid-cols-3">
          {[
            {
              icon: BedDouble,
              title: 'Real-Time Beds',
              desc: 'Live tracking of ICU, oxygen, and general bed availability',
            },
            {
              icon: CalendarCheck,
              title: 'Easy Booking',
              desc: 'Schedule appointments with top specialists in minutes',
            },
            {
              icon: ShieldCheck,
              title: 'Trusted Network',
              desc: '500+ verified hospitals across 25 major cities',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group rounded-xl border border-border bg-card p-6 text-left transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <card.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{card.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
