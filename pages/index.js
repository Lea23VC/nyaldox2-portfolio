import Head from 'next/head'
import React, { useEffect, useState } from "react";
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Test from '../containers/test'

import First from '../containers/first'
import Instagram from '../containers/instagram'
import Grid from '@material-ui/core/Grid';
import Me from '../containers/me'


import mediumZoom from 'medium-zoom'


const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

import 'react-medium-image-zoom/dist/styles.css'


import HeadBar from '../containers/appbar'


import GalleryArt from '../containers/galleryArt'

import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({




}));







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

  useEffect(() => {

  }, []);


  if (typeof window !== "undefined") { //client-side rendering para api que no soporten server-side
    window.WOW = require('wow.js');
    new WOW().init();
    console.log(window.WOW)
    const zoomScrollOffset = mediumZoom('#zoom-default', {
      scrollOffset: 0,
      background: 'rgba(25, 18, 25, .9)',
    })

  }



  const classes = useStyles();
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 3000 } })
  const propsDonut = useSpring({ value: 100, from: { value: 0 } })
  const [flipped, set] = useState(false)




  return (

    <>

      <Head>



        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />


        <meta name="title" content="Portafolio de Aldo Cabrera Arratia" />
        <meta name="description" content="Hola soy Aldo Cabrera" />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://daguito.online/" />
        <meta property="og:title" content="Portafolio de Aldo Cabrera Arratia" />
        <meta property="og:description" content="Hola soy Aldo Cabrera" />
        <meta property="og:image" content="" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://daguito.online/" />
        <meta property="twitter:title" content="Portafolio de Aldo Cabrera Arratia" />
        <meta property="twitter:description" content="Hola soy Aldo Cabrera" />
        <meta property="twitter:image" content="" />


        <title>Daguito</title>






        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />

        <link rel="shortcut icon" href="/images/favicon.png" />
        <link
          rel="preload"
          href="/fonts/Supernett-cn/Supernettcn-Condensed.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Supernett-cn/Supernettcn-LightCondensed.otf"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Supernett-cn/Supernettcn-BoldCondensed.otf"
          as="font"
          crossOrigin=""
        />





      </Head>

      <HeadBar />
      

      <animated.div style={props}>
        <First />

      </animated.div>

      <section id="me">
        <Me />
      </section>


      <GalleryArt data={imgs.data.data.images} />







      <div className={classes.test}>



        <Grid container justify="center">
          <Grid className={classes.logo} item >
            <animated.div style={props}>

            </animated.div>



          </Grid>


          <Grid item align="center" xs={12} lg={12} >
            <Test />
          </Grid>

          <Instagram dato="awoooo" />


        </Grid>





      </div>

    </>
  )
}

Home.getInitialProps = async function () {

  var clienteID = '0411e68ef4ecf4e'
  const res = await axios.get("https://api.imgur.com/3/album/24W2WJI", {
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


