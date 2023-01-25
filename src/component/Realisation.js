import React from "react";
import { IconButton } from "@chakra-ui/button";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box, Spacer, Heading, Stack, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import realisation from "../assets/realisation.png";
import { HashLink } from "react-router-hash-link";

function Realisation() {

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");
    return (
        <VStack ml={isNotSmallerScreeen ? "40" : "72"} >
            <br />
            <br /><Box display="flex" flexDirection="column" px={2} gap={4}>
                <Text ml={isNotSmallerScreeen ? "32" : "2"} fontFamily='Raleway' fontWeight="semibold"
                    px={isNotSmallerScreeen ? "12" : "0"} fontSize={isNotSmallerScreeen ? "50px" : "35px"}>Mes Réalisations</Text><br />
                <Flex justify="space-between">
                    <Text ml={isNotSmallerScreeen ? "32" : "2"} fontFamily='Raleway' fontWeight="medium"
                        px={isNotSmallerScreeen ? "12" : "0"} fontSize={isNotSmallerScreeen ? "30px" : "25px"}>Des applications Webs</Text>

                    <Flex alignSelf="flex-end" px={isNotSmallerScreeen ? "12" : "0"}>
                        <HashLink to="/realisation#appweb">
                            <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline'
                                colorScheme='auto' aria-label='Call Sage' fontSize='20px'
                                _hover={{ color: "#ffffff", background: "#0080ff" }}></IconButton>
                        </HashLink><br />
                    </Flex>
                </Flex><br />

                <Box display="flex" px={isNotSmallerScreeen ? "12" : "0"} ml={isNotSmallerScreeen ? "32" : "2"}
                    justifyContent="space-between" gap={4} flexDirection={isNotSmallerScreeen ? "row" : "column"}>

                    <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }}>
                        <CardHeader>
                            <Heading fontFamily='Raleway' size='lg'> Portfolio</Heading>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src={realisation}
                                alt='Green double couch with wooden legs'
                                borderRadius='xl'
                            />
                            <Stack mt='6' alignSelf="center">
                                <Text fontFamily='Raleway'>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter alignSelf="flex-end">
                            <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                        </CardFooter>

                    </Card>

                    <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }}>
                        <CardHeader>
                            <Heading fontFamily='Raleway' size='lg'> Portfolio</Heading>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src={realisation}
                                alt='Green double couch with wooden legs'
                                borderRadius='xl'
                            />
                            <Stack mt='6' alignSelf="center">
                                <Text fontFamily='Raleway'>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter alignSelf="flex-end">
                            <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                        </CardFooter>

                    </Card>

                    <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }}>
                        <CardHeader>
                            <Heading fontFamily='Raleway' size='lg'> Portfolio</Heading>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src={realisation}
                                alt='Green double couch with wooden legs'
                                borderRadius='xl'
                            />
                            <Stack mt='6' alignSelf="center">
                                <Text fontFamily='Raleway'>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter alignSelf="flex-end">
                            <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                        </CardFooter>

                    </Card>

                </Box><br />

                <Flex justify="space-between">
                    <Text ml={isNotSmallerScreeen ? "32" : "2"} fontFamily='Raleway' fontWeight="medium"
                        px={isNotSmallerScreeen ? "12" : "0"} fontSize={isNotSmallerScreeen ? "30px" : "25px"}>Des applications Mobiles</Text>

                    <Flex alignSelf="flex-end" px={isNotSmallerScreeen ? "12" : "0"}>
                        <HashLink to="/realisation#appmobile">
                            <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline'
                                colorScheme='auto' aria-label='Call Sage' fontSize='20px'
                                _hover={{ color: "#ffffff", background: "#0080ff" }}></IconButton>
                        </HashLink><br />
                    </Flex>
                </Flex><br />

                <Box display="flex" flexDirection={isNotSmallerScreeen ? "row" : "column"} px={isNotSmallerScreeen ? "12" : "0"} ml={isNotSmallerScreeen ? "32" : "2"}
                    justifyContent="space-between" gap={4}>

                    <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }}>
                        <CardHeader>
                            <Heading fontFamily='Raleway' size='lg'> Portfolio</Heading>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src={realisation}
                                alt='Green double couch with wooden legs'
                                borderRadius='xl'
                            />
                            <Stack mt='6' alignSelf="center">
                                <Text fontFamily='Raleway'>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter alignSelf="flex-end">
                            <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                        </CardFooter>

                    </Card>

                    <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }}>
                        <CardHeader>
                            <Heading fontFamily='Raleway' size='lg'> Portfolio</Heading>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src={realisation}
                                alt='Green double couch with wooden legs'
                                borderRadius='xl'
                            />
                            <Stack mt='6' alignSelf="center">
                                <Text fontFamily='Raleway'>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter alignSelf="flex-end">
                            <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                        </CardFooter>

                    </Card>

                    <Card maxW='sm' _hover={{ color: "#ffffff", background: "#0080ff", transform: "translateY(-10px)" }}>
                        <CardHeader>
                            <Heading fontFamily='Raleway' size='lg'> Portfolio</Heading>
                        </CardHeader>
                        <CardBody>
                            <Image
                                src={realisation}
                                alt='Green double couch with wooden legs'
                                borderRadius='xl'
                            />
                            <Stack mt='6' alignSelf="center">
                                <Text fontFamily='Raleway'>
                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                    spaces, earthy toned spaces and for people who love a chic design with a
                                    sprinkle of vintage design.
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter alignSelf="flex-end">
                            <IconButton icon={<ArrowForwardIcon />} isRound='true' variant='outline' colorScheme='auto' aria-label='Call Sage' fontSize='20px'></IconButton>
                        </CardFooter>

                    </Card>
                </Box><br />
            </Box><Spacer />


        </VStack>
    )
}

export default Realisation;