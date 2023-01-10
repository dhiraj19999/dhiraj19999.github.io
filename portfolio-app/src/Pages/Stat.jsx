
import { Box, Center, Wrap, WrapItem,Image,Text } from "@chakra-ui/react"
function Stat(){

    return(
        <Box mt={{lg:"650px",md:"2000px",sm:"2000px",base:"1900px"}}>

<Wrap  spacing='30px' justify='center'>
<WrapItem>

    <Center display='block'>
  
    <Text fontWeight={'bold'} fontSize='34px'  >  # 📊 GitHub Stats:</Text>

<Image mt='90px' src='https://github-readme-stats.vercel.app/api?username=dhiraj19999&theme=midnight-purple&hide_border=true&include_all_commits=true&count_private=true'/>


<Image mt='15px' src='https://github-readme-streak-stats.herokuapp.com/?user=dhiraj19999&theme=midnight-purple&hide_border=true'/>

<Image mt='15px' src='https://github-readme-stats.vercel.app/api/top-langs/?username=dhiraj19999&theme=midnight-purple&hide_border=true&include_all_commits=true&count_private=true&layout=compact'/>



 
    </Center>
</WrapItem>



</Wrap>



        </Box>
    )
}

export default Stat