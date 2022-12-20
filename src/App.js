import React from "react";
import {useState} from "react"
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Spacer, HStack, VStack, Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { Card, Image, Button } from "@chakra-ui/react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "./assets/logo.png";
import Navigation from "./component/Navigation";
import Header from "./component/Header";
import Service from "./component/Service";
import Social from "./component/Social";
import Foot from "./component/Foot";
import Footer from "./component/Footer";
import About from "./component/About";
import Realisation from "./component/Realisation";
import "./style/style.css";

function App() {

  const [mobile, setMobile] = useState(false)

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
            <Button ml={4} className="mobile-menu" border="none" background="none" fontSize={20} display="none">
              {mobile? <ImCross/>:<FaBars/>}<FaBars/></Button>
          
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
