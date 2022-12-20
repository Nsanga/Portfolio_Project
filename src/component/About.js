import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box } from "@chakra-ui/layout";
import { Card, Image, CardHeader, CardBody } from "@chakra-ui/react";
import about from "../assets/about.png";

function About() {

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");
    return (
        <VStack mr={isNotSmallerScreeen ? "0" : "0"} py={10}>
            <br />
            <Box display="flex" flexDirection="column" gap={4}>
                <Card w="65%" boxShadow="8px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="10px">
                    <CardHeader><Text fontFamily='Raleway' fontWeight={500} fontSize="30px">A propos de moi</Text>
                        <br /></CardHeader>
                    <CardBody display="flex" flexDirection="row" gap={4}>
                        <Box>
                            <Image src={about} alt="Alternate Text" />
                        </Box>
                        <Box w="543px" alignSelf="center">
                            <Text fontFamily='Raleway' fontWeight={500} fontSize="15px">Ingénieur des Travaux Informatiques option Génie Logiciel, je suis un développeur full stack et au même titre un web designer.<br />
                                <br />En plus de participer à de nombreux programmes technologiques où j’ai été formé pour avoir à la fois des compétences techniques et générales, j’ai acquis des connaissances de programmation de haut niveau en suivant des formations en ligne sur LinkedIn E-learning, en obtenant un certificat Figma et un certificat JavaScript respectivement.<br />
                                <br />Quand je ne code pas je joue à un jeu vidéo ou je regarde un film.<br />A certains moment j’apprends une nouvelle langue ou un nouveau cadre.</Text>

                        </Box>
                    </CardBody>

                </Card>
            </Box>


        </VStack>
    )
}

export default About;