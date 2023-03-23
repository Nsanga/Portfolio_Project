import React, { Component } from "react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box, Flex } from "@chakra-ui/layout";
import { Card, IconButton, Image } from "@chakra-ui/react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import axios from 'axios';
import { url } from '../urlLoader';
import Carousel from "react-elastic-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function Service() {
    const [data, setData] = useState([]);

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };


    useEffect(() => {
        axios.get(`${url}/api/service/getAll`)
            .then(response => {
                console.log("ListService ::", response.data.data);
                setData(response.data.data);


            })
            .catch(err => console.log(err));

    }, [])
    console.log("datasss::", data)

    return (
        <VStack ml={isNotSmallerScreeen ? "0" : "5"} w={isNotSmallerScreeen ? "72%" : "95%"}>
            <br />
            <Box display="flex" flexDirection="column" px={2} gap={4} w="100%">
                <Text ml={isNotSmallerScreeen ? "0" : "2"} fontFamily='Raleway' fontWeight="semibold"
                    fontSize={isNotSmallerScreeen ? "50px" : "25px"}>Qu’est-ce que je peux faire ?</Text>
                <Text ml={isNotSmallerScreeen ? "2" : "2"} fontFamily='Raleway' fontWeight="medium"
                    fontSize={isNotSmallerScreeen ? "30px" : "20px"}>Offre de Services</Text>
                <br />

                <Box boxShadow="8px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="10px" px={isNotSmallerScreeen ? "10" : "0"}
                    w={isNotSmallerScreeen ? "95%" : "100%"}>

                    <Slider {...settings}>
                        {data.map(item => (
                            <div key={item.id_Service}>
                                <Flex align="center" justifyContent="center">
                                    <Box align="center" w={isNotSmallerScreeen ? "80%" : "100%"}>
                                        <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreeen ? "28px" : "14px"} mt={8}>{item.nom}<br /></Text>
                                        <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreeen ? "18px" : "10px"}
                                            py={isNotSmallerScreeen ? "0" : "8"}>{item.description}</Text><br />
                                    </Box>
                                    <Box ml={8} mr={4} w="50%">
                                        <Image src={item.image} alt={item.nom} />
                                    </Box>
                                </Flex>

                            </div>
                        ))}
                    </Slider>


                </Box>

            </Box>


        </VStack>
    )
}

export default Service;