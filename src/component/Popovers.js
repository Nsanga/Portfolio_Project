import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Link, Flex} from "@chakra-ui/layout";
import { Image } from '@chakra-ui/image';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Button
  } from '@chakra-ui/react'


function WalkthroughPopover() {
    const initialFocusRef = React.useRef()

    const [isNotSmallerScreeen] = useMediaQuery("(min-width:600px)");

    return (
      <Popover
        placement='right'
      >
        <PopoverTrigger>
        <Button colorScheme='blue' variant='outline' mt={8}
          _hover={{ bg: "#0080ff", color: "white" }}>Discutons de votre projet</Button>
        </PopoverTrigger>
        <PopoverContent w="100%" color='white' bg='blue.800' borderColor='blue.800'>
          <PopoverArrow />
          <PopoverBody>
            <Flex gap={8} >
              <Link href="https://wa.me/237695592865" target="_blank" _hover={{ color: "green" }}><Image src="https://www.freepnglogos.com/uploads/whatsapp-logo-transparent-png-21.png" width={50} height={50}/></Link>
              <Link href="mailto:mercuremekinda@gmail.com" target="_blank" _hover={{ color: "green" }}><Image src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-portfolio-you-just-zealousyou-just-zealous-3.png" width={50} height={50}/></Link>
            </Flex>
          </PopoverBody>
          
        </PopoverContent>
      </Popover>
    )
  }
  export default WalkthroughPopover