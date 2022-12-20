import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Spacer, HStack, VStack, Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { Card, Image, Link } from "@chakra-ui/react";
import { FaSun, FaMoon, FaEnvelope, FaFile, FaUser } from "react-icons/fa";
import logo from "./assets/logo.png";
import Navigation from "./component/Navigation";
import Header from "./component/Header";
import Service from "./component/Service";
import Social from "./component/Social";
import Foot from "./component/Foot";
import Footer from "./component/Footer";
import About from "./component/About";
import Realisation from "./component/Realisation";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";



  return (
    <VStack>
      <Card p={5} top={10} boxShadow="0px 4px 15px 10px rgba(0, 0, 0, 0.25)" borderRadius="10px">
        <Box display="flex" flexDirection="row">
          <VStack px={8}>
            <Image src={logo} alt="Alternate Text" width={50} height={50} />
          </VStack>
          <VStack>
            <Navigation></Navigation>
          </VStack>
          
            <IconButton ml={2} size="md" icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
          
        </Box>
        <Header></Header>
        <Service></Service>
        <About></About>
        <Realisation></Realisation>
        <Foot></Foot>
        <Social></Social>
        <Footer></Footer>
      </Card>

    </VStack>



  );
}

export default App;
