import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box, Spacer } from "@chakra-ui/layout";
import { Card, Image } from "@chakra-ui/react";
import realisation from "../assets/realisation.png";

function Realisation() {

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");
    return (
        <VStack ml={isNotSmallerScreeen ? "40" : "72"} >
            <br />
            <br /><Box display="flex" flexDirection="column" px={2} gap={4}>
                <Text ml={isNotSmallerScreeen ? "32" : "2"} fontFamily='Raleway' fontWeight="semibold"
                    px={isNotSmallerScreeen ? "12" : "0"} fontSize={isNotSmallerScreeen ? "50px" : "35px"}>Mes Réalisations</Text>
                <Text ml={isNotSmallerScreeen ? "32" : "2"} fontFamily='Raleway' fontWeight="medium"
                    px={isNotSmallerScreeen ? "12" : "0"} fontSize={isNotSmallerScreeen ? "30px" : "25px"}>Mes projets</Text>
                <br />
                <Text ml={isNotSmallerScreeen ? "32" : "2"} fontFamily='Raleway' fontWeight="medium"
                    px={isNotSmallerScreeen ? "12" : "0"} fontSize={isNotSmallerScreeen ? "30px" : "25px"}>Des applications Webs</Text><br />
                <Box display="flex" justifyContent="flex-end">
                    <Card display="flex" flexDirection="row" align="center"
                        w={isNotSmallerScreeen ? "86%" : "99%"} justify="center" boxShadow="8px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="10px">
                        <Image src={realisation} w={isNotSmallerScreeen ? "40%" : "50%"} />
                        <Image src={realisation} w={isNotSmallerScreeen ? "40%" : "50%"} />

                    </Card>
                </Box><br />
                <Text ml={isNotSmallerScreeen ? "32" : "2"} fontFamily='Raleway' fontWeight="medium"
                    px={isNotSmallerScreeen ? "12" : "0"} fontSize="30px">Des applications Natives</Text><br />

                <Box display="flex" justifyContent="flex-end">
                    <Card display="flex" flexDirection="row" align="center"
                        w={isNotSmallerScreeen ? "86%" : "99%"} justify="center" boxShadow="8px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="10px">
                        <Image src={realisation} w={isNotSmallerScreeen ? "40%" : "50%"} />
                        <Image src={realisation} w={isNotSmallerScreeen ? "40%" : "50%"} />

                    </Card>
                </Box><br />
            </Box><Spacer />


        </VStack>
    )
}

export default Realisation;