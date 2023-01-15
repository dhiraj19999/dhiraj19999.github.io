import GitHubCalendar from 'react-github-calendar';

import React from 'react'
import { Box, VStack, Image, useColorModeValue, Heading } from '@chakra-ui/react';

const Github = () => {
   
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const previousYear =  currentYear-1;
        const currentMonth = new Date().getMonth();
        const shownMonths = 24;
     let x=currentYear+previousYear
      
        return contributions.filter(day => {
            const date = new Date(day.date);
            const monthOfDay = date.getMonth();
        
            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
  
            );
          });
      };



  return (
    <>
        <Box 
          align={'center'} 
          py={10}>
         
       {<GitHubCalendar  transformTotalCount={false}  blockSize={15} blockMargin={5} fontSize={16} bg={useColorModeValue('blue.50', 'blue.400')} username="dhiraj19999">
        
        
  </GitHubCalendar>
  }
        
        </Box>
        
    </>
    
  )
}

export default Github