import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Link, Spacer } from "@chakra-ui/layout";

function Foot(){

    return (
        <VStack mt={12} display="flex" flexDirection="column" gap={4}>
            <Text fontFamily='Raleway' fontWeight="semibold" fontSize="30px">Rester Connecté</Text>
            <Text fontFamily='Raleway' fontWeight="medium" fontSize="20px">Yaoundé Cameroun</Text>
            <Link href="mailto:mercuremekinda@gmail.com" target="_blank" 
            fontFamily='Raleway' fontWeight="medium" fontSize="20px" _hover={{color:"red", textDecoration:"none"}}>mercuremekinda@gmail.com</Link>
            <Spacer/></VStack>
        
    )
}

export default Foot;