import React, { useEffect } from "react";
import axios from 'axios';
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box, Flex } from "@chakra-ui/layout";
import { Card, Image, CardHeader, CardBody } from "@chakra-ui/react";
import {url} from "../urlLoader";

function About() {
    const [data, setData] = React.useState([]);

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    useEffect(() => {
        axios.get(`${url}/api/auth/profile`)
        .then(response => {
          console.log("About ::", response.data.data);
          setData(response.data.data)
     
      })
}, [])

    return (
        <VStack  py={10}>
            <br />
            
                <Card w={isNotSmallerScreen ? "65%":"74%"} boxShadow="8px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="10px">
                    <CardHeader><Text fontFamily='Raleway' fontWeight="semibold" fontSize="30px">A propos de moi</Text>
                        <br /></CardHeader>
                    <CardBody display="flex" flexDirection="row" gap={2}>
                        <Box >
                            <Image src={data?.about_image} alt="Mercure Mekinda" />
                        </Box>
                        <Box w={isNotSmallerScreen ?"543px":"390px"} >
                        
                            <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreen ? "17.2px":"10px" }>
                                 {data?.about_description}
                            </Text>
                            
                        </Box>
                    </CardBody>

                </Card>
            


        </VStack>
    )
}

export default About;