import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../../lib/auth-context';
import { API_BASE, doctors, departments } from '../../lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  MapPin,
  Phone,
  BedDouble,
  Activity,
  Wind,
  Star,
  Clock,
  CalendarCheck,
  Stethoscope,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  Building2,
  Shield,
  Wifi,
  ParkingCircle,
  Pill,
  Coffee,
  Siren,
  Droplets,
  FlaskConical,
  Info,
} from 'lucide-react';

const allSpecialties = [
  'Cardiology', 'Neurology', 'Orthopedics', 'Oncology', 'Pediatrics',
  'Dermatology', 'ENT', 'Gastroenterology', 'Pulmonology', 'Nephrology',
];
const allAmenities = [
  'Parking', 'Pharmacy', 'Cafeteria', 'WiFi', 'Emergency',
  'Blood Bank', 'Helipad', 'Lab',
];

const amenityIcons = {
  Parking: ParkingCircle,
  Pharmacy: Pill,
  Cafeteria: Coffee,
  WiFi: Wifi,
  Emergency: Siren,
  'Blood Bank': Droplets,
  Helipad: Shield,
  Lab: FlaskConical,
};

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
  '4:30 PM', '5:00 PM',
];

function enrichHospital(h) {
  const totalBeds = h.beds || 100;
  const seed = h.id || 1;
  const available = Math.floor(totalBeds * (0.3 + (seed % 5) * 0.05));
  const icu = Math.floor(totalBeds * 0.1) + (seed % 3);
  const oxygen = Math.floor(totalBeds * 0.15) + (seed % 4);
  const rating = (3.5 + (seed % 15) * 0.1).toFixed(1);

  const specCount = 3 + (seed % 4);
  const specialties = [];
  for (let i = 0; i < specCount; i++) {
    specialties.push(allSpecialties[(seed + i) % allSpecialties.length]);
  }

  const amenCount = 3 + (seed % 3);
  const amenities = [];
  for (let i = 0; i < amenCount; i++) {
    amenities.push(allAmenities[(seed + i) % allAmenities.length]);
  }

  return {
    ...h,
    city: h.location || '',
    phone: h.contactInfo || '',
    rating: parseFloat(rating),
    specialties: [...new Set(specialties)],
    amenities: [...new Set(amenities)],
    bedInfo: { total: totalBeds, available, icu, oxygen },
  };
}

export function HospitalDetail() {
  const { id } = useParams();
  const { isAuthenticated, user } = useAuth();
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Booking form state
  const [department, setDepartment] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [phone, setPhoneNum] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchHospital = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/hospitals/id/${id}`);
        if (!res.ok) throw new Error('Hospital not found');
        const data = await res.json();
        setHospital(enrichHospital(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchHospital();
  }, [id]);

  const filteredDoctors = department
    ? doctors.filter((d) => d.specialty === department)
    : doctors;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!department || !doctor || !date || !time) {
      setResult({ success: false, message: 'Please fill in all required fields.' });
      return;
    }
    setSubmitting(true);
    try {
      const token = localStorage.getItem('logintoken');
      const body = {
        patientId: user?.id || null,
        fullName: user?.name || 'Patient',
        email: user?.email || '',
        phone: phone || '0000000000',
        date,
        time,
        message: `Hospital: ${hospital.name} | Department: ${department} | Doctor: ${doctor}${symptoms ? ' | Symptoms: ' + symptoms : ''}`,
      };
      const res = await fetch(`${API_BASE}/appointment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setResult({ success: true, message: 'Appointment booked! A confirmation email has been sent.' });
        setDepartment(''); setDoctor(''); setDate(''); setTime(''); setPhoneNum(''); setSymptoms('');
      } else {
        const text = await res.text();
        setResult({ success: false, message: text || 'Failed to book appointment.' });
      }
    } catch {
      setResult({ success: false, message: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (error || !hospital) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-destructive" />
        <h2 className="mt-4 text-2xl font-bold text-foreground">Hospital Not Found</h2>
        <p className="mt-2 text-muted-foreground">{error || 'This hospital does not exist.'}</p>
        <Button asChild className="mt-6">
          <Link to="/hospital">Back to Hospitals</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      {/* Back link */}
      <Link to="/hospital" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to all hospitals
      </Link>

      {/* Hospital Header */}
      <div className="mt-4 rounded-xl border border-border bg-card p-6 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground lg:text-3xl">{hospital.name}</h1>
              <p className="mt-1 flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4" /> {hospital.address}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-amber-400" /> {hospital.rating} rating
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Phone className="h-4 w-4" /> {hospital.phone}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {hospital.city}
                </span>
              </div>
            </div>
          </div>

          {/* Bed stats */}
          <div className="flex gap-3">
            <div className="rounded-lg border border-border bg-secondary/50 px-5 py-3 text-center">
              <BedDouble className="mx-auto h-6 w-6 text-primary" />
              <div className="mt-1 text-2xl font-bold text-foreground">{hospital.bedInfo.available}</div>
              <div className="text-xs text-muted-foreground">General</div>
            </div>
            <div className="rounded-lg border border-border bg-secondary/50 px-5 py-3 text-center">
              <Activity className="mx-auto h-6 w-6 text-destructive" />
              <div className="mt-1 text-2xl font-bold text-foreground">{hospital.bedInfo.icu}</div>
              <div className="text-xs text-muted-foreground">ICU</div>
            </div>
            <div className="rounded-lg border border-border bg-secondary/50 px-5 py-3 text-center">
              <Wind className="mx-auto h-6 w-6 text-accent" />
              <div className="mt-1 text-2xl font-bold text-foreground">{hospital.bedInfo.oxygen}</div>
              <div className="text-xs text-muted-foreground">Oxygen</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        {/* Left: Hospital info */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Specialties */}
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Stethoscope className="h-5 w-5 text-primary" /> Departments & Specialties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {hospital.specialties.map((s) => (
                  <Badge key={s} className="bg-primary/10 text-primary">{s}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Amenities */}
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Shield className="h-5 w-5 text-primary" /> Amenities & Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {hospital.amenities.map((a) => {
                  const Icon = amenityIcons[a] || Shield;
                  return (
                    <div key={a} className="flex items-center gap-2 rounded-lg border border-border bg-secondary/30 p-3 text-sm">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{a}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Quick info */}
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Info className="h-5 w-5 text-primary" /> Hospital Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3">
                  <BedDouble className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{hospital.bedInfo.total} Total Beds</p>
                    <p className="text-xs text-muted-foreground">General, ICU & Oxygen</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{hospital.phone}</p>
                    <p className="text-xs text-muted-foreground">Contact Number</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">24/7 Emergency</p>
                    <p className="text-xs text-muted-foreground">OPD: 9 AM – 5 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{hospital.city}</p>
                    <p className="text-xs text-muted-foreground">{hospital.address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Appointment form */}
        <div className="w-full shrink-0 lg:w-[420px]">
          <Card className="sticky top-24 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <CalendarCheck className="h-5 w-5 text-primary" />
                Book Appointment
              </CardTitle>
              <p className="text-sm text-muted-foreground">at {hospital.name}</p>
            </CardHeader>
            <CardContent>
              {!isAuthenticated ? (
                <div className="py-6 text-center">
                  <AlertCircle className="mx-auto h-10 w-10 text-muted-foreground/40" />
                  <p className="mt-3 font-medium text-foreground">Sign in to book</p>
                  <p className="mt-1 text-sm text-muted-foreground">You need an account to schedule appointments.</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Button asChild size="sm"><Link to="/login">Sign In</Link></Button>
                    <Button variant="outline" asChild size="sm"><Link to="/signup">Sign Up</Link></Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Label className="flex items-center gap-1.5 text-sm">
                      <Stethoscope className="h-3.5 w-3.5 text-primary" /> Department
                    </Label>
                    <Select value={department} onValueChange={(val) => { setDepartment(val); setDoctor(''); }}>
                      <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
                      <SelectContent>
                        {departments.map((d) => (
                          <SelectItem key={d} value={d}>{d}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label className="flex items-center gap-1.5 text-sm">
                      <Stethoscope className="h-3.5 w-3.5 text-primary" /> Doctor
                    </Label>
                    <Select value={doctor} onValueChange={setDoctor}>
                      <SelectTrigger><SelectValue placeholder="Select doctor" /></SelectTrigger>
                      <SelectContent>
                        {filteredDoctors.map((d) => (
                          <SelectItem key={d.id} value={d.name}>{d.name} - {d.specialty}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-2">
                      <Label className="flex items-center gap-1.5 text-sm">
                        <CalendarCheck className="h-3.5 w-3.5 text-primary" /> Date
                      </Label>
                      <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="flex items-center gap-1.5 text-sm">
                        <Clock className="h-3.5 w-3.5 text-primary" /> Time
                      </Label>
                      <Select value={time} onValueChange={setTime}>
                        <SelectTrigger><SelectValue placeholder="Slot" /></SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label className="flex items-center gap-1.5 text-sm">
                      <Phone className="h-3.5 w-3.5 text-primary" /> Phone
                    </Label>
                    <Input type="tel" placeholder="Your phone number" value={phone} onChange={(e) => setPhoneNum(e.target.value)} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label className="flex items-center gap-1.5 text-sm">
                      <Info className="h-3.5 w-3.5 text-primary" /> Notes (optional)
                    </Label>
                    <Textarea placeholder="Symptoms or notes for the doctor..." value={symptoms} onChange={(e) => setSymptoms(e.target.value)} rows={3} />
                  </div>

                  {result && (
                    <div className={`flex items-center gap-2 rounded-lg p-3 text-sm ${result.success ? 'bg-accent/10 text-accent' : 'bg-destructive/10 text-destructive'}`}>
                      {result.success ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                      {result.message}
                    </div>
                  )}

                  <Button type="submit" disabled={submitting} className="gap-2">
                    <CalendarCheck className="h-4 w-4" />
                    {submitting ? 'Booking...' : 'Confirm Appointment'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
