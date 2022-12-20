import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Spacer, Stack, Text, VStack } from "@chakra-ui/layout";
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
            <VStack justifyContent="center" mr={isNotSmallerScreeen ? "100" : "0"} mb={isNotSmallerScreeen ? "-32" : "12"} spacing={8}>

                <Icon as={FaLinkedin} boxSize="35" />
                <Icon as={FaGithub} boxSize="35" />
                <Icon as={FaTrello} boxSize="35" />

            </VStack>
            <Box align="flex=start" mt={isNotSmallerScreeen ? "0" : "16"}>
                <Image src={bulle} alt="Alternate Text" mt={-8}/>
                <Text fontFamily="EB Garamond" fontStyle="normal" fontWeight={700} fontSize="64px" lineHeight="84px">MercureM</Text>
                <Text fontFamily='Raleway' fontWeight="700" fontSize="36px" mt={10}>Développeur Full Stack <br/> & Web designer</Text>
                <Text fontFamily='Raleway' mt={6} fontWeight="500" fontSize="30px" >Développeur de logiciels et webdesigner à Yaoundé, au Cameroun avec une expérience dans la création d’applications avec des technologies modernes.</Text>
                <Button colorScheme='blue' variant='outline' mt={8}>Contactez moi</Button>
            </Box>

            <Image src={avatar} alignSelf="center" mt={isNotSmallerScreeen ? "0" : "12"}
                mb={isNotSmallerScreeen ? "0" : "12"} borderRadius="full" backgroundColor="transparent" boxShadow="lg" boxSize={500}/>


        </Stack>
    )
}

export default Header;