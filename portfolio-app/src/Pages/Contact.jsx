import React from "react"
import { useToast, Box,Text,Grid,GridItem,HStack,Input,Button,Link,Image} from '@chakra-ui/react'

import { useState } from "react"
import emailjs from '@emailjs/browser'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
  import {IoMdCall} from 'react-icons/io'
  import {MdEmail} from 'react-icons/md'

function Contact (){


    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
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
    
    
    
    
    }
    
    
    
    

return(

    <div>
    <Box  ml="-52px" w='1399px' h='800' border="1px solid red">
    <Image  width={'2000px'} height='auto' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80'/>



<section className='contact'>






<Text  color={'pink'} fontSize={{lg:"6xl",md:"4xl",sm:"2xl"}} mt='-900px' ml='550px' pos={'absolute'} >Contact Me</Text>



<Grid templateColumns='repeat(2, 1fr)' gap={6} mt='-400px' ml='20px' pos='absolute'>
<GridItem w='90%' h='500'  >

<Text ml='-230px' fontSize={"20px"} fontFamily="sans-serif" fontWeight={'bold'} color='teal.500'>Get in Touch</Text>

<Text ml='118px' mt="47px" textAlign='justify' fontSize={"15px"} fontWeight={'bold'} color='teal.500'>Got a project? Reach out and let's work together on something exciting. Big or small. Mobile or web.</Text>


<HStack spacing='24px' ml='90px' mt='40px'>
<Box w='40px' h='10' ml='27px'  ><MdEmail size={"30px"} enableBackground="red"  /></Box>
<Box w='200px' h='10'  ><Text fontWeight={'bold'} color='teal.500'>dhirajgarad46@gmail.com</Text></Box>

</HStack>


<HStack spacing='48px' ml='90px' mt='20px'>
<Box w='20px' h='10'  ml='25px'  ><Link href='https://www.linkedin.com/in/dhiraj-garad-b1895521b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZpB7JjoLRqeZ6udHwJMXow%3D%3D' ><FaLinkedin size={"30px"}/></Link></Box>
<Box w='200px' h='10' ml='37px' ><Link ml="-125px" href='https://www.linkedin.com/in/dhiraj-garad-b1895521b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZpB7JjoLRqeZ6udHwJMXow%3D%3D' fontWeight={'bold'} color='teal.500'>Linkedin</Link></Box>

</HStack>






<HStack spacing='48px' ml='90px' mt='20px'>
<Box w='20px' h='10'  ml='25px'  ><Link href='https://github.com/dhiraj19999'><FaGithub  size={'30px'}/></Link></Box>
<Box w='200px' h='10'  ml='40px' ><Link  href='https://github.com/dhiraj19999'  ml="-138px" fontWeight={'bold'} color='teal.500'>Github</Link></Box>

</HStack>





<HStack spacing='48px' ml='90px' mt='20px'>
<Box w='20px' h='10'  ml='25px'  ><Link ><IoMdCall size={"30px"}/></Link></Box>
<Box w='200px' h='10'  ml='40px' ><Text ml="-70px" fontWeight={'bold'} color='teal.500'>+91 8459116231</Text></Box>

</HStack>







</GridItem>




<GridItem w='90%' h='500' >


<Text fontSize={"20px"} fontFamily="sans-serif" fontWeight={'bold'} color='red.500'>Message me</Text>

<Input onChange={(e)=>setName(e.target.value)}  value={name}  focusBorderColor='teal.300' mt='20px'  _placeholder={{ color: 'red.500',margin:"auto" }} borderColor={'pink.400'} placeholder='Name' w={'340px'} />

<Input onChange={(e)=>setEmail(e.target.value)}  value={email}  focusBorderColor='tomato' mt='20px'  _placeholder={{ color: 'red.500',margin:"auto" }} borderColor={'pink.400'} placeholder='Email' w={'340px'} />


<Input focusBorderColor='orange.400' mt='20px'  _placeholder={{ color: 'red.500',margin:"auto" }} borderColor={'pink.400'} placeholder='Subject' w={'340px'} />


<Input onChange={(e)=>setMessage(e.target.value)}  value={message}  focusBorderColor='red.300' mt='20px'  _placeholder={{ color: 'red.500',margin:"auto" }} borderColor={'pink.400'} placeholder='Name' h='90px' w={'340px'} />
<Button  onClick={sendEmail} colorScheme={'purple'} _hover={{backgroundColor:'pink.400'}} display={'block'} ml='220px' mt='20px'>Send Message</Button>
</GridItem>


</Grid>




</section>









</Box>



</div>

)












    
    


    
}


export default Contact