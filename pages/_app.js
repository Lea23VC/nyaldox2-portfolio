
import '../styles/globals.css'

import React, { useEffect, useState } from "react"

import * as ga from '../lib/ga'
import { useRouter } from 'next/router'


import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import HeadBar from '../containers/appbar'



export default function App({ Component, pageProps }) {


  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      background: {
      default: '#000000'
     },
     primary: {
       main: '#FFFFFF'
     }
    },
  
  
  typography: {
  
  fontFamily: 'Supernett-cn',
  },
  });
  
  const lightTheme = createMuiTheme({
  
    palette: {
      type: "light",
      background: {
        default: '#FFFFFF'
      },
      primary: {
        main: '#000000'
      }
    },
    typography: {
  
    fontFamily: 'Supernett-cn',
    },
  
  
  
  
  
  })
  
    const toggleDarkTheme = () => {
     
        if (theme.palette.type == "light") {
          setTheme(darkTheme)
        }
        else {
          setTheme(lightTheme)
        }
      
    };
    
  
    const [theme, setTheme] = useState({
      palette: {
        type: "dark",
        background: {
        default: '#000000'
       },
       primary: {
         main: '#FFFFFF'
       }
      },
    
    
    typography: {
    
    fontFamily: 'Supernett-cn',
    },
    });
  
    const muiTheme = createMuiTheme(theme);

    




  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (

    <>

  <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <HeadBar onToggleDark={toggleDarkTheme} />

    <Component {...pageProps} />

    </MuiThemeProvider>

    </>

  ) 
}

export function reportWebVitals(metric) {
  console.log(metric)
}