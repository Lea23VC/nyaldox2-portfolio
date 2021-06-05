
import '../styles/globals.css'

import React, { useEffect, useState } from "react"

import * as ga from '../lib/ga'
import { useRouter } from 'next/router'


import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import HeadBar from '../containers/appbar'

import { parseCookies, setCookie, destroyCookie } from 'nookies'


function GetTheme(theme) {
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



  if (theme == 'lightTheme') {
    return lightTheme
  }
  else {
    return darkTheme
  }

}


export default function App({ Component, pageProps }) {
  const cookies = parseCookies()
  console.log( cookies.theme )

  


  const toggleDarkTheme = () => {

    if (cookies.theme == "lightTheme") {
      setCookie(null, 'theme', 'darkTheme')
      console.log("a")
      setTheme(GetTheme('darkTheme')) //si uso GetTheme con el valor de la cookie luego de asignarla, por alguna razón no funciona hasta el segundo click
    }
    else {
      setCookie(null, 'theme', 'lightTheme')
      console.log("b")
      setTheme(GetTheme('lightTheme'))
    }

  };
  

  if (cookies.theme==null){
    setCookie(null, 'theme', 'darkTheme')
    
    
  }
  const [theme, setTheme] = useState(GetTheme(cookies.theme));




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

        <Component  {...pageProps} />

      </MuiThemeProvider>

    </>

  )
}

export function reportWebVitals(metric) {
  console.log(metric)
}