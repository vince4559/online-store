import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from "react-router-dom"
import Context from './context/Context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Context>
      <BrowserRouter>
        <App />
    </BrowserRouter>
    </Context>
    </ChakraProvider>
  </React.StrictMode>
)
