import { HashRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./layout/Layout";

// ✅ Lazy load all pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Career = lazy(() => import("./pages/Career"));
const Events = lazy(() => import("./pages/Events"));

const GetinTouch = lazy(() => import("./components/GetinTouch"));
const ApplyJob = lazy(() => import("./components/ApplyJob"));
const Meet = lazy(() => import("./components/Meet"));
const RegisterPage = lazy(() => import("./components/RegisterPage"));
const NotFound = lazy(() => import("./components/NotFound"));
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="career" element={<Career />} />
          <Route path="service" element={<Service />} />
          <Route path="getintouch" element={<GetinTouch />} />
          <Route path="applyjob" element={<ApplyJob />} />
          <Route path="meet" element={<Meet />} />
          <Route path="registerpage" element={<RegisterPage />} />
          <Route path="events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
