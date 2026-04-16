import React from "react";
import Services from "../components/servicescomponents/Services";
import CourseOffered from "../components/servicescomponents/CourseOffered";
import ServiceCards from "../components/servicescomponents/ServiceCards";
import Courses from "../components/servicescomponents/Courses";
const Service = () => {
  return (
    <div>
      <Services />
      <CourseOffered />
      <Courses />
      <ServiceCards />
    </div>
  );
};

export default Service;
