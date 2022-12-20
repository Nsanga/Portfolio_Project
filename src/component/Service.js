import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { VStack, Text, Box } from "@chakra-ui/layout";
import { Card, Image } from "@chakra-ui/react";
import Img from "../assets/Img.png";

function Service() {

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");
    return (
        <VStack ml={isNotSmallerScreeen ? "44" : "0"}>
            <br />
            <Box display="flex" flexDirection="column" gap={4}>
                <Text fontFamily='Raleway' fontWeight={700} fontSize="50px">Qu’est-ce que je peux faire ?</Text>
                <Text fontFamily='Raleway' fontWeight={500} fontSize="30px">Offre de Services</Text>
                <br />

                <Card display="flex" flexDirection="row" w="95%" align="center" boxShadow="8px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="10px">
                    <Box w="543px" align="center" mt={-12}>
                        <Text fontFamily='Raleway' fontWeight={700} fontSize="28px">Applications Frontales</Text>
                        <Text fontFamily='Raleway' fontWeight={500} fontSize="20px">Créez des applications côté client avec des fonctionnalités modernes telles que SPA et maintenez le style de codage sémantique parmi d'autres meilleures pratiques pour l'optimisation du référencement. Utilisez des technologies modernes telles que Nuxt (Vue.js), TailwindCSS et GSAP.</Text><br />
                        <Text fontFamily='Raleway' fontWeight={700} fontSize="28px">Applications Principale</Text>
                        <Text fontFamily='Raleway' fontWeight={500} fontSize="20px">Créez des applications serveur évolutives et maintenables à l'aide de piles technologiques modernes telles que Node.js, Express et MongoDB.</Text><br />
                        <Text fontFamily='Raleway' fontWeight={700} fontSize="28px">Applications Natives</Text>
                        <Text fontFamily='Raleway' fontWeight={500} fontSize="20px">Utilisez Flutter pour créer des applications mobiles natives simples. Flutter est moderne, rapide, multiplateforme et populaire.</Text>

                    </Box>
                    <Box display="flex" alignSelf="flex-end">
                        <Image src={Img} alt="Alternate Text" w="580px" h="700px" />
                    </Box>
                </Card>
            </Box>


        </VStack>
    )
}

export default Service;