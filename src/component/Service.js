import React from "react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box, Flex } from "@chakra-ui/layout";
import { Card, IconButton, Image } from "@chakra-ui/react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import axios from 'axios';

function Service() {
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");


    useEffect(() => {
        axios.get("http://localhost:7000/api/service/getAll")
            .then(response => {
                console.log("ListService ::", response.data.data);
                setData(response.data.data);


            })
            .catch(err => console.log(err));

    }, [])
    console.log("datasss::", data)

    const handleNext = () => {
        setActiveIndex((index) => (index + 1) % data.length);
    };

    const handlePrev = () => {
        setActiveIndex((index) => (index - 1 + data.length) % data.length);
    };

    return (
        <VStack ml={isNotSmallerScreeen ? "40" : "72"}>
            <br />
            <Box display="flex" flexDirection="column" px={2} gap={4}>
                <Text ml={isNotSmallerScreeen ? "32" : "2"} fontFamily='Raleway' fontWeight="semibold"
                    px={isNotSmallerScreeen ? "14" : "0"} fontSize={isNotSmallerScreeen ? "50px" : "25px"}>Qu’est-ce que je peux faire ?</Text>
                <Text ml={isNotSmallerScreeen ? "32" : "2"} fontFamily='Raleway' fontWeight="medium"
                    px={isNotSmallerScreeen ? "14" : "0"} fontSize={isNotSmallerScreeen ? "30px" : "20px"}>Offre de Services</Text>
                <br />


                <Box align="center" ml={isNotSmallerScreeen ? "26" : "0"} px={isNotSmallerScreeen ? "10" : "0"}>
                    <Card display="flex" flexDirection="row" align="center" boxShadow="8px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="10px"
                        w={isNotSmallerScreeen ? "75%" : "100%"}>
                        <Flex justifyContent="space-around" alignItems="center">

                            <Box align="center" w="50%">

                                <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreeen ? "28px" : "14px"} mt={8}>{data[activeIndex]?.nom}<br/></Text>
                                <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreeen ? "18px" : "10px"}
                                py={isNotSmallerScreeen ? "0" : "8"}>{data[activeIndex]?.description}</Text><br />


                            </Box>

                            <Box w="30%">
                                <Image src={data[activeIndex]?.image} alt={data[activeIndex]?.nom} />
                            </Box>

                        </Flex>
                    </Card>
                    <Flex justifyContent="center" py={4} gap={1}>
                        <IconButton icon={<FaChevronCircleLeft/>} isRound='true' background="none" onClick={handlePrev}/>
                        <IconButton icon={<FaChevronCircleRight/>} isRound='true' background="none" onClick={handleNext}/>
                    </Flex>
                </Box>
            </Box>


        </VStack>
    )
}

export default Service;