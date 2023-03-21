import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import bulle from "../assets/bulle.png";
import PopPop from "../component/PopPop";
import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import {url} from '../urlLoader'


function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    const [data, setData] = React.useState([]);
    useEffect(() => {

        axios.get(`${url}/api/auth/profile`)
        .then(response => {
          console.log("ProfileAcc ::", response);
          setData(response.data.data)

            })
            .catch(err => console.log(err));
    }, [])

    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"} py={isNotSmallerScreen ? "8" : "0"}
                alignSelf="flex-start" ml={isNotSmallerScreen ? "16" : 4}>
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-end' >
                    <Text display={isNotSmallerScreen ? "none" : "flex"} fontSize="5xl" fontWeight="semibold" mb={8}>Hello, c'est moi</Text>
                    <Image src={bulle} alt="Alternate Text" display={isNotSmallerScreen ? "flex" : "none"} />
                    <Text fontFamily="EB Garamond" fontStyle="normal" fontWeight="bold" fontSize="64px" mt={-8}>{data?.nom}</Text>
                    <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreen ? "36px" : "25px"} 
                    mt={isNotSmallerScreen ? "8" : "0"} w={isNotSmallerScreen ? "70%" : "65%"}>{data?.metier}</Text>
                    <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreen ? "23px" : "20px"} mt={isNotSmallerScreen ? "4" : "0"}>{data?.description}</Text>
                    <PopPop></PopPop>



                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"}
                px={isNotSmallerScreen ? "0" : 6} borderRadius='full' 
                backgroundColor="transparent" boxShadow="lg" boxSize={isNotSmallerScreen ? "500px" : "300px"} src={data?.image} />
            </Flex>

        </Stack>
    )
}

export default Header