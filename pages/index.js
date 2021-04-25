
import React, { useEffect, useState } from "react";
import { useSpring, animated } from 'react-spring'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import Test from '../containers/test'

import First from '../containers/first'
import Instagram from '../containers/instagram'
import Grid from '@material-ui/core/Grid';
import Me from '../containers/me'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import mediumZoom from 'medium-zoom'


const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

import 'react-medium-image-zoom/dist/styles.css'

import HeadTags from '../containers/HeadTags'

import HeadBar from '../containers/appbar'


import GalleryArt from '../containers/galleryArt'





//async function getImages() {
//var clienteID = '0411e68ef4ecf4e'
//const res = await axios.get("https://api.imgur.com/3/gallery/album/bgKzyUd", {
//headers: {
// 'authorization': 'Client-ID ' + clienteID
//}
//}

//);

//const data = await res.data;
//console.log(data);
//return data
//}



export default function Home(imgs) {


  // const [theme, setDarkMode] = useState(false);





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



  //const appliedTheme = createMuiTheme(theme ? lightTheme : darkTheme)




  useEffect(() => {

  }, []);


  if (typeof window !== "undefined") { //client-side rendering para api que no soporten server-side
    window.WOW = require('wow.js');
    new WOW().init();
    //console.log(window.WOW)
    const zoomScrollOffset = mediumZoom('#zoom-default', {
      scrollOffset: 0,
      background: 'rgba(25, 18, 25, .9)',
    })

  }



  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 3000 } })
  const propsDonut = useSpring({ value: 100, from: { value: 0 } })
  const [flipped, set] = useState(false)




  return (

    <>

      <HeadTags />
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />

        <HeadBar onToggleDark={toggleDarkTheme} />

        <animated.div style={props}>
          <First />
        </animated.div>

        <section id="me" >
          <Me />
        </section>


        <GalleryArt data={imgs.data.data.images} />

        <animated.div style={props}>

          <Test />

          <Instagram dato="awoooo" />

        </animated.div>


      </MuiThemeProvider>
    </>
  )
}

Home.getInitialProps = async function () {

  var clienteID = '0411e68ef4ecf4e'
  const res = await axios.get("https://api.imgur.com/3/album/dnOEw0A", {
    headers: {
      'authorization': 'Client-ID ' + clienteID
    }
  }

  );
  const data = await res.data;
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    data
  };
};


