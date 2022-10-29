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
const Pricing = React.lazy(() => import("./Pages/Pricing/Pricing"));
const Testimonials = React.lazy(() =>
  import("./Pages/Stories/Testimonials/Testimonials")
);
const Home = React.lazy(() => import("./Pages/User/Home/Home"));
const Survey = React.lazy(() => import("./Pages/User/DashBoard/Survey/Survey"));
const Payment = React.lazy(() =>
  import("./Pages/User/DashBoard/Payment/Payment")
);
const Progress = React.lazy(() =>
  import("./Pages/User/DashBoard/Progress/Progress")
);

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Routes>
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
                <Home />
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
            path="/dashboard/survey"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Survey />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/dashboard/progress"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Progress />
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
