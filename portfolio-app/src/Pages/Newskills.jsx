
  import { WrapItem } from "@chakra-ui/react"
  import { Wrap } from "@chakra-ui/react"
  import { Center } from "@chakra-ui/react"
  import { Image,Text,Box } from "@chakra-ui/react"
  import { Heading } from "@chakra-ui/react"
  import styles from '../Componentst/MainPa.module.css'
  import { SimpleGrid } from "@chakra-ui/react"
function NewSkills(){
   
   
    let html="https://bzhaoportfolio.netlify.app/static/media/html.2ba4fabc69a89a8f71e6.png"
    let css="https://bzhaoportfolio.netlify.app/static/media/css.69a82c2d9e45c933a9cb.png"
    let js="https://bzhaoportfolio.netlify.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png"
    let react="https://bzhaoportfolio.netlify.app/static/media/react.0cf951a69d8e58f83f9d.png"
    
    //
    
    
    let tailwin="https://cdn.iconscout.com/icon/free/png-128/tailwind-css-5285308-4406745.png"
    let github="https://cdn.iconscout.com/icon/free/png-128/github-1521500-1288242.png"
    let chakra="https://img.icons8.com/fluency-systems-filled/154/chakra-ui.png"
    let git="https://img.icons8.com/fluency-systems-filled/2x/code-fork.png"
    
    
    
    let node="https://img.icons8.com/fluency/512/node-js.png"
    let express="https://img.icons8.com/nolan/512/express-js.png"
    let db="https://cdn.iconscout.com/icon/free/png-128/mongodb-4-1175139.png"
    let mongos="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAEgCAMAAAAjXV6yAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC91BMVEUAAACqAACAAACAAACAAACLAACJAACIAACAAACAAACGAACKAACGAACSAACZAACMAACJAACKAACKAACJAACJAACHAACIAACJAACJAACIAACIAACIAACIAACIAACJAACIAACJAACHAACLAACHAACEAAD/AACLAACHAACHAACJAACJAACIAACIAACIAACHAACIAACJAACHAACGAACIAACJAACHAACGAACJAACIAACIAACIAACIAACIAACIAACHAACHAACIAACKAACHAACHAACPAACIAACIAACIAACIAACIAACIAACHAACHAACIAACIAACIAACIAACIAACIAACIAACIAACIAACJAACIAACIAACIAACJAACIAACIAACHAACHAACGAACIAACIAACIAACGAACFAACJAACIAACIAACIAACHAACIAACGAACIAACIAACIAACHAACHAACIAACGAACIAACIAACIAACIAACIAACIAACIAACIAACHAACJAACIAACHAACIAACIAACOAACIAACIAACIAACJAACIAACIAACIAACJAACHAACJAACIAACIAACIAACIAACKAACIAACHAACIAACIAACIAACJAACIAACIAACIAACJAACLAACAAACHAACIAACIAACIAACHAACIAACJAACIAACIAACJAACIAACIAACEAACIAACJAACOAACJAACIAACIAACJAACIAACIAACIAACIAACHAACIAACGAACIAACHAACIAACHAACHAACJAACIAACIAACHAACIAACHAACIAACIAACHAACJAACKAACJAACIAACIAACIAACIAACAAACFAACIAACFAACKAACJAACIAACHAACIAACMAACJAACHAACIAACJAACIAACJAACJAACIAACJAACHAACJAACHAACIAACIAACIAACIAACIAACKAACJAACHAACHAACIAACIAACIAACJAACHAACIAACJAACJAACHAACIAACIAACIAACHAACIAACHAACIAAD///9uqZpEAAAA+3RSTlMAAwYICgsNDwwCFRgTBwUfKTJMXWx3iYiKmKWj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"
    
    
    
    let next="https://blog.logrocket.com/wp-content/uploads/2021/07/Building-Next-js-shopping-cart-app.png"
    let type="https://cdn.iconscout.com/icon/free/png-128/typescript-1-1175078.png"
    let redux="https://cdn.iconscout.com/icon/free/png-128/redux-3629018-3030243.png"
    let boot="https://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png"
    




   
   
   
   
   
   
   
   
   
   
   
   
   
    return(

        <Box h='900px' mt={{lg:"120px",md:"160px",sm:"160px",base:"100px"}}>
 <Heading
 mb='100px'
           ml='10px'
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '3xl', md: '3xl',lg:"4xl" }}
            lineHeight={'110%'}>
            My Skills
          </Heading>

<Wrap  spacing='60px' justify='center' >

<SimpleGrid columns={{lg:3,md:3,sm:2,base:1,xl:4}} spacing='20px'>

<WrapItem   className={styles.html} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}    style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={html}  w='90px' mt='20px'ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='7px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>HTML</Text>
</Center>




</WrapItem>







<WrapItem   className={styles.html} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={css}  w='90px' mt='20px' ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='7px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>CSS</Text>
</Center>




</WrapItem>






<WrapItem   className={styles.html} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px"}}   style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={js}  w='90px' mt='20px' ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='7px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>JavaScript</Text>
</Center>




</WrapItem>






<WrapItem   className={styles.html}  width={{lg:"240px",md:"240px",xl:"240px",sm:"220px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={react}  w='90px' mt='20px' ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='7px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>React</Text>
</Center>




</WrapItem>

















<WrapItem   className={styles.css} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={tailwin}  w='90px' mt='20px' ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='2px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>TawilWind</Text>
</Center>




</WrapItem>







<WrapItem   className={styles.css} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={github}  w='90px' mt='20px' ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='7px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>Github</Text>
</Center>




</WrapItem>






<WrapItem   className={styles.css} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={chakra}  w='90px' mt='20px' ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='7px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>Chakra UI</Text>
</Center>




</WrapItem>






<WrapItem   className={styles.css} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={git}  w='90px' mt='20px' ml={{xl:"100px",lg:"100px",md:"100px",sm:"84px",base:"105px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='7px' ml={{base:"65px",xl:"64px",lg:"64px",md:"64px",sm:"45px"}}>Git</Text>
</Center>




</WrapItem>


















<WrapItem   className={styles.js} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={node}  w='90px' mt='20px' ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='6px' ml={{base:"88px",xl:"80px",lg:"80px",md:"80px",sm:"70px"}}>Node JS</Text>
</Center>




</WrapItem>







<WrapItem   className={styles.js} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={db}  w='90px' mt='20px' ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='7px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>Mongo DB</Text>
</Center>




</WrapItem>






<WrapItem   className={styles.js} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={express}  w='90px' mt='20px'ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='7px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>Express JS</Text>
</Center>




</WrapItem>






<WrapItem   className={styles.js} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={mongos}  w='90px' mt='20px' ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='7px'ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>Mongoos</Text>
</Center>




</WrapItem>

























<WrapItem   className={styles.react} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={type}  w='90px' mt='20px' ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='6px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>TypeScript</Text>
</Center>




</WrapItem>







<WrapItem   className={styles.react} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={next}  w='90px' mt='45px'  ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='14px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>Next JS</Text>
</Center>




</WrapItem>






<WrapItem   className={styles.react} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={redux}  w='90px' mt='20px' ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='7px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>Redux</Text>
</Center>




</WrapItem>






<WrapItem   className={styles.react} width={{lg:"240px",md:"240px",xl:"240px",sm:"220px",base:"260px"}}  style={{height:"160px",borderRadius:"6px"}}>

<Center display={'block'} >

<Image src={boot}  w='90px' mt='35px' ml={{xl:"80px",lg:"80px",md:"80px",sm:"65px",base:"85px"}}/>
<Text color={'black'} fontWeight='bold' fontSize={'18px'} mt='7px' ml={{base:"88px",xl:"85px",lg:"85px",md:"85px",sm:"74px"}}>BootStrap</Text>
</Center>




</WrapItem>






















</SimpleGrid>





</Wrap>

             


        </Box>
      


    )
}


export default NewSkills