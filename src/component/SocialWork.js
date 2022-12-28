import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Link, VStack } from "@chakra-ui/layout";
import { FaLinkedin, FaGithub, FaTrello } from "react-icons/fa";
import { Icon } from "@chakra-ui/icon";

function SocialWork() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");

    return (
        <VStack position= "absolute" left= "155px" top= "850px" display={isNotSmallerScreeen ?"flex":"none"}>
        
            <Box alignSelf="center" mt={-96} mb={60} ml={-40} display={isNotSmallerScreeen ?"flex":"none"} flexDirection="column" gap={4} >
                <Link href="https://www.linkedin.com/in/mercure-mekinda-694133165/" target="_blank" _hover={{ color: "#0080ff", transform: "translateY(-10px)" }}><Icon as={FaLinkedin} boxSize="35" /></Link>
                <Link href="https://github.com/Nsanga/" target="_blank" _hover={{ color: "#0080ff", transform: "translateY(-10px)" }}><Icon as={FaGithub} boxSize="35" /></Link>
                <Link href="https://trello.com/b/EAyRTY4m/" target="_blank" _hover={{ color: "#0080ff", transform: "translateY(-10px)" }}><Icon as={FaTrello} boxSize="35" /></Link>
            </Box>

        </VStack>
            
                
    )
}

export default SocialWork;