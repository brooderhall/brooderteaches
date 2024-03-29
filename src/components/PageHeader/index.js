import React, {useState, useEffect, useRef} from "react";
import {
  HeaderBg,
  HeaderContainer,
  HeaderContent,
  HeaderH1,
  HeaderP,
} from "./PgHeaderElements";
import {fbapp} from "../../firebase";
 import wave from '../../images/wave.png'
 
const PageHeader = ({ id,courses }) => {
  let isCoursePage = useRef('');
  let bgImg = useRef('');
  // const [courses, setCourses] = useState([]);

      if ((courses!==[] ) && (typeof courses !== 'undefined')) {
        // the variable is defined
           
            bgImg = courses.previewImg;

                  // setCourses(data);                      
        
            // bgImg = (courses.previewImg);

            isCoursePage = (
            <HeaderContent>
              <HeaderH1>{courses.title}</HeaderH1>
              <HeaderP>{courses.subtitle}</HeaderP>
            </HeaderContent>)
          
      } else {

        bgImg = wave;

        isCoursePage = (
          <HeaderContent>
            <HeaderH1>Start Your Journey</HeaderH1>
            <HeaderP>Pick a course</HeaderP>
          </HeaderContent>
        );
      }
        

  
  return (
    <HeaderContainer bgImg={bgImg ? bgImg :''}> 
      <HeaderBg 
      
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        
      }}
      ></HeaderBg>
      {isCoursePage}
    </HeaderContainer>
  );
};

export default PageHeader;
