import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import GetinTouch from "./components/GetinTouch";
import ApplyJob from "./components/ApplyJob";
import Meet from "./components/Meet";
import RegisterPage from "./components/RegisterPage";
import NotFound from "./components/NotFound";
import Career from "./pages/Career";
import Events from "./pages/Events";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Career" element={<Career />} />
          <Route path="service" element={<Service />} />
          <Route path="GetinTouch" element={<GetinTouch />} />
          <Route path="ApplyJob" element={<ApplyJob />} />
          <Route path="Meet" element={<Meet />} />
          <Route path="RegisterPage" element={<RegisterPage />} />
          <Route path="Events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
