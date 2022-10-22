import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LoadingSpinner from "./Components/LoadingSpinner";

import { Routes, Route } from "react-router-dom";

const Main = React.lazy(() => import("./Pages/Main/Main"));
const Expertise = React.lazy(() => import("./Pages/About/Expertise/Expertise"));
const Team = React.lazy(() => import("./Pages/About/Team/Team"));
const Sponsors = React.lazy(() => import("./Pages/About/Sponsors/Sponsors"));
const Press = React.lazy(() => import("./Pages/About/Press/Press"));
const Process = React.lazy(() => import("./Pages/Services/Process/Process"));
const Visa = React.lazy(() => import("./Pages/Services/Visa/Visa"));
const Testimonials = React.lazy(() =>
  import("./Pages/Stories/Testimonials/Testimonials")
);
const Cases = React.lazy(() => import("./Pages/Stories/Cases/Cases"));
const Blog = React.lazy(() => import("./Pages/Resources/Blog/Blog"));
const FAQ = React.lazy(() => import("./Pages/Resources/FAQ/FAQ"));
const Partnership = React.lazy(() => import("./Pages/Partnership/Partnership"));

function App() {
  return (
    <div className="App">
      <Navbar />

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
            path="/about/team"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Team />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/about/sponsors"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Sponsors />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/about/press"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Press />
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
            path="/stories/cases"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Cases />
              </React.Suspense>
            }
          />
          <Route
            exact
            path="/resources/blog"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Blog />
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
            path="/partnership"
            element={
              <React.Suspense fallback={<LoadingSpinner />}>
                <Partnership />
              </React.Suspense>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
