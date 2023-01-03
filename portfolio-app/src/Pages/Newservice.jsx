
import { Container,HStack,Box,Image,Text,SimpleGrid} from '@chakra-ui/react'

import styles from '../Componentst/MainPa.module.css'
function Newservices(){



    return(
<Container  maxW={'5xl'} >
<Text  color={'#F08080'} fontSize='6xl' mt='-100px'  >My Services</Text>
<SimpleGrid spacing='80px' mt='80px' columns={{lg:"3",md:"2",sm:"1"}} ml='-100px'>
  <Box  ml={{md:"100px",sm:"320px"}}  w={{lg:"300px",sm:"200px",md:"300px",base:"100px"}} h='250px' bg='yellow.200' borderRadius={'10px'} _hover={{background:'pink'}}>
    <Image  src='https://cdn-icons-png.flaticon.com/512/3528/3528221.png' w='90px' mt='20px' ml='105px'/>
    <Text color='teal' mt='20px' fontSize={'24px'} ml='-10px' fontWeight={'bold'} >Web Design</Text>
<Text color='teal' fontSize={'18px'}>Proficient in providing web designs</Text>
  </Box>
 
  <Box w='300px' h='250px' ml={{lg:"60px",sm:"300px",md:"80px"}} bg='red.300' borderRadius={'10px'} _hover={{background:"teal.200"}}>
  <Image  src='https://cdn-icons-png.flaticon.com/512/6062/6062646.png' w='90px' mt='20px' ml='105px'/>
 
 <Text color='black' mt='25px' fontSize={'23px'} ml='-2px'  fontWeight={'bold'} >Backend Development</Text>
 <Text color='black' fontSize={'18px'}>Proficient in Backend Node Js application</Text> 
  </Box>
  
  
  <Box ml={{md:"330px",sm:"300px",lg:"10px"}} w='300px' h='250px' bg='teal' borderRadius={'10px'} _hover={{background:'black'}}>
  <Image  src='https://cdn-icons-png.flaticon.com/512/1157/1157109.png' w='90px' mt='20px' ml='105px'/>
 
 <Text color='#F08080' mt='29px' fontSize={{lg:'23px',sm:"21px",md:"23px"}} ml='-1px'  fontWeight={'bold'} >Frontend Development </Text>
 <Text className={styles.front} color='#F08080' fontSize={{lg:'18px',sm:"15px",md:"18px"}}>Proficient in Frontend React  application</Text> 
  </Box>
</SimpleGrid>




</Container>
    )
}

export default Newservices