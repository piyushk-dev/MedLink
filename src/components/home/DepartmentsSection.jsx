import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import {
  Heart,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Eye,
  Pill,
  Syringe,
  Activity,
  Ambulance,
  HeartPulse,
  ShieldPlus,
} from 'lucide-react';

const deptList = [
  { icon: Heart, name: 'Cardiology', desc: 'Heart & vascular care' },
  { icon: Brain, name: 'Neurology', desc: 'Brain & nervous system' },
  { icon: Bone, name: 'Orthopedics', desc: 'Bone & joint surgery' },
  { icon: Baby, name: 'Pediatrics', desc: 'Child healthcare' },
  { icon: Stethoscope, name: 'General Medicine', desc: 'Primary care' },
  { icon: Eye, name: 'Ophthalmology', desc: 'Eye care & surgery' },
  { icon: Pill, name: 'Dermatology', desc: 'Skin & hair care' },
  { icon: Syringe, name: 'Oncology', desc: 'Cancer treatment' },
  { icon: Activity, name: 'Pulmonology', desc: 'Lung & respiratory' },
  { icon: HeartPulse, name: 'Emergency', desc: '24/7 trauma centre' },
  { icon: ShieldPlus, name: 'ICU', desc: 'Intensive critical care' },
  { icon: Ambulance, name: 'Ambulance', desc: 'Rapid dispatch service' },
];

export function DepartmentsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
            <HeartPulse className="h-6 w-6 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Departments & Services
          </h2>
          <p className="mt-3 text-muted-foreground">
            Access 12+ medical departments across our partner hospital network
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {deptList.map((dept) => (
            <Link key={dept.name} to="/hospital">
              <Card className="group border-border text-center transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-primary/30 cursor-pointer h-full">
                <CardContent className="flex flex-col items-center p-5">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <dept.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{dept.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{dept.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
