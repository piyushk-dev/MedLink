import React, { lazy, Suspense } from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HospitalPage from "./components/HospitalPage";
import { Toaster } from "react-hot-toast";
import AppoitmentTable from "./components/AppoitmentTable";
const Home = lazy(() => import("./components/Home"));
const BedsAvailability = lazy(() => import("./components/BedsAvailability"));
const Appointments = lazy(() => import("./components/Appointments"));
const Contact = lazy(() => import("./components/Contact"));
const ErrorElement = lazy(() => import("./components/ErrorElement"));
const Login = lazy(() => import("./components/Login"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Signup = lazy(() => import("./components/Signup"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loader />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/patient",
        element: (
          <Suspense fallback={<Loader />}>
            <AppoitmentTable />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/appointments",
        element: (
          <Suspense fallback={<Loader />}>
            <Appointments />
          </Suspense>
        ),
      },
      {
        path: "/hospital",
        element: (
          <Suspense fallback={<Loader />}>
            <BedsAvailability />
          </Suspense>
        ),
      },
      {
        path: "/hospital/beds/:location",
        element: (
          <Suspense fallback={<Loader />}>
            <HospitalPage />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Loader />}>
            <Signup />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
