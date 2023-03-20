import React, { useEffect } from "react";
import axios from 'axios';
import { IconButton } from "@chakra-ui/button";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box, Spacer, Heading, Stack, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { HashLink } from "react-router-hash-link";

function Realisation() {

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");

    const [dataProjet, setDataProjet] = React.useState([]);
    useEffect(() => {

        axios.get("http://localhost:7000/api/projet/getAll")
            .then(response => {
                console.log("ProjetAccueil ::", response.data.data);
                setDataProjet(response.data.data)

            })
            .catch(err => console.log(err));
    }, [])

    return (
        <VStack ml={isNotSmallerScreeen ? "0" : "72"} w={isNotSmallerScreeen ? "72%" : "flex"}>
            <br />
            <br /><Box display="flex" flexDirection="column" px={2} gap={4} w="100%">
                <Text ml={isNotSmallerScreeen ? "0" : "2"} fontFamily='Raleway' fontWeight="semibold"
                 fontSize={isNotSmallerScreeen ? "50px" : "25px"}>Mes Réalisations</Text><br />
                <Flex justify="space-between">
                    <Text ml={isNotSmallerScreeen ? "2" : "2"} fontFamily='Raleway' fontWeight="medium"
                         fontSize={isNotSmallerScreeen ? "30px" : "20px"}>Des applications Webs</Text>

                    <Flex alignSelf="flex-end" px={isNotSmallerScreeen ? "12" : "0"}>
                        <HashLink to="/realisation#appweb">
                            <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline'
                                colorScheme='auto' aria-label='Call Sage' fontSize='20px'
                                _hover={{ color: "#ffffff", background: "#0080ff" }}></IconButton>
                        </HashLink><br />
                    </Flex>
                </Flex><br />

                <Box display="flex" px={isNotSmallerScreeen ? "12" : "0"} ml={isNotSmallerScreeen ? "32" : "2"}
                    justifyContent="space-around" alignItems="center" gap={4} flexDirection={isNotSmallerScreeen ? "row" : "column"}>

                    {dataProjet.filter(item => item.type === 'web').map((item) => (
                        <Card w={isNotSmallerScreeen ? "flex" : "70%"} maxW={isNotSmallerScreeen ? "sm" : "none"}
                        _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }} key={item.id_Projet}>
                            <CardHeader>
                                <Heading fontFamily='Raleway' size='lg'> {item.nom}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Image
                                    src={item.image}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='xl'
                                />
                                <Stack mt='6' alignSelf="center">
                                    <Text fontFamily='Raleway'>
                                        {item.description}
                                    </Text>
                                </Stack>
                            </CardBody>

                            <CardFooter alignSelf="flex-end">
                                <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                            </CardFooter>

                        </Card>
                    )).slice(0,3)}

                </Box><br />

                <Flex justify="space-between">
                    <Text ml={isNotSmallerScreeen ? "2" : "2"} fontFamily='Raleway' fontWeight="medium"
                     fontSize={isNotSmallerScreeen ? "30px" : "20px"}>Des applications Mobiles</Text>

                    <Flex alignSelf="flex-end" px={isNotSmallerScreeen ? "12" : "0"}>
                        <HashLink to="/realisation#appmobile">
                            <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline'
                                colorScheme='auto' aria-label='Call Sage' fontSize='20px'
                                _hover={{ color: "#ffffff", background: "#0080ff" }}></IconButton>
                        </HashLink><br />
                    </Flex>
                </Flex><br />

                <Box display="flex" flexDirection={isNotSmallerScreeen ? "row" : "column"} px={isNotSmallerScreeen ? "12" : "0"} ml={isNotSmallerScreeen ? "32" : "2"}
                    justifyContent="space-around" alignItems="center" gap={4}>

                    {dataProjet.filter(item => item.type === 'mobile').map((item) => (
                        
                        <Card w={isNotSmallerScreeen ? "flex" : "70%"} maxW={isNotSmallerScreeen ? "sm" : "none"} 
                        _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }} key={item.id_Projet}>
                            <CardHeader>
                                <Heading fontFamily='Raleway' size='lg'> {item.nom}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Image
                                    src={item.image}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='xl'
                                />
                                <Stack mt='6' alignSelf="center">
                                    <Text fontFamily='Raleway'>
                                        {item.description}
                                    </Text>
                                </Stack>
                            </CardBody>

                            <CardFooter alignSelf="flex-end">
                            <a href={item.lien} target='_blank' rel='noopener noreferrer'>
                                <IconButton 
                                icon={<ArrowForwardIcon />} 
                                isRound='true' 
                                variant='outline' 
                                colorScheme='auto' 
                                aria-label='Call Sage' 
                                fontSize='20px'/>
                            </a>
                            </CardFooter>

                        </Card>
                    )).slice(0,3)}
                </Box><br />
            </Box><Spacer />


        </VStack>
    )
}

export default Realisation;