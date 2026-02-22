import { useState } from 'react';
import { faqs, API_BASE } from '../../lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import {
  Mail,
  MapPin,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Ambulance,
  Clock,
  HelpCircle,
} from 'lucide-react';

const emergencyContacts = [
  { label: 'Emergency Helpline', number: '112', icon: Ambulance },
  { label: 'Ambulance', number: '102', icon: Ambulance },
];

export function ContactContent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setResult({ success: false, message: 'Please fill in all fields.' });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: name, email, message }),
      });

      if (res.ok) {
        setResult({ success: true, message: 'Message sent successfully! We will get back to you soon.' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const text = await res.text();
        setResult({ success: false, message: text || 'Failed to send message.' });
      }
    } catch {
      setResult({ success: false, message: 'Something went wrong.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {"We're here to help. Reach out to us anytime."}
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
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

                  <Button type="submit" disabled={submitting} className="gap-2">
                    <Mail className="h-4 w-4" />
                    {submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="mt-8 border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left text-foreground">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <Card className="border-destructive/30 bg-destructive/5">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base text-destructive">
                  <Ambulance className="h-5 w-5" />
                  Emergency Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  {emergencyContacts.map((c) => (
                    <div key={c.number} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                      <c.icon className="h-5 w-5 text-destructive" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{c.label}</p>
                        <p className="text-lg font-bold text-destructive">{c.number}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        IIIT Lucknow, Ahmamau, Lucknow, Uttar Pradesh 226002
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">mail.medlink@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Support Hours</p>
                      <p className="text-sm text-muted-foreground">24/7 - Always available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
