import { IconButton } from "@chakra-ui/button";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, HStack, Text, Box } from "@chakra-ui/layout";
import { FaSun, FaMoon } from 'react-icons/fa'
import { Link, Image, Button } from "@chakra-ui/react";
import { FaEnvelope, FaFile, FaUser, FaDownload } from "react-icons/fa";
import logo from "../assets/logo.png";
import SocialWork from "../component/SocialWork";
import Foot from "../component/Foot";
import Social from "../component/Social";
import Footer from "../component/Footer";


function Cv() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <VStack p={5}>
            <VStack w="100%" boxShadow="0px 4px 15px 10px rgba(0, 0, 0, 0.25)" borderRadius="10px">
                <Flex w="95%">
                    <HStack>
                        <Heading size="md"><Image src={logo} alt="Alternate Text" width={50} height={50} /></Heading>
                        <Spacer></Spacer><Spacer></Spacer><Spacer></Spacer>
                        <HStack _hover={{ color: "#0080ff", fontWeight: "bold" }} px={isNotSmallerScreen ? "20" : "0"}>
                            <FaEnvelope /><Link display={isNotSmallerScreen ? "flex" : "none"} fontWeight="semibold" href="mailto:mercuremekinda@gmail.com" target="_blank"
                                _hover={{ textDecoration: "none" }}>mercuremekinda@gmail.com</Link>
                        </HStack></HStack>

                    <Spacer></Spacer>
                    <HStack _hover={{ color: "#0080ff", fontWeight: "bold" }}>
                        <FaFile /><Link display={isNotSmallerScreen ? "flex" : "none"} fontWeight="semibold" _hover={{ textDecoration: "none" }}>Mes Réalisations</Link>
                    </HStack>

                    <HStack ml={8} _hover={{ color: "#0080ff", fontWeight: "bold" }}>
                        <FaUser /><Link display={isNotSmallerScreen ? "flex" : "none"} fontWeight="semibold" _hover={{ textDecoration: "none" }}>CV</Link>
                    </HStack>

                    <IconButton m={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
                </Flex>

                <SocialWork></SocialWork>

                <Box display="flex" flexDirection="column" px={isNotSmallerScreen ? 2 : 0} gap={4} alignSelf={isNotSmallerScreen ? "flex-start" : "center"}>

                    <Text ml={isNotSmallerScreen ? "32" : "2"} fontFamily='Raleway' fontWeight="bold"
                        px={isNotSmallerScreen ? "12" : "0"} fontSize={isNotSmallerScreen ? "30px" : "18px"}>Les Technologies que j'utilises</Text>



                    <Flex direction={isNotSmallerScreen ? "row" : "column"} wrap="wrap" justifyContent="space-between" gap={12}
                        p={isNotSmallerScreen ? "32" : "0"} py={isNotSmallerScreen ? "8" : "0"} align="center" position={isNotSmallerScreen ? "relative" : "relative"}
                        alignSelf={isNotSmallerScreen ? "flex-end" : "center"} ml={isNotSmallerScreen ? "10" : 0}>

                        <Box w={isNotSmallerScreen ? "1000px" : "95%"} borderWidth={2} borderStyle="0 solid #e2e8f0" boxSizing="border-box">
                            <Text mt={isNotSmallerScreen ? "8" : "6"} fontFamily='Raleway' fontWeight="medium" fontStyle="italic"
                                px={isNotSmallerScreen ? "12" : "4"} fontSize={isNotSmallerScreen ? "15px" : "16px"}>Ce sont, mais sans s'y limiter, les technologies que j'utilise pour créer des applications côté client</Text>
                            <Box display="flex" mt={isNotSmallerScreen ? "8" : "6"} px={isNotSmallerScreen ? "12" : "4"}
                                mb={isNotSmallerScreen ? "8" : "6"} flexWrap="wrap" gap={8}>
                                <Image src="https://res.cloudinary.com/dwa1jtluu/image/upload/v1653464815/kenjimmy.me/html_sx3o4c.png" w="48px" h="48px" />
                            </Box>
                        </Box>



                        <Box w={isNotSmallerScreen ? "1000px" : "95%"} borderWidth={2} borderStyle="0 solid #e2e8f0" boxSizing="border-box">
                            <Text mt={isNotSmallerScreen ? "8" : "6"} fontFamily='Raleway' fontWeight="medium" fontStyle="italic"
                                px={isNotSmallerScreen ? "12" : "4"} fontSize={isNotSmallerScreen ? "15px" : "16px"}>Ce sont, mais sans s'y limiter, les technologies que j'utilise pour créer des applications backend rapides et évolutives</Text>
                            <Box display="flex" mt={isNotSmallerScreen ? "8" : "6"} px={isNotSmallerScreen ? "12" : "4"}
                                mb={isNotSmallerScreen ? "8" : "6"} flexWrap="wrap" gap={8}>
                                <Image src="https://res.cloudinary.com/dwa1jtluu/image/upload/v1653464815/kenjimmy.me/html_sx3o4c.png" w="48px" h="48px" />
                            </Box>
                        </Box>



                        <Box w={isNotSmallerScreen ? "1000px" : "95%"} borderWidth={2} borderStyle="0 solid #e2e8f0" boxSizing="border-box">
                            <Text mt={isNotSmallerScreen ? "8" : "6"} fontFamily='Raleway' fontWeight="medium" fontStyle="italic"
                                px={isNotSmallerScreen ? "12" : "4"} fontSize={isNotSmallerScreen ? "15px" : "16px"}>D'autres... et plus encore !</Text>
                            <Box display="flex" mt={isNotSmallerScreen ? "8" : "6"} px={isNotSmallerScreen ? "12" : "4"}
                                mb={isNotSmallerScreen ? "8" : "6"} flexWrap="wrap" gap={8}>
                                <Image src="https://res.cloudinary.com/dwa1jtluu/image/upload/v1653464815/kenjimmy.me/html_sx3o4c.png" w="48px" h="48px" />
                            </Box>
                        </Box>



                        <Box w={isNotSmallerScreen ? "500px" : "95%"} h="200px" boxShadow="8px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="10px">
                            <Text ml={isNotSmallerScreen ? "5" : "2"} mt={isNotSmallerScreen ? "10" : "12"} fontFamily='Raleway' fontWeight="medium"
                                fontSize={isNotSmallerScreen ? "25px" : "25px"}>Expérience</Text>

                            <Text ml={isNotSmallerScreen ? "5" : "2"} mt={isNotSmallerScreen ? "10" : "10"} fontFamily='Raleway' fontWeight="medium"
                                fontSize={isNotSmallerScreen ? "20px" : "20px"}>Travailler à distance</Text>

                            <Text ml={isNotSmallerScreen ? "5" : "2"} mt={2} fontFamily='Raleway' fontWeight="semibold"
                            fontStyle="italic"    fontSize={isNotSmallerScreen ? "16px" : "16px"} opacity={0.5}>Développeur full stack</Text>
                        </Box>

                        <Flex p={isNotSmallerScreen ? "32" : "0"} py={isNotSmallerScreen ? "8" : "0"}
                        alignSelf="flex-start" ml={isNotSmallerScreen ? -20 : 10} mb={10}>

                        <Button colorScheme='blue' variant='outline' leftIcon={<FaDownload />}
                            _hover={{ bg: "#0080ff", color: "white", transform: "translateY(-10px)" }} borderRadius='full' >
                            <Text fontSize={isNotSmallerScreen ? "20px" : "10px"}>Télécharger mon CV</Text>
                        </Button>

                    </Flex>

                    </Flex>

                    

                </Box>

                <Foot></Foot>
                <Social></Social>
                <Footer></Footer>
            </VStack>

        </VStack>
    );
}

export default Cv;