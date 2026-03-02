import { Link } from 'react-router-dom';
import { doctors } from '../../lib/mock-data';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Star, Award, Users, Stethoscope } from 'lucide-react';

export function SpecialistsSection() {
  const displayDoctors = doctors.slice(0, 6);

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Stethoscope className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Top Medical Specialists
          </h2>
          <p className="mt-3 text-muted-foreground">
            Consult with the best doctors across specialties
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayDoctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="group overflow-hidden border-border transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    {doctor.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                    <p className="text-sm text-primary">{doctor.specialty}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{doctor.hospital}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {doctor.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="h-3.5 w-3.5 text-primary" />
                    {doctor.experience}yr exp
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-primary" />
                    {doctor.patients.toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/appointments">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
