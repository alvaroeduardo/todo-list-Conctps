import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

import Main from './Main' 

function MyApp() {
    return (
        <ChakraProvider>
            <Main/>
        </ChakraProvider>
    )
}

export default MyApp