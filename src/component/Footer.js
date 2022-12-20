import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { HStack, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";

function Footer() {

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");
    return (
        <HStack mt={16} display="flex" justify="space-between">
            <Box ml={isNotSmallerScreeen?"8":0}><Image src={logo} alt="Alternate Text" width={50} height={50} /></Box>
            <Box ml={isNotSmallerScreeen?"8":0}><Text>©2022 MercureM. <br/>TOUT DROITS RESERVES</Text></Box>
        </HStack>
        

    )
}

export default Footer;