import React from 'react'

import { Image } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import './navbar.css'
import { Flex, Spacer } from '@chakra-ui/react'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { GridItem,Grid } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import img1 from '../Images/my.jpg.png'
function Mainpage() {

  function haClick(e){
    e.preventDefault()
    document.querySelector(".about").scrollIntoView({behavior:'smooth'})
 }

function homeClick(e){
  e.preventDefault()
    document.querySelector(".home").scrollIntoView({behavior:'smooth'})
}

  return (
    <Box >



<Box position={'relative'}  >
<section className='home'>
<Box position={'absolute'} >

<Box position={'fixed'}    >
<nav className='navbar'>
<Grid   templateColumns='repeat(2, 1fr)' gap={6} mt='2.5' pos='relative' backgroundColor={'blackAlpha.500'}>
  <GridItem w='2xl' h='10' mb='14' ><Text fontSize={'6xl'}  color='#20b2aa'>Dhiraj Garad</Text></GridItem>
  <GridItem w='4xl' h='10' mt='30'  ><Box>
  <HStack spacing='24px' pos={'relative'}>
    <Box w='140px' h='10'  ><Link color={'pink.200'} fontSize='3xl' href='.home' onClick={homeClick} >Home</Link></Box>
    <Box w='140px' h='10' > <Link href='.about' onClick={haClick} color={'pink.200'} fontSize='3xl'>About</Link></Box>
    <Box w='140px' h='10'  > <Link color={'pink.200'} fontSize='3xl'>Skills</Link></Box>
    <Box w='140px' h='10'  > <Link color={'pink.200'} fontSize='3xl'>Projects</Link></Box>
    <Box w='140px' h='10'  > <Link color={'pink.200'} fontSize='3xl'>Contact</Link></Box>
  </HStack>


  </Box></GridItem>
 
</Grid>
</nav>
</Box>
<Box mt={'300'} ml='0' >




<Text color={'#f7797d'} fontSize='5xl' ml='-20'>  Hello, I am a
 
 
 
 </Text> 

 
 <Text color={'#ffccff'} ml='170' fontSize='6xl'>Full Stack Devoloper</Text>




 <Link textDecoration={'none'} href='https://drive.google.com/u/0/uc?id=1nSeTIswakkmlo2y4GTr3AfwfIdbBEw0i&export=download'>  <Button colorScheme='purple' ml='-60' mt='50' size='lg'  _hover={{bgColor:'pink.400',color:'black'}}><Text fontSize={'2xl'}>Resume</Text></Button></Link> 

</Box>




  
     



























</Box>

<img width={'1700px'} height='10px' src='https://media-exp1.licdn.com/dms/image/C5612AQFunD27FcNzZQ/article-cover_image-shrink_720_1280/0/1591178841033?e=1675296000&v=beta&t=7ttxzT6as5EZgp_V2F4E8-6_YdktQ8kSVMhi_Bl3WP0'/>


</section>

</Box>


{/* ); 

}

{/* about me start here */}

<Box   w='1400' h='800' backgroundSize={'cover'} backgroundAttachment='fixed' backgroundImage={'https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk2MC1uaW5nLTMwLmpwZw.jpg'} >
 
 <section className='about'>
 
 <Text  color={'black'} fontSize='6xl' pt={'100'}  >About Me</Text>




    <div style={{display:'flex'}}>
    
    <div></div>
    
    <div style={{width:'930px',marginLeft:'800px',marginTop:'200px'}}>
    <p style={{  fontSize:'29px',lineHeight:'24px',marginBottom:'40px',textAlign:"left",marginRight:'30px',color:'black',fontWeight:'bold',fontFamily:'sans-serif',height:'2px'}}  >I'm Dhiraj Garad and I'm a <span    style={{ color: '#F08080', fontWeight: 'bold',marginLeft:'10px' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ 'Full-Stack Web Developer','Problem Solver', 'Coder']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span> </p>
        
        <p style={{letterSpacing:'1px',fontStyle:"inherit", fontSize:'21px',marginRight:'140px',marginTop:'0px',textAlign:'justify'}}>
        A Self-motivated aspiring Full-Stack Web  Developer with 1200 plus hours of coding experience,Dedicated to developing robust applications that interact with the Frontend part of web applications Proficient in creating user-friendly and ready-to-use code. Love to work in a team
        </p>
        
        
        
        
        </div>



    </div>









</section>


</Box>






    </Box>
  )
}

export default Mainpage