import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Link, Spacer } from "@chakra-ui/layout";

function Foot(){

    return (
        <VStack mt={12} display="flex" flexDirection="column" gap={4}>
            <Text fontFamily='Raleway' fontWeight={700} fontSize="30px">Rester Connecté</Text>
            <Text fontFamily='Raleway' fontWeight={500} fontSize="25px">Yaoundé Cameroun</Text>
            <Link fontFamily='Raleway' fontWeight={500} fontSize="25px">mercuremekinda@gmail.com</Link>
            <Spacer/></VStack>
        
    )
}

export default Foot;