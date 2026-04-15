import React from "react";
import Whoweare from "../components/aboutcomponents/Whoweare";
import VisionMission from "../components/aboutcomponents/VisionMission";
import { Teammates } from "../components/aboutcomponents/Teammates";
import { OurTeam } from "../components/aboutcomponents/OurTeam";
const about = () => {
  return (
    <div>
      <Whoweare />
      <VisionMission/>
      <Teammates/>
      <OurTeam/>
    </div>
  );
};

export default about;
