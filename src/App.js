import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Lazily load other pages
const AboutPage = lazy(() => import("./pages/AboutUs/About"));
const ContactPage = lazy(() => import("./pages/ContactUs/Contact"));
const ServicesPage = lazy(() => import("./pages/Service/Service"));
const HomePage = lazy(() => import("./pages/Home/Home"));

const App = () => (
  <ErrorBoundary>
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Suspense>
  </ErrorBoundary>
);

export default App;
