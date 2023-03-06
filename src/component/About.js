import React, { useEffect } from "react";
import axios from 'axios';
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box, Flex } from "@chakra-ui/layout";
import { Card, Image, CardHeader, CardBody } from "@chakra-ui/react";
import about from "../assets/about.png";

function About() {
    const [data, setData] = React.useState([]);

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");

    useEffect(() => {
        axios.get("http://localhost:5000/api/auth/profile")
        .then(response => {
          console.log("About ::", response.data.data);
          setData(response.data.data)
     
      })
}, [])

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
                            <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreeen ? "15px":"12px" }>
                                {data.about_description}
                            </Text>

                        </Box>
                    </CardBody>

                </Card>
            </Flex>


        </VStack>
    )
}

export default About;