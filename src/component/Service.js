import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box } from "@chakra-ui/layout";
import { Card, Image } from "@chakra-ui/react";
import Img from "../assets/Img.png";

function Service() {

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");
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
                        <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreeen? "28px":"25px"} mt={2}>Applications Frontales</Text>
                        <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreeen? "18px":"16px"}>Créez des applications côté client avec des fonctionnalités modernes telles que SPA et maintenez le style de codage sémantique parmi d'autres meilleures pratiques pour l'optimisation du référencement. Utilisez des technologies modernes telles que Nuxt (Vue.js), TailwindCSS et GSAP.</Text><br />
                        <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreeen? "28px":"25px"} mt={isNotSmallerScreeen? "0":0}>Applications Principale</Text>
                        <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreeen? "18px":"16px"}>Créez des applications serveur évolutives et maintenables à l'aide de piles technologiques modernes telles que Node.js, Express et MongoDB.</Text><br />
                        <Text fontFamily='Raleway' fontWeight="semibold" fontSize={isNotSmallerScreeen? "28px":"25px"} mt={isNotSmallerScreeen? "0":0}>Applications Natives</Text>
                        <Text fontFamily='Raleway' fontWeight="medium" fontSize={isNotSmallerScreeen? "18px":"16px"} mb={isNotSmallerScreeen? 2:2}>Utilisez Flutter pour créer des applications mobiles natives simples. Flutter est moderne, rapide, multiplateforme et populaire.</Text>

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