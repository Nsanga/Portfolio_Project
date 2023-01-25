import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box, Flex } from "@chakra-ui/layout";
import { Card, Image, CardHeader, CardBody } from "@chakra-ui/react";
import about from "../assets/about.png";

function About() {

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");
    return (
        <VStack ml={isNotSmallerScreeen ? "0" : "60"} py={10} >
            <br />
            <Flex display="flex" flexDirection="column" gap={4} >
                <Card w={isNotSmallerScreeen ? "65%":"95%"} boxShadow="8px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="10px">
                    <CardHeader><Text fontFamily='Raleway' fontWeight="semibold" fontSize="30px">A propos de moi</Text>
                        <br /></CardHeader>
                    <CardBody display="flex" flexDirection="row" gap={4}>
                        <Box>
                            <Image src={about} alt="Alternate Text" />
                        </Box>
                        <Box w={isNotSmallerScreeen ?"543px":"390px"} alignSelf="center">
                            <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreeen ? "15px":"12px" }>Ingénieur des Travaux Informatiques option Génie Logiciel, je suis un développeur full stack et au même titre un web designer.<br />
                                <br />En plus de participer à de nombreux programmes technologiques où j’ai été formé pour avoir à la fois des compétences techniques et générales, j’ai acquis des connaissances de programmation de haut niveau en suivant des formations en ligne sur LinkedIn E-learning, en obtenant un certificat Figma et un certificat JavaScript respectivement.<br />
                                <br />Quand je ne code pas je joue à un jeu vidéo ou je regarde un film.<br />A certains moment j’apprends une nouvelle langue ou un nouveau cadre.</Text>

                        </Box>
                    </CardBody>

                </Card>
            </Flex>


        </VStack>
    )
}

export default About;