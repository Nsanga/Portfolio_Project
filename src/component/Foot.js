import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Link, Spacer } from "@chakra-ui/layout";

function Foot(){

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <VStack mt={12} display="flex" flexDirection="column" gap={4}>
            <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreen ? "25px" : "14px"}>Rester Connecté</Text>
            <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreen ? "15px" : "12px"}>Yaoundé Cameroun</Text>
            <Link href="mailto:mercuremekinda@gmail.com" target="_blank" 
            fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreen ? "15px" : "12px"} _hover={{color:"red", textDecoration:"none"}}>mercuremekinda@gmail.com</Link>
            <Spacer/></VStack>
        
    )
}

export default Foot;