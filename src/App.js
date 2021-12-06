import { Canvas,  useFrame } from '@react-three/fiber' 
import {  OrbitControls } from '@react-three/drei'
import { Suspense, useRef } from 'react';
import './styles.css';
import { ChakraProvider, Box, Center, Text, Menu, MenuButton, IconButton,  MenuList, MenuItem, Link, isDisabled, isExternal} from '@chakra-ui/react'
import React from 'react';
import DataFetching from './DataFetching'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Eth from './Eth'
import {ExternalLinkIcon, HamburgerIcon} from '@chakra-ui/icons'
import { FaGithub, FaGooglePlay } from 'react-icons/fa';
import Logo from './Logo';

function MyAnimatedBox() {
  const eth = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() /3
    eth.current.rotation.y = a; // the value will be 0 at scene initialization and grow each frame
  })
  return (
    <mesh ref={eth}>
      <Eth/>
    </mesh>
  )
}



function App() {
  return (
  <ChakraProvider vh="120vh" >
  <Link zIndex="1000" to="/"><IconButton zIndex="999" _focus={{boxShadow: "none"}} size="md" _hover={{ bg: "none" }} _active={{ bg:"none"}} bg="none" position="fixed" top="2.5%" left="5%" icon={<Logo/>}></IconButton></Link>
  <Menu>
  <MenuButton
    position="fixed"
    bottom="3.5%"
    left="5%"
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <Link ><MenuItem isDisabled icon={<FaGooglePlay />}>
      Install App
    </MenuItem></Link>
    <Link isExternal href="https://github.com/ourbunka/ourGwei-source"><MenuItem icon={<FaGithub />}>
      Open Source
    </MenuItem></Link>
    <Link isExternal href="http://ourbunka.com"><MenuItem icon={<ExternalLinkIcon />} >
      ourbunka.com
    </MenuItem></Link>
    <Text color="grey"  fontSize="xs" marginLeft="12px" marginRight="12px">Design by OURBUNKA MOTION</Text>
    <Text marginLeft="12px" marginRight="12px" color="grey" fontSize="xs">
    Data Powered by Etherscan.io & ethgas.watch APIs  
    </Text>
  </MenuList>
</Menu>
  <ColorModeSwitcher position="fixed" bottom="3.5%" right="5%"/>
  <Center>
      <Box w="28rem" height="28rem" borderRadius="xl">
      <Canvas>
        <Suspense fallback={null}>
          <hemisphereLight/>
          <MyAnimatedBox/>
          <OrbitControls/>
        </Suspense>
        </Canvas>
        </Box>
        </Center>
    <Box>
      <DataFetching/>
   </Box>
  </ChakraProvider>
  );
}

export default App
