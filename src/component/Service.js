import React from "react";
import { useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box } from "@chakra-ui/layout";
import { Card, Image } from "@chakra-ui/react";
import Img from "../assets/Img.png";
import axios from 'axios';

function Service() {
    const [data, setData] = React.useState([]);

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");

    useEffect(() => {
        axios.get("http://localhost:5000/api/service/1")
        .then(response => {
          console.log("ListService ::", response.data.data);
          setData(response.data.data)
     
      })
      .catch(err => console.log(err));
      
      }, [])
      console.log("datasss::", data)

    return (
        <VStack ml={isNotSmallerScreeen ? "40" : "72"}>
            <br />
            <Box display="flex" flexDirection="column" px={2} gap={4}>
                <Text ml={isNotSmallerScreeen ? "32" : "2"} fontFamily='Raleway' fontWeight="semibold" 
                px={isNotSmallerScreeen ? "14" : "0"} fontSize={isNotSmallerScreeen? "50px":"30px"}>Qu’est-ce que je peux faire ?</Text>
                <Text ml={isNotSmallerScreeen ? "32" : "2"} fontFamily='Raleway' fontWeight="medium" 
                px={isNotSmallerScreeen ? "14" : "0"} fontSize={isNotSmallerScreeen? "30px":"25px"}>Offre de Services</Text>
                <br />
                <Box align="center" ml={isNotSmallerScreeen ? "26" : "0"} px={isNotSmallerScreeen ? "10" : "0"}>
                <Card display="flex" flexDirection="row" align="center" boxShadow="8px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="10px" 
                w={isNotSmallerScreeen? "80%":"80%"}>
                    <Box align={isNotSmallerScreeen?"none":"center"} w={isNotSmallerScreeen? "65%":"100%"}>
                        <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreeen? "28px":"25px"} mt={2}>{data.nom}</Text>
                        <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreeen? "18px":"16px"}>{data.description}</Text><br />
                        <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreeen? "28px":"25px"} mt={isNotSmallerScreeen? "0":0}>{data.nom}</Text>
                        <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreeen? "18px":"16px"}>{data.description}</Text><br />
                        <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreeen? "28px":"25px"} mt={isNotSmallerScreeen? "0":0}>{data.nom}</Text>
                        <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreeen? "18px":"16px"} mb={isNotSmallerScreeen? 2:2}>{data.description}</Text>

                    </Box>
                    <Box display={isNotSmallerScreeen?"flex":"none"}>
                        <Image src={Img} alt="Alternate Text"/>
                    </Box>
                </Card>
                </Box>
            </Box>


        </VStack>
    )
}

export default Service;