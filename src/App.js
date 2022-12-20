import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Spacer, HStack, VStack, Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { Card, Image, Link } from "@chakra-ui/react";
import { FaSun, FaMoon, FaEnvelope, FaFile, FaUser } from "react-icons/fa";
import logo from "./assets/logo.png";
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
        <Flex w="100%">
          <VStack>
            <Heading ml={8}><Image src={logo} alt="Alternate Text" width={50} height={50} /></Heading>
          </VStack>

          <HStack ml={100}>
            <FaEnvelope /><Link fontWeight="semibold" href="mailto:mercuremekinda@gmail.com" target="_blank">mercuremekinda@gmail.com</Link>
          </HStack>

          <Spacer></Spacer>
          <HStack ml={2}>
            <FaFile /><Link fontWeight="semibold">Mes Réalisations</Link>
          </HStack>
          <HStack ml={6}>
            <FaUser /><Link fontWeight="semibold">CV</Link>
          </HStack>
          <IconButton ml={8} size="md" icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
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
