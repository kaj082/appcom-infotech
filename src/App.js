import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routerConstant } from "./contants";
import { About, Contact, Home, Service } from "./pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routerConstant.ROUTES.HOME} element={<Home />} />
        <Route path={routerConstant.ROUTES.ABOUT} element={<About />} />
        <Route path={routerConstant.ROUTES.SERVICES} element={<Service />} />
        <Route path={routerConstant.ROUTES.CONTACT_US} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
