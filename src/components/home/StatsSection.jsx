import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Partner Hospitals' },
  { value: 25, suffix: '+', label: 'Cities Covered' },
  { value: 50, suffix: 'K+', label: 'Patients Served' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
];

function useCountUp(end, duration, inView) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return count;
}

function StatCard({ value, suffix, label }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(value, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-primary md:text-4xl">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
