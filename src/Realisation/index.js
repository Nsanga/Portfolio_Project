import { IconButton } from "@chakra-ui/button";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, HStack, Text, Box } from "@chakra-ui/layout";
import { FaSun, FaMoon } from 'react-icons/fa'
import { Link, Image } from "@chakra-ui/react";
import { FaEnvelope, FaFile, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import SocialWork from "../component/SocialWork";
import Foot from "../component/Foot";
import Social from "../component/Social";
import Footer from "../component/Footer";
import realisation from "../assets/realisation.png";


function Realisation() {

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

                    <Text ml={isNotSmallerScreen ? "32" : "2"} fontFamily='Raleway' fontWeight="medium"
                        px={isNotSmallerScreen ? "12" : "0"} fontSize={isNotSmallerScreen ? "30px" : "25px"}>Des applications Webs</Text>



                    <Flex direction={isNotSmallerScreen ? "row" : "column"} wrap="wrap" justifyContent="space-between"
                        p={isNotSmallerScreen ? "32" : "0"} py={isNotSmallerScreen ? "8" : "0"}
                        alignSelf={isNotSmallerScreen ? "flex-end" : "center"} ml={isNotSmallerScreen ? "10" : 0}>

                        <Image src={realisation} w={isNotSmallerScreen ? "50%" : "100%"} />

                        <Image src={realisation} w={isNotSmallerScreen ? "50%" : "100%"} />

                        <Image src={realisation} w={isNotSmallerScreen ? "50%" : "100%"} />

                    </Flex>

                    <Text ml={isNotSmallerScreen ? "32" : "2"} fontFamily='Raleway' fontWeight="medium"
                        px={isNotSmallerScreen ? "12" : "0"} fontSize={isNotSmallerScreen ? "30px" : "25px"}>Des applications Webs</Text>

                    <Flex direction={isNotSmallerScreen ? "row" : "column"} wrap="wrap" justifyContent="space-between"
                        p={isNotSmallerScreen ? "32" : "0"} py={isNotSmallerScreen ? "8" : "0"}
                        alignSelf={isNotSmallerScreen ? "flex-end" : "center"} ml={isNotSmallerScreen ? "10" : 0}>

                        <Image src={realisation} w={isNotSmallerScreen ? "50%" : "100%"} />

                        <Image src={realisation} w={isNotSmallerScreen ? "50%" : "100%"} />

                        <Image src={realisation} w={isNotSmallerScreen ? "50%" : "100%"} />

                    </Flex>
                </Box>

                <Foot></Foot>
                <Social></Social>
                <Footer></Footer>
            </VStack>

        </VStack>
    );
}

export default Realisation;