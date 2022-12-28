import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { HStack, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";

function Footer() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <HStack w="95%" mt={16} display="flex" flexDirection={isNotSmallerScreen?"row":"column"} justify={isNotSmallerScreen?"space-between":"center"}>
            <Image src={logo} alt="Alternate Text" width={50} height={50} />
            <Text align="center" fontSize={isNotSmallerScreen ? "12px" : "10px"}>©2022 MercureM. </Text>
            <Text align="center" fontSize={isNotSmallerScreen ? "12px" : "10px"}>TOUT DROITS RESERVES</Text>
        </HStack>
        

    )
}

export default Footer;