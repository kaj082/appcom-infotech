import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { routerConstant } from "./contants";

// Lazily load other pages
const AboutPage = lazy(() => import("./pages/AboutUs/About"));
const ContactPage = lazy(() => import("./pages/ContactUs/Contact"));
const ServicesPage = lazy(() => import("./pages/Service/Service"));
const HomePage = lazy(() => import("./pages/Home/Home"));

const App = () => (
  <ErrorBoundary>
    <Suspense>
      <Routes>
        <Route path={routerConstant.ROUTES.HOME} element={<HomePage />} />
        <Route path={routerConstant.ROUTES.ABOUT} element={<AboutPage />} />
        <Route
          path={routerConstant.ROUTES.CONTACT_US}
          element={<ContactPage />}
        />
        <Route
          path={routerConstant.ROUTES.SERVICES}
          element={<ServicesPage />}
        />
      </Routes>
    </Suspense>
  </ErrorBoundary>
);

export default App;
