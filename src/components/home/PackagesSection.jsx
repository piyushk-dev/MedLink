import { hospitalFeatures } from '../../lib/mock-data';
import { Card, CardContent } from '../ui/card';
import { ShieldCheck, Clock, Stethoscope, BedDouble } from 'lucide-react';

const icons = [Clock, Stethoscope, BedDouble, ShieldCheck];

export function PackagesSection() {
  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Patients Trust Medlink
          </h2>
          <p className="mt-3 text-muted-foreground">
            A smarter way to navigate India's healthcare system
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {hospitalFeatures.map((feature, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Card
                key={feature.title}
                className="border-border transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
