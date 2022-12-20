import React from "react";
import { Stack, Heading, Box, HStack, VStack } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";
import { FaEnvelope, FaFile, FaUser, FaBars } from "react-icons/fa";


function Navigation() {

    return (
        <VStack>
            <HStack spacing={420} px={16} py={3}>
                <Box display="flex" flexDirection="row">
                    <HStack>
                        <FaEnvelope /><Link fontWeight="semibold" href="mailto:mercuremekinda@gmail.com" target="_blank">mercuremekinda@gmail.com</Link>
                    </HStack>
                </Box>
                <Box display="flex" flexDirection="row" gap={4}>
                    <HStack>
                        <FaFile /><Link fontWeight="semibold">Mes Réalisations</Link>
                    </HStack>
                    <HStack>                    
                        <FaUser /><Link fontWeight="semibold">CV</Link>
                    </HStack>
                </Box>
            </HStack>


        </VStack>
    )
}

export default Navigation;