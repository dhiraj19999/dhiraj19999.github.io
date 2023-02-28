
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
import news1 from '../Images/news1.png'
import news2 from '../Images/news2.png'
import news3 from '../Images/news3.png'
import news4 from '../Images/news4.png'
import news5 from '../Images/news5.png'
import news6 from '../Images/news6.png'
import tra2 from '../Images/tra2.png'
import tra1 from '../Images/tra1.png'
import tra3 from '../Images/tra3.png'
import tra4 from '../Images/tra4.png'
import tra5 from '../Images/tra5.png'
import tra6 from '../Images/tra6.png'
import sce1 from '../Images/sce1.png'
import sce2 from '../Images/sce2.png'
import sce3 from '../Images/sce3.png'
import sce4 from '../Images/sce4.png'
import sce5 from '../Images/sce5.png'
import sce6 from '../Images/sce6.png'
import Aos from 'aos'
import { SimpleGrid } from "@chakra-ui/react"
function Project(){
const [count,setCount]=useState(0)
const [count2,setCount2]=useState(0)
const [count3,setCount3]=useState(0)
const [count4,setCount4]=useState(0)
let sce=[sce1,sce2,sce3,sce4,sce5,sce6,"jj"]
let arr=[men,women,login,address,'hj']
let news=[news1,news2,news3,news4,news5,news6,'kkk']
let tra=[tra1,tra2,tra3,tra4,tra5,tra6,"jjj"]
if(count==4){
    setCount((prevCount)=>prevCount-4)
   
 }
 if(count2==6){
    setCount2((prevCount2)=>prevCount2-6)
 }

if(count3==6){
    setCount3((prevCount3)=>prevCount3-6)
}

if(count4==6){
    setCount4((prevCount4)=>prevCount4-6) 
}


 let html="https://bzhaoportfolio.netlify.app/static/media/html.2ba4fabc69a89a8f71e6.png"
 let css="https://bzhaoportfolio.netlify.app/static/media/css.69a82c2d9e45c933a9cb.png"
 let js="https://bzhaoportfolio.netlify.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png"
 let react="https://bzhaoportfolio.netlify.app/static/media/react.0cf951a69d8e58f83f9d.png"
    
 //
 
 
 
 let chakra="https://img.icons8.com/fluency-systems-filled/154/chakra-ui.png"

 
 useEffect(()=>{
    Aos.init({duration:4000});
  },[])
 useEffect(()=>{
    const id=setInterval(()=>{
      
       setCount((prevCount)=>prevCount+1)
      
       },2000)
       
       return ()=>{clearInterval(id)}
    },[])


useEffect(()=>{
    const ids=setInterval(()=>{
      
        setCount2((prevCount2)=>prevCount2+1)
       
        },2000)
        
        return ()=>{clearInterval(ids)}
},[])




useEffect(()=>{
    const idss=setInterval(()=>{
      
        setCount4((prevCount4)=>prevCount4+1)
       
        },2000)
        
        return ()=>{clearInterval(idss)}
},[])





useEffect(()=>{

const id3=setInterval(()=>{
      
    setCount3((prevCount3)=>prevCount3+1)
   
    },2000)
    
    return ()=>{clearInterval(id3)}

},[])

useEffect(()=>{
    Aos.init({duration: 2000,});
  },[])




    return(
        <Box h='900px' mt={{lg:"150px",md:"100px",sm:"100px",base:"100px"}} >
            
            <Heading

 mb='100px'
           ml='10px'
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '3xl', md: '3xl',lg:"4xl" }}
            lineHeight={'110%'}>
            My Projects
          </Heading>
           
<Wrap spacing='30px' justify='center'>

<SimpleGrid spacing="30px" columns={{xl:2,lg:2,md:1,sm:1,base:1}}>

<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{borderRadius:"6px"}}  height={{lg:"640px",md:"640px",sm:"640px",base:"600px"}}>






<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={arr[count]}/>
   
   <Text fontSize='28px' fontWeight='bold' mt='30px' ml={{lg:"-50px",base:"-23px", sm:"-50px",md:"-50px"}}>Bewakoof Clone</Text>
   

    
<Center>

<Image src={html}  w='40px' mt='20px' ml={{lg:"-45px",md:"-45px",sm:"-45px",base:"-22px"}} borderRadius={'10px'}/>
<Image src={css}  w='40px' mt='20px' ml='50px' borderRadius={'10px'}/>
<Image src={js}  w='40px' mt='20px' ml='50px' borderRadius={'10px'}/>
</Center>


<Text mt='10px' ml={{lg:"-40px",md:"-40px",sm:"-40px",base:"-16px"}} fontWeight={'bold'} fontSize={{lg:"14px",md:"14px",sm:"14px",base:"12px"}} lineHeight={'20px'} 
width={{lg:"437px",md:"437px",sm:"437px",base:"300px"}}>Bewakoof is an e-commerce website for shopping clothes and various daily uses
Individual project  which is
completed in five days
Login,singup and cart,Men's Product page and Women's product page  functionality are developed

</Text>


<Center>
      <a href='https://gleaming-meerkat-64241b.netlify.app/'>  <Button position={''}   _hover={{bg:"black",color:"pink"}}  bg='purple.600' w='100px' ml={{lg:"-50px",md:"-50px",sm:"-50px",base:"-10px"}} mt='15px' >Live</Button> </a> 
      <a href="https://github.com/dhiraj19999/Bewakoof-Website-Clone"> <Button position={''} _hover={{bg:"black",color:"pink"}}  bg='purple.600' w='100px' ml='30px' mt='15px'>Git</Button></a> 
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>





























<WrapItem   className={styles.profirst1}   w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{borderRadius:"6px"}} height={{lg:"640px",md:"640px",sm:"640px",base:"600px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={news[count2]}/>
   
   <Text fontSize={'28px'} fontWeight='bold' mt='30px' ml={{lg:"-50px",base:"-24px", sm:"-50px",md:"-50px"}}>Deccan Chronicle</Text>
   

    
<Center>

<Image src={html}  w='40px' mt='20px' ml={{lg:"-45px",md:"-45px",sm:"-45px",base:"-15px"}} borderRadius={'10px'}/>
<Image src={css}  w='40px' mt='20px' ml={{lg:"50px",md:"50px",sm:"50",base:"40px"}} borderRadius={'10px'}/>
<Image src={js}  w='40px' mt='20px' ml={{lg:"50px",md:"50px",sm:"50",base:"40px"}} borderRadius={'10px'}/>
<Image w='40px' mt='20px' ml={{lg:"50px",md:"50px",sm:"50",base:"40px"}} src='https://img.icons8.com/external-others-inmotus-design/2x/external-API-vkontakte-others-inmotus-design-2.png'/>
</Center>


<Text mt='10px' ml={{lg:"-40px",md:"-40px",sm:"-40px",base:"-16px"}} fontWeight={'bold'} fontSize={{lg:"14px",md:"14px",sm:"14px",base:"12px"}} lineHeight={'20px'} width={{lg:"437px",md:"437px",sm:"437px",base:"300px"}}>Deccan Chronicle  publishes the largest circulated English newspaper in South India,
collaborative project of five members which is
completed in five days, 
News sections are developed 
My area of responsibility is to Develope Nation and World section
</Text>


<Center>
      <a href='https://drive.google.com/file/d/1Xuj9_-D1HV3kJZ75SexkVlkM_JXGJMC2/view'>  <Button  _hover={{bg:"black",color:"pink"}} position={''} bg='purple.600' w='100px' ml={{lg:"-50px",md:"-50px",sm:"-50px",base:"-10px"}} mt='17px' >Demo Video</Button> </a> 
     <a href='https://github.com/Ravi-047/swank-meeting-7218'>  <Button   _hover={{bg:"black",color:"pink"}} position={''} bg='purple.600' w='100px' ml='30px' mt='17px'>Git</Button></a>
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>

































<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{borderRadius:"6px"}}  height={{lg:"640px",md:"640px",sm:"640px",base:"600px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={tra[count3]}/>
   
   <Text fontSize='28px' fontWeight='bold' mt='30px' ml={{lg:"-50px",base:"-25px", sm:"-50px",md:"-50px"}}>MR.TRAVELER</Text>
   

    
<Center>

<Image src={html}  w='40px' mt='20px' ml={{lg:"-45px",md:"-35px",sm:"-45px",base:"-16px"}} />
<Image src={css}  w='40px' mt='20px' ml={{lg:"30px",md:"30px",sm:"50",base:"10px"}} />
<Image src={js}  w='40px' mt='20px' ml={{lg:"30px",md:"30px",sm:"50",base:"10px"}} borderRadius={'10px'}/>
<Image w='40px' mt='20px' ml={{lg:"30px",md:"30px",sm:"30",base:"10px"}} src='https://img.icons8.com/external-others-inmotus-design/2x/external-API-vkontakte-others-inmotus-design-2.png'/>
<Image  w='40px' mt='20px' ml={{lg:"30px",md:"30px",sm:"30",base:"10px"}} src={react}/>
<Image  w='40px' mt='20px' ml={{lg:"30px",md:"30px",sm:"30",base:"10px"}} src={chakra}/>


</Center>


<Text mt='10px' ml={{lg:"-40px",md:"-40px",sm:"-40px",base:"-16px"}} fontWeight={'bold'} fontSize={{lg:"14px",md:"14px",sm:"14px",base:"12px"}} lineHeight={'20px'} width={{lg:"437px",md:"437px",sm:"437px",base:"300px"}}>
Mr.Traveler is an travel advisory website for hotel
booking, flight booking and reviews of places, 
 Its a individual project which is completed in five days
Login,signup,hotel booking,payment options and add to cart
functionality are developed

</Text>


<Center>
     <a href='https://mr-traveler.vercel.app/'>  <Button   _hover={{bg:"black",color:"pink"}} position={''} bg='purple.600' w='100px' ml={{lg:"-50px",md:"-50px",sm:"-50px",base:"-10px"}} mt='15px' >Live</Button>  </a>
     <a href='https://github.com/dhiraj19999/meek-calculator-9744'>   <Button  _hover={{bg:"black",color:"pink"}} position={''} bg='purple.600' w='100px' ml='30px' mt='15px'>Git</Button></a>
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>




























<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{borderRadius:"6px"}}  height={{lg:"640px",md:"640px",sm:"640px",base:"600px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={sce[count4]}/>
   
   <Text fontSize='28px' fontWeight='bold' mt='30px' ml={{lg:"-50px",base:"-25px", sm:"-50px",md:"-50px"}}>Scheduler</Text>
   

    
<Center>

<Image src={html}  w='40px' mt='20px' ml={{lg:"-45px",md:"-35px",sm:"-45px",base:"-16px"}} />
<Image src={css}  w='40px' mt='20px' ml={{lg:"30px",md:"30px",sm:"50",base:"10px"}} />
<Image src={js}  w='40px' mt='20px' ml={{lg:"30px",md:"30px",sm:"50",base:"10px"}} borderRadius={'10px'}/>
<Image w='40px' mt='20px' ml={{lg:"30px",md:"30px",sm:"30",base:"10px"}} src='https://img.icons8.com/external-others-inmotus-design/2x/external-API-vkontakte-others-inmotus-design-2.png'/>
<Image  w='40px' mt='20px' ml={{lg:"30px",md:"30px",sm:"30",base:"10px"}} src={react}/>
<Image  w='40px' mt='20px' ml={{lg:"30px",md:"30px",sm:"30",base:"10px"}} src={chakra}/>


</Center>


<Text mt='10px' ml={{lg:"-40px",md:"-40px",sm:"-40px",base:"-16px"}} fontWeight={'bold'} fontSize={{lg:"14px",md:"14px",sm:"14px",base:"12px"}} lineHeight={'20px'} width={{lg:"437px",md:"437px",sm:"437px",base:"300px"}}>
Schdeular is a powerful project management system which  help
  to complete projects efficientl.

Price,Login,Admin, Calender system are  developed
 its collaborative project,
completed in five days, 

 area of responsibility is to Develope Contact section 


</Text>


<Center>
<a href="https://schedulermonday.netlify.app/"> <Button   _hover={{bg:"black",color:"pink"}}  position={''} bg='purple.600' w='100px' ml={{lg:"-50px",md:"-50px",sm:"-50px",base:"-10px"}} mt='15px' >Live</Button>  </a> 
       <a  href='https://github.com/dhiraj19999/energized-trick-9718'> <Button  _hover={{bg:"black",color:"pink"}}  position={''} bg='purple.600' w='100px' ml='30px' mt='15px'>Git</Button></a> 
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>















































</SimpleGrid>








</Wrap>






































</Box>
    )
}

export default Project