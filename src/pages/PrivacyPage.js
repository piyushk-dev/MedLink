import React from "react";

const PrivacyPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: February 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">1. Information We Collect</h2>
          <p>When you create an account or book an appointment through Medlink, we collect personal information including your full name, email address, phone number, and appointment details (department, doctor, date, time, symptoms). We do not collect payment information as our platform is currently free to use.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">2. How We Use Your Information</h2>
          <p>We use personal information to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Create and manage your Medlink account</li>
            <li>Process and confirm appointment bookings</li>
            <li>Send verification OTPs via email during registration</li>
            <li>Display your appointment history in your patient dashboard</li>
            <li>Respond to contact form enquiries</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">3. Data Storage & Security</h2>
          <p>Your data is stored in a PostgreSQL database hosted on Neon (cloud provider). Passwords are hashed before storage and are never stored in plain text. Authentication uses JSON Web Tokens (JWT) stored in your browser's local storage. We use HTTPS and standard security practices, but no system is 100% secure.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">4. Data Sharing</h2>
          <p>We do not sell, rent, or share your personal information with third parties. Your data is used solely for providing Medlink services. Hospital information displayed on the platform is publicly available.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">5. Cookies & Local Storage</h2>
          <p>Medlink uses browser local storage to keep you signed in between sessions (JWT token). We do not use tracking cookies or third-party analytics at this time.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">6. Your Rights</h2>
          <p>You may request deletion of your account and associated data by contacting us at the email address below. You can also clear your login session at any time by signing out, which removes your token from local storage.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">7. Contact</h2>
          <p>For privacy-related concerns, reach out to us at <span className="text-primary">mail.medlink@gmail.com</span>.</p>
        </section>

        <section className="rounded-lg border border-border bg-secondary/30 p-4 text-xs">
          <p className="font-medium text-foreground">Beta Disclaimer</p>
          <p className="mt-1">Medlink is a student project built at IIIT Lucknow and is currently in beta. While we take data privacy seriously, this platform is under active development. Use at your own discretion.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
