
import { WrapItem } from "@chakra-ui/react"
import { Wrap } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { Image,Text,Box } from "@chakra-ui/react"
function Experi(){

    return(
        <Box>
             <Text   fontWeight={700} fontSize={{ base: '3xl', sm: '3xl', md: '3xl',lg:"4xl" }}mt='-100px' pb={'90px'}  >My Services</Text>
        <Wrap spacing='30px' justify='center'>
           
  <WrapItem>
    <Center display={'block'} w='300px' h='250px' bg='yellow.200' borderRadius={'10px'} _hover={{background:'pink'}}>
    <Image  src='https://cdn-icons-png.flaticon.com/512/3528/3528221.png' w='90px' mt='20px' ml='105px'/>
    <Text color='teal' mt='20px' fontSize={'24px'} ml='-10px' fontWeight={'bold'} >Web Design</Text>
    <Text color='teal' fontSize={'20px'}>Proficient in providing web designs</Text>
    </Center>
  </WrapItem>
  <WrapItem>
  <Center display={'block'}  w='300px' h='250px'  bg='red.300' borderRadius={'10px'} _hover={{background:"teal.200"}}>
  <Image  src='https://cdn-icons-png.flaticon.com/512/6062/6062646.png' w='90px' mt='20px' ml='105px'/>
 
 <Text color='black' mt='25px' fontSize={'23px'} ml='-2px'  fontWeight={'bold'} >Backend Development</Text>
 <Text color='black' fontSize={'18px'}>Proficient in Backend Node Js application</Text> 
    </Center>
  </WrapItem>
  <WrapItem>
  <Center display={'block'} w='300px' h='250px' bg='teal' borderRadius={'10px'} _hover={{background:'black'}}>
  <Image  src='https://cdn-icons-png.flaticon.com/512/1157/1157109.png' w='90px' mt='20px' ml='105px'/>
 
 <Text color='#F08080' mt='29px' fontSize='23px' ml='-1px'  fontWeight={'bold'} >Frontend Development </Text>
 <Text  color='#F08080' fontSize='18px'>Proficient in Frontend React  application</Text> 
    </Center>
  </WrapItem>
  
</Wrap></Box>
    )
}

export default Experi