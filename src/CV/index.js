import { IconButton } from "@chakra-ui/button";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, HStack, Text, Divider, Box } from "@chakra-ui/layout";
import { FaSun, FaMoon } from 'react-icons/fa'
import { Image, Button } from "@chakra-ui/react";
import { FaEnvelope, FaFile, FaUser, FaDownload } from "react-icons/fa";
import logo from "../assets/logo.png";
import cv from "../assets/cv.jpeg"
import SocialWork from "../component/SocialWork";
import Foot from "../component/Foot";
import Social from "../component/Social";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { Avatar } from '@chakra-ui/react'



function Cv() {

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

                <SocialWork></SocialWork>

                <Flex w="80%" px={16}>
                <Image
                borderRadius='full'
                boxSize='170px'
                src={cv}
                alt='Mercure Mekinda'
                bg="transparent"
                />

                    <Flex direction="column" px={8} py={4}>

                        <Heading as='h1' size='md' mb={4} fontFamily='Raleway'>NSANGA MEKINDA Emmanuel Mercure</Heading>
                        <Text fontSize='lg' mb={8} fontWeight="semibold" fontFamily='Raleway' fontStyle="italic">Développeur Full Stack</Text><Spacer></Spacer>
                        <Text fontSize='md' mb={4} fontWeight="medium" fontFamily='Raleway' fontStyle="italic" color="#c0c0c0">Je développe des applications web et applications mobiles entièrement sur mesure
                            qui ravissent les clients grâce  à un mélange d'expériences d'ingénierie et de conception frontales.</Text>
                    </Flex>

                </Flex>
                <Spacer></Spacer><Divider w="85%" display="flex" alignSelf="flex-end" mb={8} borderBottom="1px solid #808080"/>

                <Flex w="70%" justify="space-between" py={8}>
                    <Box display="flex" flexDirection="column" gap={10}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontFamily='Raleway' fontWeight="bold" color="#7F7F7F" mb={4}>Experience</Text>
                            <Text fontFamily='Raleway' fontWeight="semibold">Stealth Startup</Text>
                            <Text fontFamily='Raleway' color="#c0c0c0">Product Desion Lead | 2017 - Prosent</Text>
                            <Text fontFamily='Raleway' fontWeight="medium">- Started and scaled design beam to 6 praduct desioners<br />
                                - Greated a web application desian svster<br />
                                - Scaled business to S120m in ARR<br />
                                - Built internal laveling system and career laduer</Text>
                        </Box>

                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontFamily='Raleway' fontWeight="semibold">Apple</Text>
                            <Text fontFamily='Raleway' color="#c0c0c0">Senior Product Designer | 2014 - 2017</Text>
                            <Text fontFamily='Raleway' fontWeight="medium">- Built the first iteration of Apple Pay<br />
                                -Partnered with credit card networks to build infrastructure<br />
                                -Led trie creation ol Apple's paymont products<br />
                                -Drove 383m customers to use Apple Pay</Text>
                        </Box>

                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontFamily='Raleway' fontWeight="semibold">Apple</Text>
                            <Text fontFamily='Raleway' color="#c0c0c0">Senior Product Designer | 2014 - 2017</Text>
                            <Text fontFamily='Raleway' fontWeight="medium">- Built the first iteration of Apple Pay<br />
                                -Partnered with credit card networks to build infrastructure<br />
                                -Led trie creation ol Apple's paymont products<br />
                                -Drove 383m customers to use Apple Pay</Text>
                        </Box>

                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontFamily='Raleway' fontWeight="semibold">Apple</Text>
                            <Text fontFamily='Raleway' color="#c0c0c0">Senior Product Designer | 2014 - 2017</Text>
                            <Text fontFamily='Raleway' fontWeight="medium">- Built the first iteration of Apple Pay<br />
                                -Partnered with credit card networks to build infrastructure<br />
                                -Led trie creation ol Apple's paymont products<br />
                                -Drove 383m customers to use Apple Pay</Text>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" gap={10}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontFamily='Raleway' fontWeight="bold" color="#7F7F7F" mb={4}>Education</Text>
                            <Text fontFamily='Raleway' fontWeight="semibold">Institut Africain d'Informatiques</Text>
                            <Text fontFamily='Raleway' fontWeight="medium" color="#c0c0c0">Licence professionnelle<br />
                                2021-2022</Text>
                        </Box>

                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontFamily='Raleway' fontWeight="bold" color="#7F7F7F" mb={4}>Realisations</Text>
                            <Text fontFamily='Raleway' fontWeight="medium">Team leadership<br/></Text>
                        </Box>

                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontFamily='Raleway' fontWeight="bold" color="#7F7F7F" mb={4}>compétences</Text>
                            <Text fontFamily='Raleway' fontWeight="medium">Team leadership<br/>
                            Rapid prototyping<br/>
                            Systems desian<br/>
                            Prasentation<br/>
                            Written communication</Text>
                        </Box>

                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontFamily='Raleway' fontWeight="bold" color="#7F7F7F" mb={4}>Logiciels et applications</Text>
                            <Text fontFamily='Raleway' fontWeight="medium">
                                Figma<br/>
                                After Effects<br/>
                                Photoshop<br/>
                                Illustrator<br/>
                                HTML<br/>
                                CSS<br/>
                                JavaScript<br/>
                                React JS
                            </Text>
                        </Box>
                    </Box>
                </Flex>

                

                <Button colorScheme='blue' variant='outline' leftIcon={<FaDownload />}
                    _hover={{ bg: "#0080ff", color: "white", transform: "translateY(-10px)" }} borderRadius='full' >
                    <Text fontSize={isNotSmallerScreen ? "20px" : "10px"}>Télécharger mon CV</Text>
                </Button>



                <Foot></Foot>
                <Social></Social>
                <Footer></Footer>
            </VStack>

        </VStack>
    );
}

export default Cv;