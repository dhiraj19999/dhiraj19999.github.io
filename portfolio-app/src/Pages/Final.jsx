import Experi from '../Pages/Experi';
import NewSkills from '../Pages/Newskills';
import Project from '../Pages/Project';
import NewContact from '../Pages/NewContact';
import About from '../Componentst/Anoth';
import Aos from "aos";
import Home from '../Pages/Home';
  import Stat from '../Pages/Stat';
import React from 'react';
import Navbar from '../Component/Navbar';
import { useRef,useEffect } from 'react';
import { Box } from '@chakra-ui/react';

function Final(){
    useEffect(()=>{
        Aos.init({duration: 2000,});
      },[])


    const about = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const contacts = useRef(null);
    const home = useRef(null);
    

    const handleHome = () => {
        // console.log("hello")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    
      const handleAbout = () => {
        window.scrollTo({
          top:about.current.offsetTop,
          behavior: "smooth",
        });
      };
      const handleProjects = () => {
        window.scrollTo({
          top: projects.current.offsetTop,
          behavior: "smooth",
        });
      };
      const handleSkills = () => {
        window.scrollTo({
          top: skills.current.offsetTop,
          behavior: "smooth"
        });
      };
      const handleContacts = () => {
        window.scrollTo({
          top: contacts.current.offsetTop,
          behavior: "smooth",
        });
      };









    
     
    return(

        <>
        
        <Navbar
        handleHome={handleHome}
        handleAbout={handleAbout}
        handleProjects={handleProjects}
        handleContacts={handleContacts}
        handleSkills={handleSkills}


       
      />
        
        <Box p={8}>
        <div div data-aos="fade-up" ref={home}>
          <Home />
        </div>
        <div data-aos="fade-up" ref={about}>
          <About />
        </div>
        <div data-aos="fade-up" >
          <Experi />
        </div>
        <div data-aos="fade-up" ref={projects}>
          <Project/>
        </div>
        <div data-aos="fade-up" >
          <Stat/>
        </div>

        <div data-aos="fade-up" ref={skills}>
          <NewSkills />
        </div >
        
        <div data-aos="fade-up" ref={contacts}>
          <NewContact/>
        </div>
       
      </Box>
        
        
        </>
    )
}


export default Final