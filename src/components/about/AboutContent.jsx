import { teamMembers } from '../../lib/mock-data';
import { Card, CardContent } from '../ui/card';
import {
  Heart,
  Target,
  Eye,
  Users,
  Hospital,
  MapPin,
  Globe,
  Shield,
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Patient-First Approach',
    description: 'Every decision we make is centered around improving the patient experience and health outcomes.',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We provide accurate, real-time data so patients can make informed healthcare decisions.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Making quality healthcare accessible to everyone, regardless of location or background.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with hospitals, doctors, and patients to build a connected healthcare ecosystem.',
  },
];

const stats = [
  { icon: Hospital, value: '500+', label: 'Partner Hospitals' },
  { icon: MapPin, value: '25+', label: 'Cities' },
  { icon: Users, value: '50K+', label: 'Patients Served' },
  { icon: Heart, value: '1M+', label: 'Lives Impacted' },
];

export function AboutContent() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background px-4 py-16 text-center lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            About <span className="text-primary">Medlink</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We are a team of students at IIIT Lucknow building a centralized platform
            that connects patients with hospitals, doctors, and medical services — making
            healthcare accessible, transparent, and efficient across India.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To make medical services accessible, transparent, and efficient for every person
                in India. We believe that finding the right hospital bed or the right specialist
                should never be a challenge during critical moments.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A world where healthcare is just a click away. We envision a future where
                every patient has immediate access to real-time hospital information, top
                medical professionals, and comprehensive health services.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto h-8 w-8 text-primary" />
              <div className="mt-2 text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
          <p className="mt-3 text-muted-foreground">The principles that guide everything we do</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <Card key={v.title} className="border-border transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/30 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground">Meet the Team</h2>
            <p className="mt-3 text-muted-foreground">
              Students at IIIT Lucknow building the future of healthcare
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-border text-center transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                    {member.name.split(' ').map((w) => w[0]).join('')}
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
