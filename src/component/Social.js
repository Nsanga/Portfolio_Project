import { HStack, VStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import React from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaFacebook } from "react-icons/fa";

function Social() {
    return (

        <VStack>
            <HStack spacing={8} alignSelf="center">
                <Icon as={FaWhatsapp} boxSize="35" />
                <Icon as={FaTelegramPlane} boxSize="35" />
                <Icon as={FaInstagram} boxSize="35" />
                <Icon as={FaFacebook} boxSize="35" />
            </HStack>
        </VStack>

    )
}

export default Social;