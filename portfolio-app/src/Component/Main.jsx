
import { Box,Grid,GridItem,Text,HStack,Link,Button,SimpleGrid,Image } from '@chakra-ui/react'
import styles from '../Component/MainPages.module.css'

function Main(){


    function haClick(e){
        e.preventDefault()
        document.querySelector(".about").scrollIntoView({behavior:'smooth'})
     }
    
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
    
    

    let boot='https://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png'

    let js="https://ravi-047.github.io/static/media/javascript.1ccd6ef9bb1f9c84ef00.png"

    let html="https://ravi-047.github.io/static/media/html.2ba4fabc69a89a8f71e6.png"
    
    let css="https://ravi-047.github.io/static/media/css.69a82c2d9e45c933a9cb.png"
    
    let react="https://ravi-047.github.io/static/media/react.0cf951a69d8e58f83f9d.png"
    
    let redux="https://ravi-047.github.io/static/media/Redux.b3b939c66aecf7d53967.png"
    
    let next="https://cdn.cdnlogo.com/logos/n/93/next.svg"
    
    let type="https://ravi-047.github.io/static/media/typescript-logo.7c2e5f599fa6ccab4be8a590908ec5bb.svg"
    
    let node="https://img.icons8.com/fluency/512/node-js.png"
    
    let express="data:image/png;base64,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"
    
    let chakra="https://ravi-047.github.io/static/media/chakraUI.78a35cdc58b3849b457c.png"
    
    let mongo="https://ravi-047.github.io/static/media/mongodb.67761c18dd27879104c98bfc4930d459.svg"
    
    let tailwind ="https://ravi-047.github.io/static/media/tailwind.e47ac876b8d4d0bba47a.png"
    
    let github="https://ravi-047.github.io/static/media/github.3b9e32903aa89111875d.png"

    let git='data:image/png;base64,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'

   let mongoos="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAEgCAMAAAAjXV6yAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC91BMVEUAAACqAACAAACAAACAAACLAACJAACIAACAAACAAACGAACKAACGAACSAACZAACMAACJAACKAACKAACJAACJAACHAACIAACJAACJAACIAACIAACIAACIAACIAACJAACIAACJAACHAACLAACHAACEAAD/AACLAACHAACHAACJAACJAACIAACIAACIAACHAACIAACJAACHAACGAACIAACJAACHAACGAACJAACIAACIAACIAACIAACIAACIAACHAACHAACIAACKAACHAACHAACPAACIAACIAACIAACIAACIAACIAACHAACHAACIAACIAACIAACIAACIAACIAACIAACIAACIAACJAACIAACIAACIAACJAACIAACIAACHAACHAACGAACIAACIAACIAACGAACFAACJAACIAACIAACIAACHAACIAACGAACIAACIAACIAACHAACHAACIAACGAACIAACIAACIAACIAACIAACIAACIAACIAACHAACJAACIAACHAACIAACIAACOAACIAACIAACIAACJAACIAACIAACIAACJAACHAACJAACIAACIAACIAACIAACKAACIAACHAACIAACIAACIAACJAACIAACIAACIAACJAACLAACAAACHAACIAACIAACIAACHAACIAACJAACIAACIAACJAACIAACIAACEAACIAACJAACOAACJAACIAACIAACJAACIAACIAACIAACIAACHAACIAACGAACIAACHAACIAACHAACHAACJAACIAACIAACHAACIAACHAACIAACIAACHAACJAACKAACJAACIAACIAACIAACIAACAAACFAACIAACFAACKAACJAACIAACHAACIAACMAACJAACHAACIAACJAACIAACJAACJAACIAACJAACHAACJAACHAACIAACIAACIAACIAACIAACKAACJAACHAACHAACIAACIAACIAACJAACHAACIAACJAACJAACHAACIAACIAACIAACHAACIAACHAACIAAD///9uqZpEAAAA+3RSTlMAAwYICgsNDwwCFRgTBwUfKTJMXWx3iYiKmKWj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"

    let json="https://ravi-047.github.io/static/media/JSON.bc73d93a5b55cf5644df.png"

    let vercel='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAMAAABNO5HnAAAAP1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAgICDn5+eFhYXHx8cQEBAwMDBgYGBAQECgoKBxOXyfAAAACnRSTlMA77eAPphnF93+zAd3FAAAC1RJREFUeNrtndt2hCgQRQVBKUSdcfz/b52H3DodO+mLVB2g6iXve511aoOm7Tr0GUc3DL331oYQgpk+JoRgrfW+H5xzY6fzNGA39N5ekJ1oujVEJljfK/CHEXtrJroN9gj1219j/aC472Hc2zC9PMH2SvvmuMGHXwvikYBP0xTs4JTqD8jWTOcPGYV9UReDzwH5c4wdtEY614cp8xBNFHzTwXbeTI/JxQuwm2XtvJk4GF8oeIOsnTc8Uf4hfi2xHvswSUD+YN3IbnR2Eh871B9mI495IppCP2qYmabath6gML+1tXaGLsaaME/TRDWVNS7mt7sQPypmrr04Kmamri68QArBXLyBuDAVNMWidnYqbEKJ/TH6qcApbysOZipyCuuPssr5CrUrqTWoXNBUTH84UzLnYvpjtFMFgx/qUpdgYaGuI874oS5ZNgoKdZlHlN/8w2NyDqXLxsFTgVG3INNDgUFro8mdOIZaORNUfdRZG3j10U91D/V6SGEaO2o9t1LUzkxNjPQt9TA1M4PsGqR2SAuuRD+1NGJXH2U/sXqGtIx8tKAb10cXCfmo8LIO8jqvwTy/ad6onGsk3S5nXtItc+Yk3TZnPtKtc+YirZx5SCtnHtLKmYe0cmYibZXw+2E8712eb/B+4+ZkJN0r3ctMZ3sSMCjd76gzPd1yivY6006Fg4e0GZVzsZKnYnc4VoWjTPVQ4eBRj9EoUY6FqIuQaSF6pflbpv15Ba03HBw1rQX915xU01rQPDWtBc1T01rQd5F2anaFlIcWB8+lhx697770GLQ4CjiKa3E8QNpqcaCbhxYH0wFRi+PBefLYok+9HzYPp3ccTMeW2jbhPxXJNPQmXP+tZx8ib8ItrtXswxG5CucY/6tFppGLY4kxzpVcLiFvwjTHGONSR6SRA73HGGOcQc3jsZtp6EDHt0GN9CO/VIOtdu+gYwWKh/xG4/bBGVfx+ioCPX+ChlW8uyONfFZZvjjjKl5f/lklXQQadx/eGWnkQO+XnHEV765II79ql+L3KTrSyMqxXoGGVby+bOXYrjnDKt4dkUY+FM4/QMMqXl/yLcfykzOs4pmCA50OAg27D/98qAUc6P2IM6zi2WJfMUjxeFAj7Uo9rKw3QKMqni309L3d4oyqeDSWeViZb4JGVby+yFW43OaMqnimRLdLvwQadR/+sg5xf5Nj/40zquLZ8lZhir8PaKTH4ppj/QM0qOL1pa3C7S/OoIoXSjsVzn+CxlS8G+sQ9lS4/M0ZU/Fu/Is4anOkOwINug9NUc2x38MZU/EOuwO1OVK8byAj7QtqjvVO0IiKR6ac5tju5QypeAfdgdoc892gERXvwDtAm2O5nzOk4plCmiM9EGjIffijO0CbY3+EM6Ti9UU0R4qPDVykicL1DSnkb4GtD4LGUzy6uivFvCHdHuUMqHhXb9JgPluZHwYNqHjfBQ/ynejlcc6Aimfg5S49EWjEfejQK3p/hjOg4g3gFZ3icwMXaQte0euToOEUz2BX9PYsZzjFuyhpxIqenwaNpngXJg1Y0cvznOEUzwNfdKQXAg23DwPwq2D7K5zRFO/zugNvF6b42oBF2sG+fr6+CBpL8T63Idwu3F7lDKZ4FnUXzi+DxlK8ALoLl9c5Yyne+zZE24XphEBj7cP3syHauXA/gzOW4g2ID8BTPGeQIu0RpWM9CTSS4lnAO9LtLM5IimcApWM+DTSQ4tEIJx3LeZyBFI8cGuh0YqCB9iENaDcd+5mcgRSvB7O7FM8dmEh7MLtbTwYNo3gW60ppO5szjOIFLI2eTweNongGSqOX8zmjKB6NnYN5MTplCDTKPqQRSKP3HJxBFI8cDugU8wxEpGnAuY1eM4HGULwB5mC45eKMoXg9zMFwzgYaQfHIo4Be8nGGUDwPcgJPGQONsA/JgoDec3JGUDwQ0CnmHelIEwWMO6U1M2hxxQMBveXmLK94GKDn7KDFFS90lasdiuIZANCJIdDi+5AAQO8cnKUVDwB0ijyztA56ZQItq3jyoDcuzrKKJw96ZgMtqnjioBc+zqKKJw06MQZadB+S8GsdOydnScUj2SN4irwjF2nhu46VGbSc4smC3rg5yyle6ILgm0ozO2gxxRN9wrLwcxZTPEnQSSDQYvvQCr5usEtwllI8wfc6UpSZRQi02CthqxBoGcXrxV5y3KQ4iyie4NuksxhoEcUTez96keMsoXjkhP6HJQkGWmIfioHeJTkLKB6NMv/+lqLssEfaCP1D5yoMml3xgsy/KG/SnNkVz8r80/0sDppb8bzIz0gs8py5Fa+X+DW2BBBo5n0o8ws0OwJnZsVzAj9elSLGcEb67TczmUV6BQHNqXhG4AcGNxTOnIpnBX4yc4YBzad471+eZdWOBYczn+K9/yQ6p3YkoEDz7cP3nzXm1I4diTOb4n18toLvWilFrGGKdGD/mMIKBppJ8Sz3p7I2NM5Mitdzf/BmhgPNonifn3/j2oYLHmcWxfv6YjXPNkyAgWbZh1/fYOc5G+6InBkUjyzvhyNTxJzskb74cCTLNlxBQWdXvMvvVTPclG6onLMrnuH9XPUMCzq34lnWD7AvuJwzKx5dfoA9e0kn4EBn3oeXFZ2/pHdkznkV77Kis5t0itiTMdJkv4HOXNIrOOiMivetonNfd2zonDMq3tdFB8N1xwwPOp/ihe+cs76Bt+BzzqV49P4AnEXwUgGBzrYPv8tdXsHbS+CcS/GumyOj4KVYxuSJtP8BOlt3rIWAzqJ4P5sjW3dspXDOong/myNbd8zFgM6heP4AdJ7uWMrhnEHxjpojT3ekggKdYR8eNUee7thL4ny+4vlD0Bm6I8WyZuFojhz3HWthoE9WvOPmyHDfsZXG+WTFG26APv2u9J9U3OS8IWV9GN7QXD1b6Tif0bYFergJGunT1eVPuM0Z5nOdVUz/C+hR8Zw34y+gdR3mPhXqOuS5T9JIs67CTuJnUhp0OzU8xkCr4XEFuhs10mcEeuw00tKHFY30eWPuCLRGOvthRSN92iq8K9Aa6Zc53xdojTSHcmikmZRDI80ZaI105kPhRaSDAst3y6H30uyB1ntprkBrpHOfVdj+abntw7cqHqfa6UMtvk3I/ZOlzW5C3YdPBto9BVr3Yf5NqPuQaxNqeXBtQj0fshWHlgdXcahMcxWHlgdTcejNNFdxqHlwFYceW5iKQ8sj5x2HOt6jY8ZTQKvj/TVDd9JoTWcvaK1pDrPTmuYsaK3p/AatL4ndMX138uilx2Ge7dmcdSFmX4S6EHk56/XSQXG4LsuoeuQ6Eap68AqHnsUPe8N3nZJmGJuTs0reR5wpj3AoaR6xU9L8nJU0F2clzcVZSXNxbp00H+e2SXNybpk0L+d2SXNzbpU0P+c2SUtw7rqxuceIXoRze3d5vhObnhq6sOs7wRmaIU1DJzqujZVIxnXC04Z8hLETnwbkgywA5wZWouwa/LYSq36JSb6e2yjqMHZAM/pK64M8FOdq68MMHdxUWB8Uxg5xaqsPvNr4rI+qQh1cBzsV7USUQ0rtoUbcghWGGj3OtYTauK6IKTzUuLJxdEtdKmqi4LqSptT+wF+CVfRHSa1xeSYvDDVZ15U5Q1GoQ6mYy6pq049dyTP2QTHrVqwI8xtqo5jZCoQUMw9qSAOh2jBjyh7ZoatzHNJeLPd4UlJZ19kZVw1iiTTMDSxGCvWH+bKtZViT8a5rbPhZt0iZn3W7lL9YZ4dNFPqmKX/sRmvywSYyfhiV8kews8AmMnbQKB/APq9GiCh4hXy7RlxvA72Gm4iCHZzWxR20B2/NE7iJyFivjB/F7XpvgyH6AzkREZlgfa+IXwTuht57a20IgT7GhBCCtd73w+BGfMD/A6Jj47JaabsLAAAAAElFTkSuQmCC'

    let netlify="https://ravi-047.github.io/static/media/netlify.603ef81c872f9df8c343.png"

    let npm="https://ravi-047.github.io/static/media/npm.597d7a2ddf209f34e5d817aed94fb02e.svg"
    return(
        <Box  display={'inline-block'}>






<Box position={'relative'} >
<section className='home'>
<Box position={'absolute'}   >

<Box position={'fixed'}  >
<nav className='navbar'>
<Grid   w='1300px' className={styles.nav} templateColumns='repeat(2, 1fr)' gap={2} mt='2.5' pos='relative' backgroundColor={'blackAlpha.700'}>
  <GridItem w='2xl' h='1' mb='20'  mt='2' ml="-16" ><Text fontSize='5xl' className={styles.fir} color='#20b2aa'>Dhiraj Garad</Text></GridItem>
  <GridItem w='4xl' h='10' mt='30' className={styles.second}  ><Box>
  <HStack spacing='0px'  >
    <Box w='140px' className={styles.sec} h='10' mt='-1'  ><Link className={styles.text}    color={'pink.200'} fontSize='2xl'href='.home'  onClick={homeClick} >Home</Link></Box>
    <Box w='140px' className={styles.sec} h='10'  > <Link href='.about' className={styles.text}  onClick={haClick} color={'pink.200'} fontSize='2xl'>About</Link></Box>
    <Box w='140px' className={styles.sec} h='10'  > <Link  href='.skills' className={styles.text}    onClick={skilClick} color={'pink.200'} fontSize='2xl'>Skills</Link></Box>
    <Box w='140px'className={styles.sec} h='10'  > <Link color={'pink.200'} className={styles.text}  onClick={projectClick} fontSize='2xl'>Projects</Link></Box>
    <Box w='140px'className={styles.sec} h='10'  > <Link color={'pink.200'} className={styles.text}   onClick={contactClick} fontSize='2xl'>Contact</Link></Box>
  </HStack>


  </Box></GridItem>
 
</Grid>
</nav>
</Box>
<Box mt={'300'} ml='0' >




<Text color={'#f7797d'} className={styles.hello} fontSize="5xl" ml="-25px" mt="-28">  Hello, I am a
 
 
 
 </Text> 

 
 <Text color={'#ffccff'} ml='40px' className={styles.full} fontSize="5xl">Full Stack Developer</Text>




 <Link textDecoration={'none'}  href='https://drive.google.com/u/0/uc?id=1nSeTIswakkmlo2y4GTr3AfwfIdbBEw0i&export=download'>  <Button colorScheme='purple' ml="-20" mt="30px"   className={styles.but} size="md"  _hover={{bgColor:'pink.400',color:'black'}}><Text className={styles.resname} fontSize={'2xl'}>Resume</Text></Button></Link> 

</Box>




  
     



























</Box>

<img className={styles.lap}  width={'2000px'} height='10px' src='https://media-exp1.licdn.com/dms/image/C5612AQFunD27FcNzZQ/article-cover_image-shrink_720_1280/0/1591178841033?e=1675296000&v=beta&t=7ttxzT6as5EZgp_V2F4E8-6_YdktQ8kSVMhi_Bl3WP0'/>


</section>

</Box>




  

{/*   skills section */}


<Box  w='1400' h='1200' backgroundColor={'black'} mt='-48px'>


<section  className='skills'>


<Text  color={'white'} fontSize={{lg:"6xl",md:"4xl",sm:"2xl"}} mt='12' >Techinal Skills</Text>


<div className={styles.grid} >
 <Box className={styles.skill} width={"290px" } h='160px' ml='40px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={html} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>HTML</Text>
</Box>
     
 
<Box className={styles.css} width={"290px" } h='160px' ml='20px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={css} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>CSS</Text>
</Box>
     
<Box className={styles.js} width={"290px" } h='160px' ml='4px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={js} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>JavaScript</Text>
</Box>
     

<Box className={styles.react} width={"290px" } h='160px' ml='-10px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={react} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>React</Text>
</Box>




<Box className={styles.tailwind} width={"290px" } h='160px' mt='40px' ml='40px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={tailwind} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Tailwind</Text>
</Box>


<Box className={styles.github} width={"290px" } h='160px' mt='40px' ml='20px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={github} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Github</Text>
</Box>
     
<Box className={styles.chakra} width={"290px" } h='160px' mt='40px' ml='4px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={chakra} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Chakra UI</Text>
</Box>
     

<Box className={styles.git} width={"290px" } h='160px' mt='40px' ml='-10px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={git} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Git</Text></Box>












    <Box className={styles.express} width={"290px" } h='160px' mt='40px' ml='40px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={express} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Express.JS</Text>
</Box>


<Box className={styles.mongo} width={"290px" } h='160px' mt='40px' ml='20px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={mongo} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>MongoDb</Text>
</Box>
     
<Box className={styles.redux} width={"290px" } h='160px' mt='40px' ml='4px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={redux} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Redux</Text>
</Box>
     

<Box className={styles.mongoos} width={"290px" } h='160px' mt='40px' ml='-10px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={mongoos} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Mongoose</Text></Box>














    <Box className={styles.type} width={"290px" } h='160px' mt='40px' ml='40px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={type} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>TypeScript</Text>
</Box>


<Box className={styles.json} width={"290px" } h='160px' mt='40px' ml='20px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={json} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Json</Text>
</Box>
     
<Box className={styles.vercel} width={"290px" } h='160px' mt='40px' ml='4px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={vercel} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Vercel</Text>
</Box>
     

<Box className={styles.npm} width={"290px" } h='160px' mt='40px' ml='-10px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={npm} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Npm</Text></Box>














    <Box className={styles.netlify} width={"290px" } h='160px' mt='40px' ml='40px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={netlify} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Netlify</Text>
</Box>





<Box className={styles.mongo} width={"290px" } h='160px' mt='40px' ml='20px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={node} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Node JS</Text>
</Box>
     
<Box className={styles.vercel} width={"290px" } h='160px' mt='40px' ml='4px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={next} pt='40px'   alt='Dan Abramov'   w='90px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Next JS</Text>
</Box>
     

<Box className={styles.express} width={"290px" } h='160px' mt='40px' ml='-10px' borderRadius={'10px'} boxSizing='border-box'>
    <Image src={boot} pt='40px'   alt='Dan Abramov'   w='110px' ml='100px' mt='-20px'
    objectFit='cover'/>
    <Text color={'white'} mt='5px' fontWeight='bold'>Bootstrap</Text></Box>






</div>


 
 
 
  


</section>







</Box>



   


     
























































        </Box>
    )
}

export default Main