
import {
    Box,
    Container,
    HStack,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { BsHeartFill } from "react-icons/bs";
  
  export default function SmallWithLogoLeft() {
    return (
      <Box
        bg={useColorModeValue('#E6E6FA', 'pink.300')}
        color={useColorModeValue("black")}
        w={{xl:"800px",lg:"870px",md:"730px",sm:"430px",base:"300px"}}
        m="auto"
        borderRadius={'10px'}
        >
        <Container
          as={Stack}
          maxW={'2xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center'}}
          align={{ base: 'center', md: 'center' }}>
          <HStack>
          <Text fontWeight={'bold'} color='black'>Made by</Text> 
          <BsHeartFill color='red' />
          <Text fontWeight={'bold'} color='black' > Dhiraj Garad</Text>
          </HStack>
          
        </Container>
      </Box>
    );
  }

  