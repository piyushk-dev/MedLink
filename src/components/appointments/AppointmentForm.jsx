import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../lib/auth-context';
import { departments, doctors, API_BASE } from '../../lib/mock-data';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  CalendarCheck,
  Clock,
  Stethoscope,
  AlertCircle,
  CheckCircle2,
  Info,
  ClipboardList,
  Lightbulb,
  Phone,
} from 'lucide-react';

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
  '4:30 PM', '5:00 PM',
];

const tips = [
  'Carry previous medical records and prescriptions',
  'Arrive 15 minutes before your appointment time',
  'Prepare a list of symptoms and questions',
  'Bring your insurance card and photo ID',
  'Wear comfortable clothing for examinations',
];

export function AppointmentForm() {
  const { isAuthenticated, user } = useAuth();
  const [department, setDepartment] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [phone, setPhoneNum] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

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
        message: `Department: ${department} | Doctor: ${doctor}${symptoms ? ' | Symptoms: ' + symptoms : ''}`,
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
        setResult({ success: true, message: 'Appointment booked successfully! A confirmation email has been sent.' });
        setDepartment('');
        setDoctor('');
        setDate('');
        setTime('');
        setPhoneNum('');
        setSymptoms('');
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

  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <AlertCircle className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-foreground">Sign In Required</h2>
        <p className="mt-3 text-muted-foreground">
          Please sign in to your account to book an appointment with our specialists.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/signup">Create Account</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Book an Appointment</h1>
        <p className="mt-2 text-muted-foreground">
          Schedule a visit with our top specialists
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <ClipboardList className="h-5 w-5 text-primary" />
                Appointment Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="department" className="flex items-center gap-1.5">
                      <Stethoscope className="h-3.5 w-3.5 text-primary" /> Department
                    </Label>
                    <Select value={department} onValueChange={(val) => { setDepartment(val); setDoctor(''); }}>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((d) => (
                          <SelectItem key={d} value={d}>{d}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="doctor" className="flex items-center gap-1.5">
                      <Stethoscope className="h-3.5 w-3.5 text-primary" /> Doctor
                    </Label>
                    <Select value={doctor} onValueChange={setDoctor}>
                      <SelectTrigger id="doctor">
                        <SelectValue placeholder="Select doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {filteredDoctors.map((d) => (
                          <SelectItem key={d.id} value={d.name}>
                            {d.name} - {d.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="flex items-center gap-1.5">
                      <CalendarCheck className="h-3.5 w-3.5 text-primary" /> Preferred Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="time" className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-primary" /> Preferred Time
                    </Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-primary" /> Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhoneNum(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="symptoms" className="flex items-center gap-1.5">
                    <Info className="h-3.5 w-3.5 text-primary" /> Symptoms / Notes (Optional)
                  </Label>
                  <Textarea
                    id="symptoms"
                    placeholder="Describe your symptoms or any notes for the doctor..."
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    rows={4}
                  />
                </div>

                {result && (
                  <div
                    className={`flex items-center gap-2 rounded-lg p-3 text-sm ${
                      result.success
                        ? 'bg-accent/10 text-accent'
                        : 'bg-destructive/10 text-destructive'
                    }`}
                  >
                    {result.success ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                    ) : (
                      <AlertCircle className="h-4 w-4 shrink-0" />
                    )}
                    {result.message}
                  </div>
                )}

                <Button type="submit" size="lg" disabled={submitting} className="gap-2">
                  <CalendarCheck className="h-4 w-4" />
                  {submitting ? 'Booking...' : 'Confirm Appointment'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="w-full shrink-0 lg:w-80">
          <Card className="border-border bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <Lightbulb className="h-5 w-5 text-primary" />
                Tips for Your Visit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-3">
                {tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
