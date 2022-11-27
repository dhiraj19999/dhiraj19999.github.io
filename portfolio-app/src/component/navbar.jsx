

import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Link } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { GridItem,Grid } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
function Navbar() {
 
 function haClick(e){
    e.preventDefault()
    document.querySelector(".about").scrollIntoView({behavior:'smooth'})
 }
 
    return (
    <div >

<Box  >
<Grid templateColumns='repeat(2, 1fr)' gap={6} mt='10' pos='relative' >
  <GridItem w='2xl' h='10'  ><Text fontSize={'6xl'} color='#20b2aa'>Dhiraj Garad</Text></GridItem>
  <GridItem w='4xl' h='10' mt='30'  ><Box>
  <HStack spacing='24px' pos={'relative'}>
    <Box w='140px' h='10'  ><Link color={'pink.200'} fontSize='3xl'  >Home</Link></Box>
    <Box w='140px' h='10' > <Link href='.about' onClick={haClick} color={'pink.200'} fontSize='3xl'>About</Link></Box>
    <Box w='140px' h='10'  > <Link color={'pink.200'} fontSize='3xl'>Skills</Link></Box>
    <Box w='140px' h='10'  > <Link color={'pink.200'} fontSize='3xl'>Projects</Link></Box>
    <Box w='140px' h='10'  > <Link color={'pink.200'} fontSize='3xl'>Contact</Link></Box>
  </HStack>



  </Box></GridItem>
 
</Grid>
</Box>
<Box mt={'200'} ml='0' >


 <Text color={'#f7797d'} fontSize='5xl' ml='-1000'>  Hello, I am a
 
 
 
 </Text> 
 <Text fontSize={'4xl'} ml='-900'><span   style={{ color: '	#ffccff', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ 'Full Stack Devoloper ']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span></Text>     
     <Link textDecoration={'none'} href='https://drive.google.com/u/0/uc?id=1nSeTIswakkmlo2y4GTr3AfwfIdbBEw0i&export=download'>  <Button colorScheme='purple' ml='-1050' mt='50' size='lg'  _hover={{bgColor:'pink.400',color:'black'}}><Text fontSize={'2xl'}>Resume</Text></Button></Link> 
</Box>




{/* about me start here */}

<Box   mt='300' w='1400' h='800' background={'linear-gradient(to right, #dbe6f6, #c5796d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */'}>
 
 <section className='about'>
 
 <Text  color={'black'} fontSize='6xl' pt={'100'}  >About Me</Text>
</section>
</Box>







    </div>
  )
}

export default Navbar