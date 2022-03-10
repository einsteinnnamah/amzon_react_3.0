import React, { Component } from 'react'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'


const supportedChainIds = [4]
const connectors = {
    injected: {},
}

function MyApp({ component, pageProps }) {
    return (
    
        <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
        >
      <Component {...pageProps} />
      
    </ThirdwebWeb3Provider >
    )
}

export default MyApp;