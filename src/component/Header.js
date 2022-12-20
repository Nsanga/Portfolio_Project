import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Spacer, Stack, Text, VStack, Link } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import bulle from "../assets/bulle.png";
import avatar from "../assets/avatar.png";
import { FaLinkedin, FaGithub, FaTrello } from "react-icons/fa";
import { Icon } from "@chakra-ui/icon";

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:300px)");

    return (
        <Stack display="flex" flexDirection={isNotSmallerScreeen ? "row" : "column"} p={isNotSmallerScreeen ? "10" : "0"}
            spacing="20px" alignSelf="flex-start">
            <Box alignSelf="center" px="1" mt={32}>

                <Link href="https://www.linkedin.com/in/mercure-mekinda-694133165/" target="_blank"><Icon as={FaLinkedin} boxSize="35" /></Link>
                <Link href="https://github.com/Nsanga/" target="_blank"><Icon as={FaGithub} boxSize="35" /></Link>
                <Link href="https://trello.com/b/EAyRTY4m/" target="_blank"><Icon as={FaTrello} boxSize="35" /></Link>

            </Box>
            <Box alignItems="center" px="24" >
                <Image src={bulle} alt="Alternate Text" />
                <Text fontFamily="EB Garamond" fontStyle="normal" fontWeight={700} fontSize="64px">MercureM</Text>
                <Text fontFamily='Raleway' fontWeight="700" fontSize="36px">Développeur Full Stack <br/> & Web designer</Text>
                <Text fontFamily='Raleway' fontWeight="500" fontSize="23px" >Développeur de logiciels et webdesigner à Yaoundé, au Cameroun avec une expérience dans la création d’applications avec des technologies modernes.</Text>
                <Button colorScheme='blue' variant='outline' mt={8} onClick={()=>window.open("mailto:mercuremekinda@gmail.com")}>Contactez moi</Button>
            </Box>

            <Image alignSelf="center" mt={isNotSmallerScreeen ? "0" : "12"}
                mb={isNotSmallerScreeen ? "0" : "12"} borderRadius="full" backgroundColor="transparent" boxShadow="lg" boxSize={500} src={avatar}/>


        </Stack>
    )
}

export default Header;