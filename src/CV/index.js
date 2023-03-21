import React, { useEffect, useRef } from "react";
import axios from 'axios';
import { IconButton } from "@chakra-ui/button";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, HStack, Text, Divider, Box } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'
import { Image, Button } from "@chakra-ui/react";
import { FaEnvelope, FaFile, FaUser, FaDownload } from "react-icons/fa";
import logo from "../assets/logo.png";
import SocialWork from "../component/SocialWork";
import Foot from "../component/Foot";
import Social from "../component/Social";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';
import Gmail from "../component/Gmail";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { url } from '../urlLoader';



function Cv() {
    const [data, setData] = React.useState([]);
    const [dataExp, setDataExp] = React.useState([]);
    const [dataEd, setDataEd] = React.useState([]);
    const [dataCom, setDataCom] = React.useState([]);
    const [dataLog, setDataLog] = React.useState([]);
    const [dataProjet, setDataProjet] = React.useState([]);
    const componentRef = useRef();

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    useEffect(() => {

        axios.get(`${url}/api/projet/getAll`)
            .then(response => {
                console.log("Realisation ::", response.data.data);
                setDataProjet(response.data.data)

            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        axios.get(`${url}/api/realisation/1`)
        .then(response => {
          console.log("DescriptionCV ::", response.data.data);
          setData(response.data.data)
     
      })
      .catch(err => console.log(err));

      axios.get(`${url}/api/experience/getAll`)
        .then(response => {
          console.log("DescriptionCV ::", response.data.data);
          setDataExp(response.data.data)
     
      })
      .catch(err => console.log(err));

      axios.get(`${url}/api/education/getAll`)
        .then(response => {
          console.log("Education ::", response.data.data);
          setDataEd(response.data.data)
     
      })
      .catch(err => console.log(err));

      axios.get(`${url}/api/competence/getAll`)
        .then(response => {
          console.log("Competence ::", response.data.data);
          setDataCom(response.data.data)
     
      })
      .catch(err => console.log(err));

      axios.get(`${url}/api/logiciel/getAll`)
        .then(response => {
          console.log("logiciels ::", response.data.data);
          setDataLog(response.data.data)
     
      })
      .catch(err => console.log(err));
      axios.get(`${url}/api/projet/getAll`)
        .then(response => {
          console.log("Projet ::", response.data.data);
          setDataProjet(response.data.data)
     
      })
      .catch(err => console.log(err));
      
}, [])
      
      const handleDownload = () => {
        var doc = new jsPDF("p", "pt", "a4");
        doc.html(document.querySelector("#exclude1"), {
            callback: function(pdf){
                pdf.save('Nsanga_CV.pdf');
            }
        })
        
      };

    return (
        <VStack p={5}>
            <VStack w="100%" boxShadow={isNotSmallerScreen ? "0px 4px 15px 10px rgba(0, 0, 0, 0.25)" : "none"} borderRadius="10px" ref={componentRef}>
                <Flex w="95%">
                    <HStack>
                        <Heading>
                            <Link to="/home" _hover={{ textDecoration: "none" }}>
                                <Image src={logo} alt="Alternate Text" width={70} height={70} />
                            </Link>
                        </Heading>
                        <Spacer></Spacer><Spacer></Spacer><Spacer></Spacer>
                        <HStack display={isNotSmallerScreen ? "flex" : "none"} fontFamily='Raleway' _hover={{ color: "#0080ff", fontFamily: 'Raleway', fontWeight: "bold" }} px={isNotSmallerScreen ? "20" : "0"}>
                            <FaEnvelope /><Gmail/>
                        </HStack></HStack>

                    <Spacer></Spacer>
                    <HStack display={isNotSmallerScreen ? "flex" : "none"} fontFamily='Raleway' _hover={{ color: "#0080ff", fontFamily: 'Raleway', fontWeight: "bold" }}>
                        <FaFile /><Link to="/realisation" display={isNotSmallerScreen ? "flex" : "none"} _hover={{ textDecoration: "none" }}>Mes Réalisations</Link>
                    </HStack>

                    <HStack display={isNotSmallerScreen ? "flex" : "none"} ml={isNotSmallerScreen ? "8" : "4"} fontFamily='Raleway' _hover={{ color: "#0080ff", fontFamily: 'Raleway', fontWeight: "bold" }}>
                        <FaUser /><Link to="/cv" display={isNotSmallerScreen ? "flex" : "none"} _hover={{ textDecoration: "none" }}>CV</Link>
                    </HStack>

                    <HStack>
                        <IconButton m={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>

                        <Box display={isNotSmallerScreen ? "none" : "block"}>
                            <Menu>{({ isOpen }) => (
                                <>
                                    <MenuButton isActive={isOpen}
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<FaBars />}
                                        bg="transparent"
                                        fontSize={30}
                                    >
                                        {isOpen ? 'Close' : 'Open'}
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem icon={<FaEnvelope />} as="a" href="mailto:mercuremekinda@gmail.com" target="_blank" _hover={{ textDecoration: "none" }}>mercuremekinda@gmail.com
                                        </MenuItem>
                                        <MenuItem icon={<FaFile />} as={Link} to="/realisation" _hover={{ textDecoration: "none" }}>Mes Réalisations
                                        </MenuItem>
                                    </MenuList>
                                </>
                            )}
                            </Menu></Box> </HStack>
                </Flex>

                <SocialWork></SocialWork>

                <Flex w={isNotSmallerScreen ? "65%" : "100%"} px={isNotSmallerScreen ? 16 : 4}>
                <Image mt={isNotSmallerScreen ? 'none' : 4}
                borderRadius='full'
                boxSize={isNotSmallerScreen ? '170px' : '100px'}
                src={data?.image}
                alt='Mercure Mekinda'
                bg="transparent"
                />

                    <Flex direction="column" px={4} py={4}>

                        <Heading as='h1' fontSize={isNotSmallerScreen ? 'md' : '12px'} mb={4} fontFamily='Raleway'>{data?.nom}</Heading>
                        <Text fontSize={isNotSmallerScreen ? 'lg' : '10px'} mb={isNotSmallerScreen ? 8 : 4} fontWeight="semibold" fontFamily='Raleway' fontStyle="italic">{data?.metier}</Text><Spacer></Spacer>
                        <Text fontSize={isNotSmallerScreen ? 'md' : '10px'} mb={4} fontWeight="medium" fontFamily='Raleway' fontStyle="italic" color="#c0c0c0">{data?.description}</Text>
                    </Flex>

                </Flex>
                <Spacer></Spacer><Divider w="85%" display="flex" alignSelf="flex-end" mb={8} borderBottom="1px solid #808080"/>

                <Flex w={isNotSmallerScreen ? "100%" : "100%"} justifyContent="center" py={8} 
                fontSize={isNotSmallerScreen ? 'md' : '12px'} fontFamily='Raleway'>
                    <Box display="flex" flexDirection="column" gap={10} ml={isNotSmallerScreen ? 'none' : 16}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontWeight="bold" color="#7F7F7F" mb={4}>Experience</Text>
                            {dataExp?.map((item) =>(
                            <Box key={item.id_Experience}>
                                <Text fontWeight="semibold">{item.nom}</Text>
                                <Text color="#c0c0c0">{item.poste} | {item.annee}</Text>
                                {item.tache.split("\n").map((line, index) => (
                                <Text fontWeight="medium" key={index}>{line}</Text>
                                ))}
                            </Box>
                            ))}
                        </Box>

                    </Box>

                    <Box display="flex" flexDirection="column" gap={10} px={isNotSmallerScreen ? 16 : 4}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontWeight="bold" color="#7F7F7F" mb={4}>Education</Text>
                            {dataEd?.map((item) =>( 
                            <Box key={item.id_Comptence}> 
                                <Text fontWeight="semibold" >{item.nom}</Text>
                                <Text fontWeight="medium" color="#c0c0c0">{item.diplome}<br />
                                {item.annee}</Text>
                            </Box>
                            ))}
                        </Box>

                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontWeight="bold" color="#7F7F7F" mb={4}>Realisations</Text>
                            {dataProjet?.map((item) =>(
                            <Text fontWeight="medium" key={item.id_Projet}>{item.nom}<br/></Text>
                            ))}
                        </Box>

                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontWeight="bold" color="#7F7F7F" mb={4}>compétences</Text>
                            {dataCom?.map((item) =>( 
                            <Text fontWeight="medium" key={item.id_Comptence}>{item.nom}<br/></Text>
                            ))}
                        </Box>

                        <Box display="flex" flexDirection="column" gap={2}>
                            <Text fontWeight="bold" color="#7F7F7F" mb={4}>Logiciels et applications</Text>
                            {dataLog?.map((item) =>(
                                <Text fontWeight="medium" key={item.id_Logiciel}>
                                    {item.nom}<br/>
                                </Text>
                            ))}
                        </Box>
                    </Box>
                </Flex> 

                <Box id="exclude1">

                <Button colorScheme='blue' variant='outline' leftIcon={<FaDownload />}
                    onClick={handleDownload}
                    _hover={{ bg: "#0080ff", color: "white", transform: "translateY(-10px)" }} borderRadius='full' >
                    <Text fontSize={isNotSmallerScreen ? "20px" : "10px"}>Télécharger mon CV</Text>
                </Button></Box>



                <Box id="exclude1"><Foot></Foot></Box>
                <Box id="exclude1"><Social></Social></Box>
                <Footer></Footer>
            </VStack>

        </VStack>
    );
}

export default Cv;