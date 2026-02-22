import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../lib/auth-context';
import { healthMetrics, labReports, API_BASE } from '../../lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  Heart,
  Activity,
  Weight,
  Ruler,
  Calendar,
  Clock,
  Download,
  FileText,
  AlertCircle,
  User,
  Stethoscope,
} from 'lucide-react';

export function PatientDashboard() {
  const { isAuthenticated, user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated || !user?.id) {
      setLoading(false);
      return;
    }
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('logintoken');
        const res = await fetch(`${API_BASE}/appointment/${user.id}`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        if (res.ok) {
          const data = await res.json();
          setAppointments(data);
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, [isAuthenticated, user]);

  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <AlertCircle className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-foreground">Sign In Required</h2>
        <p className="mt-3 text-muted-foreground">
          Please sign in to access your patient dashboard and medical records.
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

  // Parse appointments into upcoming/past based on date
  const today = new Date().toISOString().split('T')[0];
  const upcomingAppointments = appointments.filter((a) => a.date >= today);
  const pastAppointments = appointments.filter((a) => a.date < today);

  // Parse message field to extract department/doctor info
  const parseMessage = (msg) => {
    if (!msg) return { department: 'General', doctor: 'Doctor' };
    const parts = msg.split(' | ');
    const dept = parts.find((p) => p.startsWith('Department:'))?.replace('Department:', '').trim() || 'General';
    const doc = parts.find((p) => p.startsWith('Doctor:'))?.replace('Doctor:', '').trim() || 'Doctor';
    return { department: dept, doctor: doc };
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome, {user?.name || 'Patient'}
          </h1>
          <p className="mt-1 text-muted-foreground">
            Manage your health records and appointments
          </p>
        </div>
        <Button asChild className="gap-2">
          <Link to="/appointments">
            <Calendar className="h-4 w-4" /> Book New Appointment
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1 flex flex-col gap-6">
          {/* Upcoming Appointments */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="py-8 text-center text-muted-foreground">Loading...</p>
              ) : upcomingAppointments.length === 0 ? (
                <div className="py-8 text-center">
                  <Calendar className="mx-auto h-10 w-10 text-muted-foreground/40" />
                  <p className="mt-3 text-muted-foreground">No upcoming appointments</p>
                  <Button variant="outline" asChild className="mt-3">
                    <Link to="/appointments">Book an Appointment</Link>
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {upcomingAppointments.map((apt) => {
                    const { department, doctor } = parseMessage(apt.message);
                    return (
                      <div
                        key={apt.id}
                        className="flex flex-col gap-3 rounded-lg border border-border p-4 md:flex-row md:items-center md:justify-between"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Stethoscope className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{doctor}</p>
                            <p className="text-sm text-muted-foreground">{department}</p>
                            <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" /> {apt.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {apt.time}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge className="w-fit bg-primary/10 text-primary">Upcoming</Badge>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Past Appointments */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Clock className="h-5 w-5 text-muted-foreground" />
                Past Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              {pastAppointments.length === 0 ? (
                <p className="py-4 text-center text-muted-foreground">No past appointments</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {pastAppointments.map((apt) => {
                    const { department, doctor } = parseMessage(apt.message);
                    return (
                      <div
                        key={apt.id}
                        className="flex flex-col gap-3 rounded-lg border border-border p-4 md:flex-row md:items-center md:justify-between"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                            <Stethoscope className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{doctor}</p>
                            <p className="text-sm text-muted-foreground">{department}</p>
                            <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" /> {apt.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {apt.time}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary">Completed</Badge>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="flex w-full shrink-0 flex-col gap-6 lg:w-80">
          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {user?.name?.charAt(0).toUpperCase() || 'P'}
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{user?.name}</h3>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
              <div className="mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <User className="h-3 w-3" /> Patient ID: #{user?.id || '0001'}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base text-foreground">
                <Activity className="h-4 w-4 text-primary" />
                Health Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-secondary/50 p-3 text-center">
                  <Heart className="mx-auto h-5 w-5 text-destructive" />
                  <p className="mt-1 text-lg font-bold text-foreground">{healthMetrics.heartRate}</p>
                  <p className="text-xs text-muted-foreground">BPM</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-3 text-center">
                  <Activity className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-1 text-lg font-bold text-foreground">{healthMetrics.bloodPressure}</p>
                  <p className="text-xs text-muted-foreground">mmHg</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-3 text-center">
                  <Weight className="mx-auto h-5 w-5 text-accent" />
                  <p className="mt-1 text-lg font-bold text-foreground">{healthMetrics.weight}</p>
                  <p className="text-xs text-muted-foreground">kg</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-3 text-center">
                  <Ruler className="mx-auto h-5 w-5 text-accent" />
                  <p className="mt-1 text-lg font-bold text-foreground">{healthMetrics.height}</p>
                  <p className="text-xs text-muted-foreground">cm</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base text-foreground">
                <FileText className="h-4 w-4 text-primary" />
                Recent Lab Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {labReports.map((report) => (
                  <div
                    key={report.id}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{report.name}</p>
                      <p className="text-xs text-muted-foreground">{report.date}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1 text-primary">
                      <Download className="h-3.5 w-3.5" />
                      <span className="sr-only">Download {report.name}</span>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
