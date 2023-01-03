

import { Box,Grid,GridItem,Text,HStack,Link,Button,Image } from '@chakra-ui/react'
import styles from '../Componentst/MainPa.module.css'


function Skills(){


    let html="https://ravi-047.github.io/static/media/html.2ba4fabc69a89a8f71e6.png"
    let css="https://ravi-047.github.io/static/media/css.69a82c2d9e45c933a9cb.png"
    let js="https://ravi-047.github.io/static/media/javascript.1ccd6ef9bb1f9c84ef00.png"
    let react="https://ravi-047.github.io/static/media/react.0cf951a69d8e58f83f9d.png"
    
    //
    
    
    let tailwin="https://ravi-047.github.io/static/media/tailwind.e47ac876b8d4d0bba47a.png"
    let github="https://ravi-047.github.io/static/media/github.3b9e32903aa89111875d.png"
    let chakra="https://ravi-047.github.io/static/media/chakraUI.78a35cdc58b3849b457c.png"
    let git="data:image/png;base64,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"
    
    
    
    let node="https://img.icons8.com/fluency/512/node-js.png"
    let express="https://img.icons8.com/nolan/512/express-js.png"
    let db="https://ravi-047.github.io/static/media/mongodb.67761c18dd27879104c98bfc4930d459.svg"
    let mongos="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAEgCAMAAAAjXV6yAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC91BMVEUAAACqAACAAACAAACAAACLAACJAACIAACAAACAAACGAACKAACGAACSAACZAACMAACJAACKAACKAACJAACJAACHAACIAACJAACJAACIAACIAACIAACIAACIAACJAACIAACJAACHAACLAACHAACEAAD/AACLAACHAACHAACJAACJAACIAACIAACIAACHAACIAACJAACHAACGAACIAACJAACHAACGAACJAACIAACIAACIAACIAACIAACIAACHAACHAACIAACKAACHAACHAACPAACIAACIAACIAACIAACIAACIAACHAACHAACIAACIAACIAACIAACIAACIAACIAACIAACIAACJAACIAACIAACIAACJAACIAACIAACHAACHAACGAACIAACIAACIAACGAACFAACJAACIAACIAACIAACHAACIAACGAACIAACIAACIAACHAACHAACIAACGAACIAACIAACIAACIAACIAACIAACIAACIAACHAACJAACIAACHAACIAACIAACOAACIAACIAACIAACJAACIAACIAACIAACJAACHAACJAACIAACIAACIAACIAACKAACIAACHAACIAACIAACIAACJAACIAACIAACIAACJAACLAACAAACHAACIAACIAACIAACHAACIAACJAACIAACIAACJAACIAACIAACEAACIAACJAACOAACJAACIAACIAACJAACIAACIAACIAACIAACHAACIAACGAACIAACHAACIAACHAACHAACJAACIAACIAACHAACIAACHAACIAACIAACHAACJAACKAACJAACIAACIAACIAACIAACAAACFAACIAACFAACKAACJAACIAACHAACIAACMAACJAACHAACIAACJAACIAACJAACJAACIAACJAACHAACJAACHAACIAACIAACIAACIAACIAACKAACJAACHAACHAACIAACIAACIAACJAACHAACIAACJAACJAACHAACIAACIAACIAACHAACIAACHAACIAAD///9uqZpEAAAA+3RSTlMAAwYICgsNDwwCFRgTBwUfKTJMXWx3iYiKmKWj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"
    
    
    
    let next="https://blog.logrocket.com/wp-content/uploads/2021/07/Building-Next-js-shopping-cart-app.png"
    let type="https://ravi-047.github.io/static/media/typescript-logo.7c2e5f599fa6ccab4be8a590908ec5bb.svg"
    let redux="https://ravi-047.github.io/static/media/Redux.b3b939c66aecf7d53967.png"
    let boot="https://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png"
    













    return(
        <div>


<Box maxWidth maxW={'5xl'} >

<Text  color={'white'} fontSize={"6xl"} pt='20px'>My Skills</Text>


<div  className={styles.gr} style={{marginTop:"20px"}}>

<div  className={styles.html} style={{backgroundColor:"black",width:"270px",height:"160px",borderRadius:"6px"}}>
<Image src={html}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>HTML</Text>
</div>
<div className={styles.css} style={{backgroundColor:"black",width:"270px",height:"160px",borderRadius:"6px"}}>
<Image src={css}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>CSS</Text>

</div>
  <div className={styles.js}style={{ backgroundColor: "black", width:"270px",height:"160px",borderRadius:"6px"}}>
  <Image src={js}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>JavaScript</Text>
  </div>
<div className={styles.react} style={{backgroundColor:"black",width:"270px",height:"160px",borderRadius:"6px"}}>
<Image src={react}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>React</Text>
</div>







<div className={styles.tail} style={{backgroundColor:"black",width:"270px",height:"160px",borderRadius:"6px"}}>
<Image src={tailwin}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>Tailwind</Text>
</div>
<div className={styles.github} style={{backgroundColor:"black",width:"270px",height:"160px",borderRadius:"6px"}}>
<Image src={github}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>Github</Text>

</div>
  <div className={styles.git}style={{ backgroundColor: "black", width:"270px",height:"160px",borderRadius:"6px"}}>
  <Image src={git}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>Git</Text>
  </div>
<div className={styles.chakra} style={{backgroundColor:"black",width:"270px",height:"160px",borderRadius:"6px"}}>
<Image src={chakra}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>Chakra-UI</Text>
</div>








<div className={styles.node} style={{backgroundColor:"black",width:"270px",height:"160px",borderRadius:"6px"}}>
<Image src={node}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>Node Js</Text>
</div>
<div className={styles.express} style={{backgroundColor:"black",width:"270px",height:"160px",borderRadius:"6px"}}>
<Image src={express}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>Express Js</Text>

</div>
  <div className={styles.db}style={{ backgroundColor: "black", width:"270px",height:"160px",borderRadius:"6px"}}>
  <Image src={db}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>Mongo-DB</Text>
  </div>
<div className={styles.mongos} style={{backgroundColor:"black",width:"270px",height:"160px",borderRadius:"6px"}}>
<Image src={mongos}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>Mongoose</Text>
</div>







<div className={styles.github} style={{backgroundColor:"black",width:"270px",height:"160px",borderRadius:"6px"}}>
<Image src={next}  w='100px' mt='43px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>Next Js</Text>
</div>
<div className={styles.react} style={{backgroundColor:"black",width:"270px",height:"160px",borderRadius:"6px"}}>
<Image src={type}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>Express Js</Text>

</div>
  <div className={styles.express}style={{ backgroundColor: "black", width:"270px",height:"160px",borderRadius:"6px"}}>
  <Image src={redux}  w='90px' mt='20px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>Mongo-DB</Text>
  </div>
<div className={styles.express} style={{backgroundColor:"black",width:"270px",height:"160px",borderRadius:"6px"}}>
<Image src={boot}  w='105px' mt='18px' ml='90px'/>
<Text color={'white'} fontWeight='bold' fontSize={'18px'} mt='7px'>Mongoose</Text>
</div>






</div>


</Box>



 
 
 


        </div>
    )
}


export default Skills