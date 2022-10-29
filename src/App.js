import React from "react";
import "./App.css";
import LoadingSpinner from "./Components/LoadingSpinner";

import { Routes, Route } from "react-router-dom";

const Main = React.lazy(() => import("./Pages/Main/Main"));
const Expertise = React.lazy(() => import("./Pages/About/Expertise/Expertise"));
const Process = React.lazy(() => import("./Pages/Services/Process/Process"));
const Visa = React.lazy(() => import("./Pages/Services/Visa/Visa"));
const FAQ = React.lazy(() => import("./Pages/Resources/FAQ/FAQ"));
const Signin = React.lazy(() => import("./Pages/Log/Signin/Signin"));
const Signup = React.lazy(() => import("./Pages/Log/Signup/Signup"));
const Dashboard = React.lazy(() => import("./Pages/User/DashBoard/Dashboard"));
const Payment = React.lazy(() => import("./Pages/User/Payment/Payment"));
const Pricing = React.lazy(() => import("./Pages/Pricing/Pricing"));
const Testimonials = React.lazy(() =>
  import("./Pages/Stories/Testimonials/Testimonials")
);

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Routes>
          {/* <Route
            exact
            path="/about/team"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Team />
              </React.Suspense>
            }
          /> */}
          {/* <Route
            exact
            path="/about/sponsors"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Sponsors />
              </React.Suspense>
            }
          /> */}
          {/* <Route
            exact
            path="/about/press"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Press />
              </React.Suspense>
            }
          /> */}

          {/* <Route
            exact
            path="/stories/cases"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Cases />
              </React.Suspense>
            }
          /> */}
          {/* <Route
            exact
            path="/resources/blog"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Blog />
              </React.Suspense>
            }
          /> */}
          {/* <Route
            exact
            path="/partnership"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Partnership />
              </React.Suspense>
            }
          /> */}

          <Route
            exact
            path="/"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Main />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/about/expertise"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Expertise />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/services/process"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Process />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/services/visa"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Visa />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/stories/testimonials"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Testimonials />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/resources/FAQ"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <FAQ />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/signin"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Signin />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Signup />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Dashboard />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/dashboard/payment"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Payment />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/dashboard/surey"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Payment />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/dashboard/progress"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Payment />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/pricing"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Pricing />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
