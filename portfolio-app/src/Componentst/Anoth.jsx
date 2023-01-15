import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Box,Text,Image } from "@chakra-ui/react"
import { Typewriter } from 'react-simple-typewriter'
import styles from '../Componentst/MainPa.module.css'

import { useEffect, useRef } from 'react';
import {
    Flex,
    Container,
    Heading,
    Stack,
    
    Tooltip,
    Link,
    IconButton, 
    useClipboard,
    HStack
  } from '@chakra-ui/react';

  
  export default function About() {
    const { hasCopied, onCopy } = useClipboard('example@example.com');
    const el = useRef(null);
    
   

    return (
      <section className='about'>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
           ml='10px'
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '3xl', md: '3xl',lg:"4xl" }}
            lineHeight={'110%'}>
            About me
          </Heading>
            <Text color={'red.400'} fontSize={'30px'}>
            I'm Dhiraj Garad and I'm a <span  style={{ color: '#F08080', fontWeight: 'bold',marginLeft:'10px',fontSize:'30px' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ 'Full-Stack Web Developer','Problem Solver', 'Coder']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span> 
            </Text>
          <Text color={'black.800'} maxW={'3xl'}>
          A Self-motivated aspiring Full-Stack Web  Developer 
        with 1200 plus hours of coding experience,Dedicated to developing robust 
        applications that interact with the Frontend as well as backend part of web applications Proficient 
        in creating user-friendly and ready-to-use code. Love to work in a team
          </Text>
        { /* <HStack>
                  <Tooltip
                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                    closeOnClick={false}
                    hasArrow>
                    <IconButton
                      aria-label="email"
                      position={''}
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: 'red.300',
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>
  
                  <Link href="https://github.com/MAKNISH" target={'blank'}>
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      position={''}
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: 'red.300',
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="https://twitter.com/manishnishad18" target={'blank'}>
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      position={''}
                      size="lg"
                      icon={<BsTwitter size="28px" />}
                      _hover={{
                        bg: 'red.300',
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="https://www.linkedin.com/in/manish-nishad/" target={'blank'}>
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      position={''}
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: 'red.300',
                      }}
                      isRound
                    />
                  </Link>
                </HStack>*/}
          <Stack spacing={6} direction={'row'}>
            
          </Stack>
          <Flex w={'full'}>
          
          </Flex>
        </Stack>
      </Container>
      </section>
    );
  }