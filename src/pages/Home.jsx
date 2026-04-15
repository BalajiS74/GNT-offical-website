import { Button } from "react-bootstrap";
import SafeZone from "../components/global/SafeZone";
import Navbar from "../components/Navbar";
import FrontPage from "../components/homecomponents/FrontPage";
import Offering from "../components/homecomponents/Offering";
import RealtimeProject from "../components/homecomponents/RealtimeProject";
import { JobOffered } from "../components/homecomponents/JobOffered";
import { ProjectShowCase } from "../components/homecomponents/ProjectShowCase";
const Home = () => {
  return (
    <SafeZone>
      <FrontPage />
      <Offering />
      <RealtimeProject />
      <JobOffered />
      <ProjectShowCase />
    </SafeZone>
  );
};

export default Home;
