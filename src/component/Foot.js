import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Link, Spacer, Box, HStack } from "@chakra-ui/layout";
import { Button } from '@chakra-ui/button';
import { Grid, GridItem } from '@chakra-ui/react'

function Foot(){

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <VStack py={16} display="flex" flexDirection="column" gap={4} >
            
            <VStack display="flex" flexDirection="column" gap={6}
           align="center" justify="center">
                <Text fontFamily='Raleway' fontWeight="bold" fontSize={isNotSmallerScreen ? "30px" : "14px"}>Envie de faire partie de mes réalisations ?</Text>
                <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreen ? "20px" : "14px"}>Confiez-moi votre projet digital !</Text>
                <Button colorScheme='#ffffff' variant='outline' mt={8}
                    _hover={{ bg: "#ffffff", color: "#0080ff" }} onClick={() => window.open("mailto:mercuremekinda@gmail.com")}>Me contactez</Button>
            </VStack>
            <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreen ? "15px" : "12px"}>Yaoundé Cameroun</Text>
            <Link href="mailto:mercuremekinda@gmail.com" target="_blank" 
            fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreen ? "15px" : "12px"} _hover={{color:"red", textDecoration:"none"}}>mercuremekinda@gmail.com</Link>
            <Spacer/></VStack>
        
    )
}

export default Foot;