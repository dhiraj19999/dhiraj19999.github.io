import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    // createIcon,
    // IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { AspectRatio } from '@chakra-ui/react'
  import styles from '../Componentst/MainPa.module.css'
  import '../App.css'
 import img1 from '../Images/profile.png'
  import { DownloadIcon } from "@chakra-ui/icons";
  
  export default function Home() {
    return (

     


      <Container maxW={'7xl'}  className={styles.home}>
        <Stack
        
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }} >
            <Heading
           
           //lineHeight={1.1}
              fontWeight={1600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
              marginBottom={"10px"}
              color={"#FF1493"}
              fontSize={{ base: '3xl', sm: '3xl', md: '3xl',lg:"5xl" }}>
              आपल्या सर्वांचे आमच्या,
                </Text>  
              <Text
              
             color={"#20B2AA"}
                as={'span'}
                // position={'relative'}
                paddingBottom={"10px"}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                //   position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                 
                }}>
               साक्षीविजय संकल्प 
              </Text>
              <br />
              <Text as={'span'} color={'red.400'} fontSize={{ base: '25px', sm: '4xl', md: '3xl',lg:"4xl",xl:"5xl"}}>
              या वेबसाइटवर हार्दिक स्वागत.
              </Text>
            </Heading>
            <Text
            
            color={'#DC143C'}
           fontSize={"xl"}
            >
           
            
            आपल्‍या निवडणूकीतील  प्रचार करण्यासाठी आणि आपल्‍या निवडणूकीतील यशासाठी आम्‍ही घेउन आलो आहोत डिजिटल निवडणूक
            प्रचार तर चला आता, आपला पूर्ण निवडणूक प्रचार सोपवा आमच्‍यावर
            
            </Text>
            <Stack 
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
             {/* <Button
              
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'red.400'}
                position={''}
                _hover={{ bg: 'red.500' }}>
                <a href="https://drive.google.com/u/0/uc?id=1nSeTIswakkmlo2y4GTr3AfwfIdbBEw0i&export=download">Resume</a>
                <DownloadIcon />
            </Button>*/}




























            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'160%'}
              h={'160%'}
              position={'absolute'}
              top={'-40%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('red.50', 'red.400')}
            />
            <Box
              zIndex={'1'}//-1
              position={'relative'}
              height={'450px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'350px'}
              overflow={'hidden'}
            
              >
              <IconButton
                aria-label={'Play Button'}
                variant={'ghost'}
                _hover={{ bg: 'transparent' }}
                size={'lg'}
                color={'white'}
                position={'absolute'}
                // z-index={'-1'}
                left={'50%'}
                top={'50%'}
                transform={'translateX(-50%) translateY(-50%)'}
              />
             { /*<Image
                // position={'ralative'}
              
                alt={'Hero Image'}
                
                align={'center'}
                w={'100%'}
                h={'160%'}
                mt='-40px'
                
              />
          */}






  <iframe
    title='"'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
   
    style={{width:"100%",height:"100%",position:"absolute",display:"block",zIndex:"2000000000"}}
  /> 








            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export const Blob = (props) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };