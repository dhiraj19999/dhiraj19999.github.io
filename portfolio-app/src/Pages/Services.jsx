



import { Box,Flex,Image,Text,Spacer } from "@chakra-ui/react"


function Services(){


    return(
        <div>
            <Box ml="-52px" w='1399px' h='600' background={'black'}>





<Text  color={'pink.400'} fontSize='6xl' pt={'60px'}  >My Services</Text>


<Flex mt={'100px'} gap='30px'>
    <Box  w='470px' h='60' bg='black' ml='5' borderRadius={'10px'} _hover={{background:'pink'}}>

   <Image  src='https://cdn-icons-png.flaticon.com/512/3528/3528221.png' w='90px' mt='20px' ml='160px'/>
    
<Text color='teal' mt='20px' fontSize={'35px'} ml='-10px' >Web Design</Text>
<Text color='teal' fontSize={'20px'}>Proficient in providing web designs</Text>
    </Box>
    <Spacer />
    <Box  w='470px' h='60' bg='black' ml='5' _hover={{background:'pink'}}  borderRadius={'10px'} >

<Image  src='https://cdn-icons-png.flaticon.com/512/6062/6062646.png' w='90px' mt='20px' ml='160px'/>
 
<Text color='teal' mt='20px' fontSize={'35px'} ml='-10px'>Backend Development</Text>
<Text color='teal' fontSize={'20px'}>Proficient in Backend Node Js application</Text> </Box>
    <Spacer />
    <Box  w='470px' h='60' bg='black' ml='5' _hover={{background:'pink'}}  borderRadius={'10px'} >

<Image  src='https://cdn-icons-png.flaticon.com/512/1157/1157109.png' w='90px' mt='20px' ml='160px'/>
 
<Text  color='teal' mt='20px' fontSize={'35px'} ml='-10px'>Frontend Development </Text>
<Text  color='teal' fontSize={'20px'}>Proficient in Frontend React  application</Text> </Box>
  </Flex>













</Box>


        </div>
    )
}


export default Services