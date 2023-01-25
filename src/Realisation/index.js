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
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 }
];


function Realisation() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

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
                            <FaEnvelope /><Link href="mailto:mercuremekinda@gmail.com" target="_blank"
                                _hover={{ textDecoration: "none" }}>mercuremekinda@gmail.com</Link>
                        </HStack></HStack>

                    <Spacer></Spacer>
                    <HStack fontFamily='Raleway' _hover={{ color: "#0080ff", fontFamily: 'Raleway', fontWeight: "bold" }}>
                        <FaFile /><Link to="/realisation" display={isNotSmallerScreen ? "flex" : "none"} _hover={{ textDecoration: "none" }}>Mes Réalisations</Link>
                    </HStack>

                    <HStack ml={isNotSmallerScreen ? "8" : "4"} fontFamily='Raleway' _hover={{ color: "#0080ff", fontFamily: 'Raleway', fontWeight: "bold" }}>
                        <FaUser /><Link to="/cv" display={isNotSmallerScreen ? "flex" : "none"} _hover={{ textDecoration: "none" }}>CV</Link>
                    </HStack>

                    <IconButton m={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
                </Flex>

                <Flex direction={isNotSmallerScreen ? "row" : "column"}
                    spacing="200px" p={isNotSmallerScreen ? "4" : "0"} py={isNotSmallerScreen ? "8" : "0"} px={isNotSmallerScreen ? "8" : "0"}
                    alignSelf="flex-start">
                    <Box ml={isNotSmallerScreen ? "none" : "2"}>
                        <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreen ? "36px" : "25px"}
                            mt={isNotSmallerScreen ? "8" : "0"}>Mes réalisations</Text>
                        <Text w={isNotSmallerScreen ? "70%" : "98%"} fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreen ? "18px" : "15px"}
                            mt={isNotSmallerScreen ? "4" : "0"}>
                            Siégeant au Cameroun, je développe des applications web et applications mobiles entièrement sur mesure.
                            Je realise également des prestations de maintenance, hébergement et optimisation de référencement (SEO).
                            Découvrez mes projets développés ou maintenus, toujours en étroite collaboration avec des clients.
                        </Text>

                        <Popovers></Popovers>

                    </Box>
                    <Image mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} display={isNotSmallerScreen ? "flex" : "none"}
                        boxSize="300px" src={realisations} />
                </Flex>

                <Box display="flex" flexDirection="column" alignSelf="flex-start" >

                    <Text id="appweb" ml={isNotSmallerScreen ? "none" : "2"} fontFamily='Raleway' fontWeight="medium"
                        py={8} px={isNotSmallerScreen ? "8" : "0"} fontSize={isNotSmallerScreen ? "30px" : "25px"}>Des applications Webs</Text>
                </Box>

                <Carousel breakPoints={breakPoints}>

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

                </Carousel>


                <Box display="flex" flexDirection="column" alignSelf="flex-start" >

                    <Text id="appmobile" ml={isNotSmallerScreen ? "none" : "2"} fontFamily='Raleway' fontWeight="medium"
                        py={isNotSmallerScreen ? "8" : "0"} px={isNotSmallerScreen ? "8" : "0"} fontSize={isNotSmallerScreen ? "30px" : "25px"}>Des applications Mobiles</Text>
                </Box>

                <Carousel breakPoints={breakPoints} >

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

                </Carousel>

                <Foot></Foot>
                <Social></Social>
                <Footer></Footer>
            </VStack>

        </VStack>
    );
}

export default Realisation;