import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box, Spacer } from "@chakra-ui/layout";
import { Card, Image } from "@chakra-ui/react";
import realisation from "../assets/realisation.png";

function Realisation() {

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");
    return (
        <VStack ml={isNotSmallerScreeen ? "40" : "0"} >
            <br />
            <br /><Box display="flex" flexDirection="column" px={2} gap={4}>
                <Text ml={isNotSmallerScreeen ? "2" : "0"}  fontFamily='Raleway' fontWeight="semibold" fontSize="50px">Mes Réalisations</Text>
                <Text ml={isNotSmallerScreeen ? "2":"0"} fontFamily='Raleway' fontWeight="medium" fontSize="30px">Mes projets</Text>
                <br />
                <Text ml={isNotSmallerScreeen ? "2":"0"} fontFamily='Raleway' fontWeight="medium" fontSize="30px">Des applications Webs</Text><br/>

                <Card display="flex" flexDirection="row" align="center" justify="center" boxShadow="8px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="10px">
                        <Image src={realisation}  w="40%"/>
                        <Image src={realisation}  w="40%"/>
                    
                </Card><br/>
                <Text ml={isNotSmallerScreeen ? "2":"0"} fontFamily='Raleway' fontWeight="medium" fontSize="30px">Des applications Natives</Text><br/>

                <Card display="flex" flexDirection="row" align="center" justify="center" boxShadow="8px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="10px">
                        <Image src={realisation}  w="40%"/>
                        <Image src={realisation}  w="40%"/>
                    
                </Card>
            </Box><Spacer/>


        </VStack>
    )
}

export default Realisation;