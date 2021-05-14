import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import CourseSideMenu from "../components/CourseSideMenu.js";
import { CContainer, CContainer2 } from "./PagesElements";
import CourseSections from "../components/CourseSections";
import {courses} from "../mock/mock"
const Courses = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [filteredCourse, setFilteredCourse] = useState(courses)
  // filter mock data


  const DataFilter= (Length) =>{
    
      setFilteredCourse( filteredCourse.filter(({period, difficulty}) => {
        return period === Length 
      }))
    
  }

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  // Define an image to give to Pageheader
  // Pass that image to the Pageheader

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        navbar={navbar}
        changeBackground={changeBackground}
      />
      <PageHeader />
      <CContainer>
        <CourseSideMenu setFilteredCourse={setFilteredCourse} DataFilter={DataFilter} />
        <CContainer2>
          <CourseSections courses={filteredCourse} />
        </CContainer2>
      </CContainer>

      <Footer />
    </>
  );
};

export default Courses;
