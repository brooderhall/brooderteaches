import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import CourseSideMenu from "../components/CourseSideMenu.js";
import { CContainer, CContainer2 } from "./PagesElements";
import CourseSections from "../components/CourseSections";
import useFetchCourses from "../components/tutor/hooks/useFetchCourses";
import { fbapp } from "../firebase";
import Spinner from "../components/Spinner/Spinner";
import { Alert,Row,Col } from "react-bootstrap";


const Courses = () => {
  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [last, setLast] = useState('');
  const [ref,setRef] = useState(fbapp.firestore().collection("courses"))

  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

//  const [courseLevel,setCourseLevel] = useState(0);






useEffect(() => {
  async function getCourses() {
    setCourses([]);
    setLoading(true);
    setError(null)
let newref = '';
      if (last){
         newref =  ref.startAfter(last).limit(2);
      }else{
         newref = ref.limit(2);

      }
      const snapshot = await newref.get();

       
      const items = [];

      if (snapshot.empty) {
       
       setError('Sorry, content not found')
          setLoading(false);
        return;
      }
      var lastVisible = snapshot.docs[snapshot.docs.length-1];
      setLast(lastVisible);
      console.log("last", lastVisible);
      snapshot.forEach((doc) => {
        items.push(doc.data());
      
      });
      setCourses(items);
      setLoading(false);
  
  }
  getCourses();
}, [ref]);

// const courses =  useFetchCourses();

  const [filteredCourse, setFilteredCourse] = useState(courses)
  // filter mock data


  const DataFilter= (courseLength,courseLevel) =>{
    

    if((courseLevel !== 0) && (courseLength !== 0)){
      //load course with this specifications
    const filterRef = fbapp.firestore().collection("courses").where("period", "==", courseLength).where("level", "==", courseLevel);

    setRef(filterRef)
    }
    if((courseLevel !== 0) && (courseLength === 0)){
      const filterRef = fbapp.firestore().collection("courses").where("level", "==", courseLevel);


      setRef(filterRef) 
    }
    if((courseLevel === 0) && (courseLength !== 0)){
      const filterRef = fbapp.firestore().collection("courses").where("period", "==", courseLength);
      setRef(filterRef) 
    }
     if (courseLength + courseLevel === 0 ){
     

      setRef(fbapp.firestore().collection("courses")) 
    }
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
        <CourseSideMenu 
        //setCourseLevel={setCourseLevel}
        DataFilter={DataFilter}  
        />
        <CContainer2 className="mx-auto">
        {error && 

        <Row className="my-4">
          <Alert variant="danger"  className="col">
          <Alert.Heading>{error}</Alert.Heading>
          
          </Alert>
        </Row>}
        {loading && <Spinner className="text-center"/>}
          {(!error && !loading) && <CourseSections className="text-start" courses={courses} />}
      
        </CContainer2>
      </CContainer>

      <Footer />
    </>
  );
};

export default Courses;
