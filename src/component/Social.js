import { useMediaQuery } from "@chakra-ui/media-query";
import { HStack, VStack, Link, Box } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import React from "react";
import { FaLinkedin, FaGithub, FaTrello, FaWhatsapp, FaTelegramPlane, FaInstagram, FaFacebook } from "react-icons/fa";

function Social() {

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");

    return (

        <VStack>
            <HStack spacing={8} alignSelf="center">

            <Box display={isNotSmallerScreeen ?"none":"flex"} gap={8} >
                <Link href="https://www.linkedin.com/in/mercure-mekinda-694133165/" target="_blank" _hover={{ color: "#0080ff" }}><Icon as={FaLinkedin} boxSize={isNotSmallerScreeen ? "35":"5"} /></Link>
                <Link href="https://github.com/Nsanga/" target="_blank" _hover={{ color: "#0080ff" }}><Icon as={FaGithub} boxSize={isNotSmallerScreeen ? "35":"5"} /></Link>
                <Link href="https://trello.com/b/EAyRTY4m/" target="_blank" _hover={{ color: "#0080ff" }}><Icon as={FaTrello} boxSize={isNotSmallerScreeen ? "35":"5"} /></Link>
            </Box>

                <Link href="https://wa.me/237695592865" target="_blank" _hover={{ color: "green" }}><Icon as={FaWhatsapp} boxSize={isNotSmallerScreeen ? "35":"5"} /></Link>
                <Link href="https://telegram.me/Mercure_Mekinda" target="_blank" _hover={{ color: "#0080ff" }}><Icon as={FaTelegramPlane} boxSize={isNotSmallerScreeen ? "35":"5"} /></Link>
                <Link href="https://www.instagram.com/merkur_mekinda/" target="_blank" _hover={{ color: "#8a3ab9" }}><Icon as={FaInstagram} boxSize={isNotSmallerScreeen ? "35":"5"} /></Link>
                <Link href="https://www.facebook.com/mercure.mekinda" target="_blank" _hover={{ color: "#0080ff" }}><Icon as={FaFacebook} boxSize={isNotSmallerScreeen ? "35":"5"} /></Link>
            </HStack>
        </VStack>

    )
}

export default Social;