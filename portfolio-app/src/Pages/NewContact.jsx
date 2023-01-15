
import React from "react"
import { useToast, Box,Text,Grid,GridItem,HStack,Input,Button,Link,Image} from '@chakra-ui/react'
import { SimpleGrid } from "@chakra-ui/react"
import { WrapItem } from "@chakra-ui/react"
  import { Wrap } from "@chakra-ui/react"
  import { Center } from "@chakra-ui/react"
import { useState } from "react"
import emailjs from '@emailjs/browser'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
  import {IoMdCall} from 'react-icons/io'
  import {MdEmail} from 'react-icons/md'
import {Form,Formik} from "formik"
  import styles from '../Componentst/MainPa.module.css'

function  NewContact(){


    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const [sub,setSub]=useState("")
    const[tost,setTost]=useState(false)

    const toast=useToast()
    const form={
    
      from_name:name,
      email_id:email,
      message:message
    
    }
    
    const sendEmail=()=>{
    
      emailjs.send('service_amv7b8j','template_imu5bv7',form,'EzPjmd_YlK35hXceC').then((res)=>{
    
        return res
      }).then((data)=>{
        console.log(JSON.stringify(data))
    
         return toast({
          title: 'Message Sent successfully',
          position: 'top',
          isClosable: true,
          status:'success'
        })
      })
    
    setName('')
    setEmail('')
    setMessage('')
    setSub("")
    
    
    
    }
    
    
    

    return(
     
<Box borderRadius={'10px'} background="#E6E6FA" margin="auto" w={{xl:"800px",lg:"870px",md:"730px",sm:"430px",base:"300px"}} h={{xl:"430px",lg:"430px",md:"430px"}} mt={{lg:"340px",xl:"30px",md:"340px",sm:"700px",base:"2150px"}}   className="profirst4"  >


<Wrap justify='center' >


    <SimpleGrid spacing="30px" columns={{lg:2,xl:2,md:2,sm:1}}  >
        <WrapItem   w={{lg:"450px",md:"450px",base:"310px",sm:"450px",xl:"450px"}} h='640px' ml={{xl:"-20px",lg:"20px",md:"-80px",sm:'40px',base:"10px"}} mt='10px'>
            <Center display={'block'}>


            <GridItem w={{lg:"90%",md:"90%",sm:"70%",xl:"90%"}} h='500'  >

<Text ml={{lg:"-46px",md:"-46px",sm:"30px"}} color="black" fontSize={{lg:"20px",md:"20px",sm:"17px"}} fontFamily="sans-serif" fontWeight={'bold'} >Get in Touch</Text>

<Text ml='118px' mt="47px" textAlign='justify' color="black" fontSize={{lg:"16px",md:"16px",sm:"15px"}}fontWeight={'bold'} >Got a project? Reach out and let's work together on something exciting. Big or small. Mobile or web.</Text>


<HStack spacing='24px' ml='90px' mt='40px'>
<Box w='40px' h='10' ml='27px'  ><MdEmail size={"30px"}  color='black' /></Box>
<Box w='200px' h='10' ><Text fontWeight={'bold'}  ml={{sm:"-18px"}}  color="black">dhirajgarad46@gmail.com</Text></Box>

</HStack>


<HStack spacing='48px' ml='90px' mt='20px'>
<Box w='20px' h='10'  ml='25px'  ><Link href='https://www.linkedin.com/in/dhiraj-garad-b1895521b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZpB7JjoLRqeZ6udHwJMXow%3D%3D' ><FaLinkedin size={"30px"} color='black'/></Link></Box>
<Box w='200px' h='10' ml='37px' ><Text><Link ml="-125px" color="black" href='https://www.linkedin.com/in/dhiraj-garad-b1895521b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZpB7JjoLRqeZ6udHwJMXow%3D%3D' fontWeight={'bold'} >Linkedin</Link></Text></Box>

</HStack>






<HStack spacing='48px' ml='90px' mt='20px'>
<Box w='20px' h='10'  ml='25px'  ><Link href='https://github.com/dhiraj19999'><FaGithub color='black' size={'30px'}/></Link></Box>
<Box w='200px' h='10'  ml='40px' ><Text><Link  href='https://github.com/dhiraj19999' color="black" ml="-138px" fontWeight={'bold'} >Github</Link></Text></Box>

</HStack>





<HStack spacing='48px' ml='90px' mt='20px'>
<Box w='20px' h='10'  ml='25px'  ><Link ><IoMdCall size={"30px"} color='black'/></Link></Box>
<Box w='200px' h='10'  ml='40px' ><Text ml="-70px" fontWeight={'bold'} color="black">+91 8459116231</Text></Box>

</HStack>







</GridItem>



            </Center>
        </WrapItem>


       <WrapItem   >

      <Center>
   <Box w='500px'  h='500px'   ml={{md:"-90px"}}   mt={{lg:"15px",xl:"15px",md:"15px",sm:"-190px",base:"-190px"}}>

   <Text mt='-2px' fontSize={"20px"} fontFamily="sans-serif" fontWeight={'bold'} color='red.500'>Message me</Text>

<Input position={''}   border="2px" display="block" margin="auto" onChange={(e)=>setName(e.target.value)}  value={name}  focusBorderColor='teal.300' mt={{base:"30px",sm:"30px",xl:"23px",lg:"23px",md:"23px"}}  _placeholder={{ color: 'black',margin:"auto",fontWeight:"bold" }} borderColor={'teal.300'} placeholder='Name' w={{lg:"340px",md:"340px",sm:"340px",xl:"340px",base:"250px"}} />

<Input position={''}   border="2px" display="block" margin="auto" onChange={(e)=>setEmail(e.target.value)}  value={email}  focusBorderColor='tomato' mt={{base:"30px",sm:"30px",xl:"23px",lg:"23px",md:"23px"}} _placeholder={{ color: 'black',margin:"auto",fontWeight:"bold" }} borderColor={'teal.300'} placeholder='Email'  w={{lg:"340px",md:"340px",sm:"340px",xl:"340px",base:"250px"}} />


<Input position={''} onChange={(e)=>setSub(e.target.value)}   value={sub} border="2px" display="block" margin="auto"  focusBorderColor='orange.400' mt={{sm:"30px",xl:"23px",lg:"23px",base:"30px",md:"23px"}}  _placeholder={{ color: 'black',margin:"auto",fontWeight:"bold" }} borderColor={'teal.300'} placeholder='Subject'  w={{lg:"340px",md:"340px",sm:"340px",xl:"340px",base:"250px"}}/>


<Input position={''}   border="2px" display="block" margin="auto" onChange={(e)=>setMessage(e.target.value)}  value={message}  focusBorderColor='red.300' mt={{base:"30px",sm:"30px",xl:"23px",lg:"23px",md:"23px"}} _placeholder={{ color:"black",margin:"auto",fontWeight:"bold" }} borderColor={'teal.300'} placeholder='Message' h='90px'  w={{lg:"340px",md:"340px",sm:"340px",xl:"340px",base:"250px"}} />
<Button  onClick={sendEmail} colorScheme={'purple'} _hover={{backgroundColor:'pink.400'}} display={'block'} ml='180px' mt='30px'>Send Message</Button>
   </Box>


      
      </Center>
       

       </WrapItem>
       
       
     
       
        



    </SimpleGrid>
</Wrap>





</Box>

    )
}



export default NewContact