import { IconButton } from "@chakra-ui/button";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, HStack, Text, Box, Stack } from "@chakra-ui/layout";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { Image, Button } from "@chakra-ui/react";
import { FaEnvelope, FaFile, FaUser } from "react-icons/fa";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import logo from "../assets/logo.png";
import Foot from "../component/Foot";
import Social from "../component/Social";
import Footer from "../component/Footer";
import Popovers from "../component/Popovers";
import realisation from "../assets/realisation.png";
import { Link } from "react-router-dom";
import realisations from "../assets/realisations.png";
import React from 'react';
import Swiper from 'react-id-swiper';


const CoverflowEffect = () => {
    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            el: '.swiper-pagination'
        }
    }
    return (
        <Swiper {...params}>
            <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }}>
                <CardHeader>
                    <Heading fontFamily='Raleway' size='lg'> Portfolio</Heading>
                </CardHeader>
                <CardBody>
                    <Image
                        src={realisation}
                        alt='Green double couch with wooden legs'
                        borderRadius='xl'
                    />
                    <Stack mt='6' alignSelf="center">
                        <Text fontFamily='Raleway'>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                    </Stack>
                </CardBody>

                <CardFooter alignSelf="flex-end">
                    <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                </CardFooter>

            </Card>

            <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }}>
                <CardHeader>
                    <Heading fontFamily='Raleway' size='lg'> Portfolio</Heading>
                </CardHeader>
                <CardBody>
                    <Image
                        src={realisation}
                        alt='Green double couch with wooden legs'
                        borderRadius='xl'
                    />
                    <Stack mt='6' alignSelf="center">
                        <Text fontFamily='Raleway'>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                    </Stack>
                </CardBody>

                <CardFooter alignSelf="flex-end">
                    <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                </CardFooter>

            </Card>

            <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }}>
                <CardHeader>
                    <Heading fontFamily='Raleway' size='lg'> Portfolio</Heading>
                </CardHeader>
                <CardBody>
                    <Image
                        src={realisation}
                        alt='Green double couch with wooden legs'
                        borderRadius='xl'
                    />
                    <Stack mt='6' alignSelf="center">
                        <Text fontFamily='Raleway'>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                    </Stack>
                </CardBody>

                <CardFooter alignSelf="flex-end">
                    <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                </CardFooter>

            </Card>

            <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }}>
                <CardHeader>
                    <Heading fontFamily='Raleway' size='lg'> Portfolio</Heading>
                </CardHeader>
                <CardBody>
                    <Image
                        src={realisation}
                        alt='Green double couch with wooden legs'
                        borderRadius='xl'
                    />
                    <Stack mt='6' alignSelf="center">
                        <Text fontFamily='Raleway'>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                    </Stack>
                </CardBody>

                <CardFooter alignSelf="flex-end">
                    <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                </CardFooter>

            </Card>

            <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }}>
                <CardHeader>
                    <Heading fontFamily='Raleway' size='lg'> Portfolio</Heading>
                </CardHeader>
                <CardBody>
                    <Image
                        src={realisation}
                        alt='Green double couch with wooden legs'
                        borderRadius='xl'
                    />
                    <Stack mt='6' alignSelf="center">
                        <Text fontFamily='Raleway'>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                    </Stack>
                </CardBody>

                <CardFooter alignSelf="flex-end">
                    <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                </CardFooter>

            </Card>
        </Swiper>
    )
};
export default CoverflowEffect;