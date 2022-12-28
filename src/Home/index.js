import { IconButton } from "@chakra-ui/button";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, HStack } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaHome } from 'react-icons/fa'
import { Image, Button } from "@chakra-ui/react";
import { FaEnvelope, FaFile, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import SocialWork from "../component/SocialWork";
import Header from "../component/Header";
import Service from "../component/Service";
import About from "../component/About";
import Realisation from "../component/Realisation";
import Foot from "../component/Foot";
import Social from "../component/Social";
import Footer from "../component/Footer";
import { Link } from "react-router-dom"



function Home() {

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
                        <FaFile /><Link to="/realisation" display={isNotSmallerScreen ? "flex" : "none"} fontWeight="semibold" _hover={{ textDecoration: "none" }}>Mes Réalisations</Link>
                    </HStack>

                    <HStack ml={8} _hover={{ color: "#0080ff", fontWeight: "bold" }}>
                        <FaUser /><Link to="/cv" display={isNotSmallerScreen ? "flex" : "none"} fontWeight="semibold" _hover={{ textDecoration: "none" }}>CV</Link>
                    </HStack>

                    <IconButton m={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
                </Flex>
        <SocialWork></SocialWork>

        <Header></Header>
        <Service></Service>
        <About></About>
        <Realisation></Realisation>
        <Foot></Foot>
        <Social></Social>
        <Footer></Footer>
      </VStack>


    </VStack>
  );
}

export default Home;