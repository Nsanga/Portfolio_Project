import { IconButton } from "@chakra-ui/button";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, HStack, Box } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaBars } from 'react-icons/fa'
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
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'



function Home() {

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
              <MenuItem icon={<FaEnvelope />}>
                <Link href="mailto:mercuremekinda@gmail.com" target="_blank" _hover={{ textDecoration: "none" }}>mercuremekinda@gmail.com</Link>
              </MenuItem>
              <MenuItem icon={<FaFile />} onClick={() => this.onClickSubmit}>
                <Link to="/realisation" display={isNotSmallerScreen ? "flex" : "none"} _hover={{ textDecoration: "none" }}>Mes Réalisations</Link>
              </MenuItem>
              <MenuItem icon={<FaUser />}>
                <Link to="/cv" display={isNotSmallerScreen ? "flex" : "none"} _hover={{ textDecoration: "none" }}>CV</Link>
              </MenuItem>
            </MenuList>
            </>
  )}
          </Menu></Box> </HStack>

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