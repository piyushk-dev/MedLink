import React from "react";

const TermsPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold text-foreground">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: February 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing or using Medlink ("the Platform"), you agree to these Terms of Service. If you do not agree, please do not use the Platform. Medlink reserves the right to update these terms at any time.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">2. Description of Service</h2>
          <p>Medlink is a healthcare information platform that provides:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Real-time hospital bed availability data across Indian cities</li>
            <li>Online appointment booking with listed medical specialists</li>
            <li>A patient dashboard for managing appointment history</li>
            <li>A contact channel for user enquiries</li>
          </ul>
          <p className="mt-2">Medlink is an <strong>information aggregation platform</strong> and does not provide medical advice, diagnosis, or treatment.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">3. User Accounts</h2>
          <p>To book appointments, you must create an account with a valid email address and verify it via OTP. You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate information during registration.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Use the Platform for any unlawful purpose</li>
            <li>Submit false or misleading information</li>
            <li>Attempt to gain unauthorized access to the Platform's systems</li>
            <li>Scrape, crawl, or use automated tools to extract data at scale</li>
            <li>Impersonate another person or entity</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">5. Medical Disclaimer</h2>
          <p>Medlink does not replace professional medical advice. Hospital bed data and doctor listings are provided for informational purposes only. Always consult a qualified healthcare provider for medical decisions. In an emergency, call 112 or your local emergency number immediately.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
          <p>Medlink is provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or timeliness of hospital or bed availability data. Medlink shall not be liable for any damages arising from your use of the Platform.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">7. Termination</h2>
          <p>We reserve the right to suspend or terminate accounts that violate these terms. You may delete your account at any time by contacting us.</p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">8. Contact</h2>
          <p>For questions about these terms, contact us at <span className="text-primary">mail.medlink@gmail.com</span>.</p>
        </section>

        <section className="rounded-lg border border-border bg-secondary/30 p-4 text-xs">
          <p className="font-medium text-foreground">Beta Disclaimer</p>
          <p className="mt-1">Medlink is a student project built at IIIT Lucknow and is currently in beta. Features and terms may change as development continues. Use at your own discretion.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
