import React, { lazy, Suspense } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AuthProvider } from "./lib/auth-context";
import Loader from "./components/Loader";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";

const HomePage = lazy(() => import("./pages/HomePage"));
const HospitalPage = lazy(() => import("./pages/HospitalPage"));
const HospitalDetailPage = lazy(() => import("./pages/HospitalDetailPage"));
const AppointmentsPage = lazy(() => import("./pages/AppointmentsPage"));
const PatientPage = lazy(() => import("./pages/PatientPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));

const AppLayout = () => {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "hospital", element: <HospitalPage /> },
      { path: "hospital/:id", element: <HospitalDetailPage /> },
      { path: "appointments", element: <AppointmentsPage /> },
      { path: "patient", element: <PatientPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
