import { HStack, VStack, Link } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import React from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaFacebook } from "react-icons/fa";

function Social() {
    return (

        <VStack>
            <HStack spacing={8} alignSelf="center">
            <Link href="https://wa.me/237695592865" target="_blank"><Icon as={FaWhatsapp} boxSize="35" /></Link>
            <Link href="https://telegram.me/Mercure_Mekinda" target="_blank"><Icon as={FaTelegramPlane} boxSize="35" /></Link>
            <Link href="https://www.instagram.com/merkur_mekinda/" target="_blank"><Icon as={FaInstagram} boxSize="35" /></Link>
            <Link href="https://www.facebook.com/mercure.mekinda" target="_blank"><Icon as={FaFacebook} boxSize="35" /></Link>
            </HStack>
        </VStack>

    )
}

export default Social;