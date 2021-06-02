import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

// navbar import
import Navbar from "../../Navbar/TutorNav";
import Footer from "../../Footer";

// boostrap imports
import { Container, Row, Col, Button } from "react-bootstrap";

//import image 
import picture from "../../../images/code.jpg";

//import ELement for this page
import {
  ProfileImge,
  TutorLinks,
  TutorName,
  TutorLinkActive,
  TutorSubNavbar,
  TutorSubNavbarLink,
  Circle,
  NewCourseTabHeaders
} from "../dashboard/TutorDashboardElements";

//import Courses Sections Component from courses

  import CourseSections from "../../CourseSections/index"
import { courses } from "../../../mock/mock";

//import Create New Course Processes

import NewCourseProcess from "../NewCourseProcess/NewCourseProcess";

export default function TutorCreateCourse(props) {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // NAVBAR CONTROLS
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);


  // INDICATOR HOOKS

const [indicator, SetIndicator] = useState(1)
const [detailsIndicator, SetDetailsIndicator] = useState(true)
const [lessonsIndicator, SetLessonsIndicator] = useState(false)
const [reviewIndicator, SetReviewIndicator] = useState(false)

const setLevelCheck = (levelKey) =>{
     
  SetLessonsIndicator(false)
  SetDetailsIndicator(false)
  SetReviewIndicator(false)

  SetDetailsIndicator(levelKey > 0 ? true: false )
  SetLessonsIndicator(levelKey > 1 ? true: false )
  SetReviewIndicator(levelKey > 2 ? true: false ) 
  
  
}

const ProcessIndicator =(newindicator)=>{
  
  var data = newindicator;      

      SetIndicator(data)
      setLevelCheck(data);
      
     
    
}




  return (
    <div fluid className="height-full">
      <Navbar
        toggle={toggle}
        navbar={navbar}
        changeBackground={changeBackground}
      />
      <Row className="page-header " >
        <Container className="row mt-5 p-5">
         <Col md={3} className="text-end my-auto hide-on-mobile">
         
            <img  
            width="150"
            height="150"
            src={picture} alt="myimage" 
            className="rounded-circle" />

       
        </Col>
        <Col md={7} className=" text-start my-auto ">
         
          <TutorName>Winston Brown</TutorName>
          <p className="text-muted">
          brownwinston@gmail.com
          </p>
          <hr/>
            <TutorLinks to={"/tutor-courses"}  className="p-2 m-1">Your Courses</TutorLinks>
            <TutorLinks to={"/tutor-create-course"} active className="p-2 m-1">Create New Course</TutorLinks>

            <TutorLinks to={"/tutor-profile"} className="p-2 m-1">Edit Profile</TutorLinks>



        </Col>
       </Container>
      </Row>
      <TutorSubNavbar>
        <Container className="mx-5">
          <Container className="container mx-5 p-4 row">
          <Col>
          <Row>
            <Circle active={detailsIndicator} className="rounded-circle col-2"/>
            <NewCourseTabHeaders className="col my-auto">Course Details</NewCourseTabHeaders>
            </Row></Col>
            <Col>
              <Row>
                <Circle active={lessonsIndicator}  className="rounded-circle col-2"/>
                <NewCourseTabHeaders className="col my-auto">Upload Lessons</NewCourseTabHeaders> 
              </Row>
            </Col>
            <Col>
              <Row>
                <Circle active={reviewIndicator}  className="rounded-circle col-2"/>
                <NewCourseTabHeaders className="col my-auto">Review and Publish</NewCourseTabHeaders>
              </Row>
            </Col>
            
          </Container>
        </Container>
     
      </TutorSubNavbar>
      <Container className="height-half">

        <Row className="mt-4 mb-4">
          <Col md={12} className="mx-auto">
            <NewCourseProcess ProcessIndicator={ProcessIndicator}/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}