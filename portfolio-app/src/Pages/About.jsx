

import { Box,Text,Image } from "@chakra-ui/react"
import { Typewriter } from 'react-simple-typewriter'
import styles from '../Componentst/MainPa.module.css'
function About(){



    return(
        <div>
            <Box textAlign={'center'} align='center' className={styles.about} ml="-52px" maxW={'5xl'} h='800' backgroundSize={'cover'} backgroundAttachment='fixed' backgroundImage={'https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk2MC1uaW5nLTMwLmpwZw.jpg'} >
 
 <section className='about'>
 
 <Text  color={'black'} fontSize={{ base: '3xl', sm: '3xl', md: '3xl',lg:"4xl" }} pt={'100'}  >About  </Text>




    <Box  w='1400px'  h='700px' textAlign={'center'} align='center'>
    
  
    
   
    
    {/*style={{width:'930px',marginLeft:'700px',marginTop:'200px'}}*/}
    <Box w='694px'   ml={{lg:"500px",md:"500px",sm:"260px"}} mt={{lg:"200",sm:"80px"}} textAlign={'center'} align='center' >
    <Text   fontSize={{lg:"22px",md:"12px",sm:"9px"}} lineHeight='24px' marginBottom='28px' textAlign="left" marginRight='100' color='black' fontWeight='bold' fontFamily='sans-serif' height='2'  >मी संदिप गरड आणि मी आहे <span    style={{ color: '#F08080', fontWeight: 'bold',marginLeft:'10px' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ 'डिजिटल निवडणूक प्रचारक ','डिजिटल जाहिरातदार', 'LIC प्रतिनिधी']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            //ahbs
           
          />
        </span> </Text>
        
        <Text textAlign={'justify'}  letterSpacing='1px' fontStyle="inherit"  fontSize={{lg:"18px",md:"12px",sm:"8px"}} marginRight='140px' marginTop={{lg:"0px",md:"-8px",sm:"-10px"}} >
        A Self-motivated aspiring Full-Stack Web  Developer 
        with 1200 plus hours of coding experience,Dedicated to developing robust 
        applications that interact with the Frontend as well as backend part of web applications Proficient 
        in creating user-friendly and ready-to-use code. 
        </Text>
        
        
        
        
        </Box>



   </Box>









</section>


</Box>

        </div>
    )
}


export default About