import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game, { Footer, Navbar } from './orchard';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme} from '@chakra-ui/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const customTheme = extendTheme(
  {
    styles: {
      global: {
        body: {
          bgGradient: 'linear(to-l, #CEF576, #84FB95)',
        }
      }
    }
  }
)

root.render(
  <ChakraProvider theme={customTheme}> 
    <Navbar />
    <Game />
    <Footer />
 </ChakraProvider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();