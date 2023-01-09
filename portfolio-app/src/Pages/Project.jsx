
 import { Button, WrapItem } from "@chakra-ui/react"
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


 useEffect(()=>{
    const id=setInterval(()=>{
      
       setCount((prevCount)=>prevCount+1)
      
       },2000)
       
       return ()=>{clearInterval(id)}
     
},[])





    return(
        <Box h='900px' mt={{lg:"300px",md:"300px",sm:"300px",base:"300px"}}>
<Wrap spacing='30px' justify='center'>
<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{height:"550px",borderRadius:"6px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={arr[count]}/>
    <Text mt='30px' fontSize={'19px'}>Bewakoof is an e-commerce website for clothes</Text>

    <Text mt='20px' fontSize={'19px'}>Techstack:  HTML | CSS | JavaScript</Text>


    <Center>
        <Button bg='purple.600' w='100px' variant={'solid'}>Live</Button>  
        <Button bg='purple.600' w='100px' variant={'solid'}  _hover={{bg:"red.300"}} ml='30px'>Git</Button>
    </Center>
    
    </Center>
</WrapItem>




</Center>
</WrapItem>





















<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{height:"550px",borderRadius:"6px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={arr[count]}/>
    <Text mt='30px' fontSize={'19px'}>Bewakoof is an e-commerce website for clothes</Text>

    <Text mt='20px' fontSize={'19px'}>Techstack:  HTML | CSS | JavaScript</Text>


    <Center>
        <Button bg='purple.600' w='100px' >Live</Button>  
        <Button bg='purple.600' w='100px' ml='30px'>Git</Button>
    </Center>
    
    </Center>
</WrapItem>




</Center>
</WrapItem>






















<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{height:"550px",borderRadius:"6px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={arr[count]}/>
    <Text mt='30px' fontSize={'19px'}>Bewakoof is an e-commerce website for clothes</Text>

    <Text mt='20px' fontSize={'19px'}>Techstack:  HTML | CSS | JavaScript</Text>


    <Center>
        <Button bg='purple.600' w='100px' >Live</Button>  
        <Button bg='purple.600' w='100px' ml='30px'>Git</Button>
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