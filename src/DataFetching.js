import logo from './logo.svg';
import { Canvas, useLoader } from '@react-three/fiber' 
import { Environment, OrbitControls, Stars, useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react';
import './styles.css';
import { ChakraProvider, Box, Center, Text, Button, Stack, HStack} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching(){
  const [ethData, setEthData] = useState([])
  const [ethInstantData, setEthInstantData] = useState([])
  const [ethNormalData, setEthNormalData] = useState([])
  const [ethSlowData, setEthSlowData] = useState([])
  const [ethRealTimeData, setEthRealTimeData] = useState([])

useEffect(() => {refresh();}, [], console.log(ethData), console.log(ethInstantData), console.log(ethNormalData), console.log(ethSlowData))

const refresh = () => (
    axios.get(`https://ethgas.watch/api/gas`).then(res => { setEthInstantData(res.data.instant);setEthData(res.data);setEthNormalData(res.data.normal);setEthSlowData(res.data.slow) })
    .catch(err => {
      console.log(err)
    }), 
    axios.get(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey="ETHERSCAN API `).then(res => { setEthRealTimeData(res.data.result); console.log(res.data.result)})

  )



return(
    <Box>
    <Center>
    <Box w="20rem" borderRadius="md" p="3">
    <Text fontSize="xs" fontWeight="semibold" >eth price: ${ethData.ethPrice}</Text>
    <Text fontSize="sm"></Text>
    <Box className="stage" borderRadius="xl" p="3" mt="2%">
    <Text color="white" fontSize="32pt" fontWeight="bold" align="center">{ethRealTimeData.FastGasPrice} Gwei</Text>
    <Text color="white" fontSize="xs" align="center" >~ ${Math.round((((ethRealTimeData.FastGasPrice *21000  )/1000000000 *ethData.ethPrice) + Number.EPSILON )*100)/100}</Text>
    </Box>
    </Box>
    </Center>
    <Center>
    <Stack  w="20rem">
            <Center>
            <HStack space={3}  >
                <Box  p="2">
                <Text fontSize="xs" align="center">Average Instant</Text>
                
                <Box >
                <Text fontWeight="semibold" align="center">{ethInstantData.gwei} Gwei</Text>
                <Text fontSize="xs" align="center">~ ${ethInstantData.usd}</Text>
                </Box>
                </Box>

                <Box p="2">
                <Text fontSize="xs" align="center">Average Normal</Text>
                <Box>
                <Text fontWeight="semibold" align="center">{ethNormalData.gwei} Gwei</Text>
                <Text fontSize="xs" align="center">~ ${ethNormalData.usd}</Text>
                </Box>
                </Box>
            
            <Box  p="2">
                <Text fontSize="xs" align="center">Average Slow</Text>
            <Box>
                <Text fontWeight="semibold" align="center">{ethSlowData.gwei} Gwei</Text>
                <Text fontSize="xs" align="center">~ ${ethSlowData.usd}</Text>
            </Box>
            </Box>
        </HStack>
        </Center>
    </Stack>
    </Center>
    <Center >
    <Button size="sm" position="fixed" bottom="3.5%" variant="outline" colorScheme="blue" onClick={refresh}>Refresh</Button>
    </Center>
    </Box>
)
}

export default DataFetching
