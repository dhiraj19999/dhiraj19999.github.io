import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
    Text
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  
  import { DownloadIcon } from "@chakra-ui/icons";
  import ColorModeToggle from './ColorModeToggle';
  import Home from '../Pages/Home';
  import Stat from '../Pages/Stat';
  import SmallWithLogoLeft from '../Pages/Footer';
  import Github from '../Pages/Git';
 import Aos from 'aos';

//   import About from '../Pages/About';
import About from '../Componentst/Anoth';
  
  import styles from '../Componentst/MainPa.module.css'
import Experi from '../Pages/Experi';
import NewSkills from '../Pages/Newskills';
import Project from '../Pages/Project';
import NewContact from '../Pages/NewContact';
  const Links = ['Home', 'About', 'Skills', 'Projects', 'Contact','Contact'];
  
  const NavLink = ({children}) => (
    <Link
      fontSize={'15px'}
      fontWeight={600}
      px={3}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('red.300', 'red.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  );
  
  export default function Navbar({handleHome, handleAbout, handleSkills, handleProjects, handleContacts}) {


  function homeClick(e){
    e.preventDefault()
      document.querySelector(".home").scrollIntoView({behavior:'smooth'})
  }
  
  
  function skilClick (e){
    e.preventDefault()
      document.querySelector(".skills").scrollIntoView({behavior:'smooth'})
  }
  
  
  function projectClick (e){
    e.preventDefault()
      document.querySelector(".project").scrollIntoView({behavior:'smooth'})
  }
  
  
  function contactClick (e){
    e.preventDefault()
      document.querySelector(".contact").scrollIntoView({behavior:'smooth'})
  }
  

    
        function haClick(e){
          e.preventDefault()
          document.querySelector(".about").scrollIntoView({behavior:'smooth'})
       }
      
      
    











    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Box bg={useColorModeValue('red.50', 'red.400')} px={4} position={'fixed'} width={'100%'} className={styles.rednav}>
          <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Avatar
                  size={'lg'}
                  src={'https://st3.depositphotos.com/4263287/14721/v/600/depositphotos_147213525-stock-illustration-dg-d-g-pink-purple.jpg'}
                  link={'https://maknish.github.io'}
                  cursor="pointer"
              />
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                </MenuButton>
                <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {/*Links.map((link) => (
                <NavLink  key={link}>{link}</NavLink>
                ))*/}
                <div onClick={homeClick}> <NavLink>Home</NavLink></div>
             <div onClick={haClick}>  <NavLink>About</NavLink></div>
             
             <div onClick={projectClick}> <NavLink>Projects</NavLink></div>
             <div onClick={skilClick}> <NavLink>Skills</NavLink></div>
             <div onClick={contactClick}>    <NavLink>Contacts</NavLink></div>
             
             
<div>
 
<Button
     onClick={()=>{
      window.location.href="https://drive.google.com/u/0/uc?id=1FAQZD0ZtN8JYVDEbV8smXClFaDYp2Muy&export=download"
     
     setTimeout(()=>{
      window.open("https://drive.google.com/file/d/1FAQZD0ZtN8JYVDEbV8smXClFaDYp2Muy/view?usp=sharing",'_blank')
     },3000)
     
    
    
      
    
    }}      
            
            rounded={'full'}
            size='sm'
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              position={''}
              _hover={{ bg: 'red.500' }}>
             
              <DownloadIcon />
              Resume
            </Button>


         
            </div>







              </HStack>
              </Menu>
              <ColorModeToggle />
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {/*Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))*/}


<NavLink><div onClick={homeClick}>Home</div></NavLink>
              <NavLink><div onClick={haClick}>About</div></NavLink>
              
              <NavLink><div onClick={projectClick}>Projects</div></NavLink>
              <NavLink><div onClick={skilClick}>Skills</div></NavLink>
              <NavLink><div onClick={contactClick}>Contacts</div></NavLink>
              <NavLink><a href="https://drive.google.com/u/0/uc?id=1FAQZD0ZtN8JYVDEbV8smXClFaDYp2Muy&export=download">Resume</a></NavLink>

              



              


















              </Stack>
            </Box>
          ) : null}
        </Box>
  
        <Box >
         

<section className='home'>
<Home/>
</section>
<section className='about'>
  
<About/>
</section>
<Experi/>

<section className='project'>
 
<Project/>

</section>
<Stat/>
<Github/>
<section className='skills'>
<NewSkills/>
</section>
<section className='contact'>
<NewContact/>
</section>

<SmallWithLogoLeft/>


       







        </Box>
      </>
    );
  }