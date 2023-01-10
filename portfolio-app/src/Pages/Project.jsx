
 import { Button, WrapItem ,Heading} from "@chakra-ui/react"
 import { Wrap } from "@chakra-ui/react"
 import { Center } from "@chakra-ui/react"
 import { Image,Text,Box } from "@chakra-ui/react"
 import styles from '../Componentst/MainPa.module.css'
import men from '../Images/men.png'
import { useState,useEffect } from "react"
import women from '../Images/women.png'
import login from '../Images/Login.png'
import address from '../Images/address.png'
function Project(){
const [count,setCount]=useState(0)
let arr=[men,women,login,address]

if(count==3){
    setCount((prevCount)=>prevCount-3)
   
 }

 let html="https://bzhaoportfolio.netlify.app/static/media/html.2ba4fabc69a89a8f71e6.png"
 let css="https://bzhaoportfolio.netlify.app/static/media/css.69a82c2d9e45c933a9cb.png"
 let js="https://bzhaoportfolio.netlify.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png"

 useEffect(()=>{
    const id=setInterval(()=>{
      
       setCount((prevCount)=>prevCount+1)
      
       },2000)
       
       return ()=>{clearInterval(id)}
     
},[])





    return(
        <Box h='900px' mt={{lg:"200px",md:"100px",sm:"100px",base:"100px"}}>
             <Heading
 mb='100px'
           ml='10px'
            fontWeight={700}
            fontSize={{ base: '1xl', sm: '3xl', md: '3xl',lg:"4xl" }}
            lineHeight={'110%'}>
            My Projects
          </Heading>
<Wrap spacing='30px' justify='center'>
<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{height:"640px",borderRadius:"6px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={arr[count]}/>
   
   <Text fontSize={'28px'} fontWeight='bold' mt='30px' ml='-50px'>Bewakoof Clone</Text>
   

    
<Center>

<Image src={html}  w='40px' mt='20px' ml='-45px' borderRadius={'10px'}/>
<Image src={css}  w='40px' mt='20px' ml='50px' borderRadius={'10px'}/>
<Image src={js}  w='40px' mt='20px' ml='50px' borderRadius={'10px'}/>
</Center>


<Text mt='10px' ml='-40px' fontWeight={'bold'} fontSize='14px' lineHeight={'20px'} width='437px'>Bewakoof is an e-commerce website for clothes,
collaborative project of five members which is
completed in five days
Login,singup and cart functionality are developed
My area of responsibility is to Develope Women's products page
</Text>


<Center>
        <Button bg='purple.600' w='100px' ml='-50px' mt='15px' >Live</Button>  
        <Button bg='purple.600' w='100px' ml='30px' mt='15px'>Git</Button>
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>



















<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{height:"640px",borderRadius:"6px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={arr[count]}/>
   
   <Text fontSize={'28px'} fontWeight='bold' mt='30px' ml='-50px'>Bewakoof Clone</Text>
   

    
<Center>

<Image src={html}  w='40px' mt='20px' ml='-45px' borderRadius={'10px'}/>
<Image src={css}  w='40px' mt='20px' ml='50px' borderRadius={'10px'}/>
<Image src={js}  w='40px' mt='20px' ml='50px' borderRadius={'10px'}/>
</Center>


<Text mt='10px' ml='-40px' fontWeight={'bold'} fontSize='14px' lineHeight={'20px'} width='437px'>Bewakoof is an e-commerce website for clothes,
collaborative project of five members which is
completed in five days
Login,singup and cart functionality are developed
My area of responsibility is to Develope Women's products page
</Text>


<Center>
        <Button bg='purple.600' w='100px' ml='-50px' mt='15px' >Live</Button>  
        <Button bg='purple.600' w='100px' ml='30px' mt='15px'>Git</Button>
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>



























<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{height:"640px",borderRadius:"6px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={arr[count]}/>
   
   <Text fontSize={'28px'} fontWeight='bold' mt='30px' ml='-50px'>Bewakoof Clone</Text>
   

    
<Center>

<Image src={html}  w='40px' mt='20px' ml='-45px' borderRadius={'10px'}/>
<Image src={css}  w='40px' mt='20px' ml='50px' borderRadius={'10px'}/>
<Image src={js}  w='40px' mt='20px' ml='50px' borderRadius={'10px'}/>
</Center>


<Text mt='10px' ml='-40px' fontWeight={'bold'} fontSize='14px' lineHeight={'20px'} width='437px'>Bewakoof is an e-commerce website for clothes,
collaborative project of five members which is
completed in five days
Login,singup and cart functionality are developed
My area of responsibility is to Develope Women's products page
</Text>


<Center>
        <Button bg='purple.600' w='100px' ml='-50px' mt='15px' >Live</Button>  
        <Button bg='purple.600' w='100px' ml='30px' mt='15px'>Git</Button>
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>













<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{borderRadius:"6px"}}  height={{lg:"640px",md:"640px",sm:"640px",base:"600px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={arr[count]}/>
   
   <Text fontSize='28px' fontWeight='bold' mt='30px' ml={{lg:"-50px",base:"-10px", sm:"-50px",md:"-50px"}}>Bewakoof Clone</Text>
   

    
<Center>

<Image src={html}  w='40px' mt='20px' ml={{lg:"-45px",md:"-45px",sm:"-45px",base:"-10px"}} borderRadius={'10px'}/>
<Image src={css}  w='40px' mt='20px' ml='50px' borderRadius={'10px'}/>
<Image src={js}  w='40px' mt='20px' ml='50px' borderRadius={'10px'}/>
</Center>


<Text mt='10px' ml={{lg:"-40px",md:"-40px",sm:"-40px",base:"-16px"}} fontWeight={'bold'} fontSize={{lg:"14px",md:"14px",sm:"14px",base:"12px"}} lineHeight={'20px'} width={{lg:"437px",md:"437px",sm:"437px",base:"300px"}}>Bewakoof is an e-commerce website for clothes,
collaborative project of five members which is
completed in five days
Login,singup and cart functionality are developed
My area of responsibility is to Develope Women's products page
</Text>


<Center>
        <Button bg='purple.600' w='100px' ml={{lg:"-50px",md:"-50px",sm:"-50px",base:"-10px"}} mt='15px' >Live</Button>  
        <Button bg='purple.600' w='100px' ml='30px' mt='15px'>Git</Button>
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>































</Wrap>






































</Box>
    )
}

export default Project