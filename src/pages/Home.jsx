import { Button } from "react-bootstrap";
import SafeZone from "../components/global/SafeZone";
import Navbar from "../components/Navbar";
import FrontPage from "../components/homecomponents/FrontPage";
import Offering from "../components/homecomponents/Offering";
import RealtimeProject from "../components/homecomponents/RealtimeProject";
import { JobOffered } from "../components/homecomponents/JobOffered";
import { ProjectShowCase } from "../components/homecomponents/ProjectShowCase";
import Pastworks from "../components/homecomponents/Pastworks";
import Review from "../components/homecomponents/Review";
import MobileProjects from "../components/homecomponents/MobileProjects";
const Home = () => {
  return (
    <SafeZone>
      <FrontPage />
      <Offering />
      <Review />
      <RealtimeProject />
      <JobOffered />
      <ProjectShowCase />
      <MobileProjects />
      <Pastworks />
    </SafeZone>
  );
};

export default Home;
