import React, { useEffect } from "react";
import axios from 'axios';
import { IconButton } from "@chakra-ui/button";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, HStack, Text, Box, Stack } from "@chakra-ui/layout";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'
import { Image, Button } from "@chakra-ui/react";
import { FaEnvelope, FaFile, FaUser } from "react-icons/fa";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import logo from "../assets/logo.png";
import Foot from "../component/Foot";
import Social from "../component/Social";
import Footer from "../component/Footer";
import Popovers from "../component/Popovers";
import { Link } from "react-router-dom";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import Carousel from "react-elastic-carousel";
import Gmail from "../component/Gmail";
import {url} from "../urlLoader";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 }
];


function Realisation() {
    const [data, setData] = React.useState([]);
    const [dataProjet, setDataProjet] = React.useState([]);

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    useEffect(() => {
        axios.get(`${url}/api/auth/profile`)
        .then(response => {
          console.log("Realisation ::", response.data.data);
          setData(response.data.data)
     
      })
      .catch(err => console.log(err));

      axios.get(`${url}/api/projet/getAll`)
        .then(response => {
          console.log("Projet ::", response.data.data);
          setDataProjet(response.data.data)
     
      })
      .catch(err => console.log(err));
}, [])

    return (
        <VStack p={5}>
            <VStack w="100%" boxShadow={isNotSmallerScreen ? "0px 4px 15px 10px rgba(0, 0, 0, 0.25)" : "none"} borderRadius="10px">
                <Flex w="95%">
                    <HStack>
                        <Heading>
                            <Link to="/home" _hover={{ textDecoration: "none" }}>
                                <Image src={logo} alt="Alternate Text" width={70} height={70} />
                            </Link>
                        </Heading>
                        <Spacer></Spacer><Spacer></Spacer><Spacer></Spacer>
                        <HStack display={isNotSmallerScreen ? "flex" : "none"} fontFamily='Raleway' _hover={{ color: "#0080ff", fontFamily: 'Raleway', fontWeight: "bold" }} px={isNotSmallerScreen ? "20" : "0"}>
                            <FaEnvelope /><Gmail/>
                        </HStack></HStack>

                    <Spacer></Spacer>
                    <HStack display={isNotSmallerScreen ? "flex" : "none"} fontFamily='Raleway' _hover={{ color: "#0080ff", fontFamily: 'Raleway', fontWeight: "bold" }}>
                        <FaFile /><Link to="/realisation" display={isNotSmallerScreen ? "flex" : "none"} _hover={{ textDecoration: "none" }}>Mes Réalisations</Link>
                    </HStack>

                    <HStack display={isNotSmallerScreen ? "flex" : "none"} ml={isNotSmallerScreen ? "8" : "4"} fontFamily='Raleway' _hover={{ color: "#0080ff", fontFamily: 'Raleway', fontWeight: "bold" }}>
                        <FaUser /><Link to="/cv" display={isNotSmallerScreen ? "flex" : "none"} _hover={{ textDecoration: "none" }}>CV</Link>
                    </HStack>

                    <HStack>
                        <IconButton m={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>

                        <Box display={isNotSmallerScreen ? "none" : "block"}>
                            <Menu>{({ isOpen }) => (
                                <>
                                    <MenuButton isActive={isOpen}
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<FaBars />}
                                        bg="transparent"
                                        fontSize={30}
                                    >
                                        {isOpen ? 'Close' : 'Open'}
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem icon={<FaEnvelope />} as="a" href="mailto:mercuremekinda@gmail.com" target="_blank" _hover={{ textDecoration: "none" }}>mercuremekinda@gmail.com
                                        </MenuItem>
                                        <MenuItem icon={<FaUser />} as={Link} to="/cv" _hover={{ textDecoration: "none" }}>CV
                                        </MenuItem>
                                    </MenuList>
                                </>
                            )}
                            </Menu></Box> </HStack>
                </Flex>

                <Flex direction={isNotSmallerScreen ? "row" : "column"} justifyContent="space-between" width={'100%'}
                    spacing="200px" p={isNotSmallerScreen ? "4" : "0"} py={isNotSmallerScreen ? "8" : "0"} px={isNotSmallerScreen ? "8" : "0"}
                   >
                    <Box ml={isNotSmallerScreen ? "none" : "2"} w={isNotSmallerScreen ? "70%" : "98%"}>
                        <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreen ? "36px" : "25px"}
                            mt={isNotSmallerScreen ? "8" : "0"}>Mes réalisations</Text>
                        <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreen ? "18px" : "15px"}
                            mt={isNotSmallerScreen ? "4" : "0"}>
                            {data?.desc_realisation}
                            </Text>
                        <Popovers></Popovers>

                    </Box>
                    <Box display={'flex'} flexDirection={'row'} alignItems='center' width={"50%"} justifyContent='center'>
                        <Image mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} display={isNotSmallerScreen ? "flex" : "none"}
                        boxSize="300px" src={data.desc_realisation_image} />
                    </Box>
                    
                </Flex>

                <Box display="flex" flexDirection="column" alignSelf="flex-start" >

                    <Text id="appweb" ml={isNotSmallerScreen ? "none" : "2"} fontFamily='Raleway' fontWeight="medium"
                        py={8} px={isNotSmallerScreen ? "8" : "0"} fontSize={isNotSmallerScreen ? "30px" : "25px"}>Des applications Webs</Text>
                </Box>

                <Carousel breakPoints={breakPoints}>

                {dataProjet.filter(item => item.type === 'web').map((item) =>(
                    <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }} key={item.id_Projet}>
                    
                        <CardHeader>
                            <Heading fontFamily='Raleway' size='lg'> {item.nom}</Heading>
                        </CardHeader>
                        <CardBody justifyContent="space-around" alignItems="center">
                            <Image
                                src={item.image}
                                alt='Green double couch with wooden legs'
                                borderRadius='xl'
                            />
                            <Stack mt='6' alignSelf="center">
                                <Text fontFamily='Raleway'>
                                    {item.description}
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter alignSelf="flex-end">
                            <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                        </CardFooter>
                    
                    </Card>
                    ))}

                </Carousel>


                <Box display="flex" flexDirection="column" alignSelf="flex-start" >

                    <Text id="appmobile" ml={isNotSmallerScreen ? "none" : "2"} fontFamily='Raleway' fontWeight="medium"
                        py={isNotSmallerScreen ? "8" : "0"} px={isNotSmallerScreen ? "8" : "0"} fontSize={isNotSmallerScreen ? "30px" : "25px"}>Des applications Mobiles</Text>
                </Box>

                <Carousel breakPoints={breakPoints}>

                {dataProjet.filter(item => item.type === 'mobile').map((item) =>(
                    <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }} key={item.id_Projet}>
                    
                        <CardHeader>
                            <Heading fontFamily='Raleway' size='lg'> {item.nom}</Heading>
                        </CardHeader>
                        <CardBody justifyContent="space-around" alignItems="center">
                            <Image
                                src={item.image}
                                alt='Green double couch with wooden legs'
                                borderRadius='xl'
                            />
                            <Stack mt='6' alignSelf="center">
                                <Text fontFamily='Raleway'>
                                    {item.description}
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter alignSelf="flex-end">
                            <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                        </CardFooter>
                    
                    </Card>
                    ))}

                </Carousel>

                <Foot></Foot>
                <Social></Social>
                <Footer></Footer>
            </VStack>

        </VStack>
    );
}

export default Realisation;