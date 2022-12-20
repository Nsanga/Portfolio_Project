import React from "react";
import { Stack, Heading, Box, HStack, VStack } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";
import { FaEnvelope, FaFile, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";


function Navigation() {

    return (
        <VStack>
            <HStack spacing={490} px={16} py={3}>
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