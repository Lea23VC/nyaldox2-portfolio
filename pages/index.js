import Head from 'next/head'
import React, { useEffect, useState } from "react";
import Typography from '@material-ui/core/Typography'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Test from '../containers/test'

import Link from 'next/link'
import First from '../containers/first'
import Instagram from '../containers/instagram'
import Grid from '@material-ui/core/Grid';
import Me from '../containers/me'
import Image from 'next/image'

import SpringReset from '../containers/spring-reset'


import Imgur from '../pages/api/imgur'


import Zoom from 'react-medium-image-zoom'

import ImageZoom from '../pages/api/ImageZoom'
import mediumZoom from 'medium-zoom'


import 'react-medium-image-zoom/dist/styles.css'

const useStyles = makeStyles((theme) => ({


  imgurIm: {
    textAlign: 'center',
  }


}));


export default function Home(prop) {


 
  if (typeof window !== "undefined") {
    const zoomDefault = mediumZoom('#zoom-default')

  }
    
  
  const classes = useStyles();
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 3000 } })
  const propsDonut = useSpring({ value: 100, from: { value: 0 } })
  const [flipped, set] = useState(false)

  console.log(prop.data.data.images)

  return (

    <>

      <Head>

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


      <animated.div style={props}>
        <First />

      </animated.div>

      <section id="me">
        <Me />
      </section>

      <Grid className={classes.imgurIm} container justify="center" alignItems="center" spacing={3}>

        {
          prop.data.data.images.map((data) =>



            <Grid key={data.id} item xs={3}>

             
              <Image
                id='zoom-default'
                className={classes.ball}
                src={data.link}
                alt="Picture of the author"
                width={761 * 0.5}
                height={807 * 0.5}
              />

            </Grid>

          )
        }

      </Grid>







      <div className={classes.test}>











        <Grid container justify="center">
          <Grid className={classes.logo} item >
            <animated.div style={props}>

            </animated.div>



          </Grid>


          <Grid item align="center" xs={12} lg={12} >
            <Test />
          </Grid>

          <Instagram />







        </Grid>







      </div>

    </>
  )
}


Home.getInitialProps = async function () {

  var clienteID = '0411e68ef4ecf4e'
  const res = await axios.get("https://api.imgur.com/3/gallery/album/bgKzyUd", {
    headers: {
      'authorization': 'Client-ID ' + clienteID
    }
  }

  );
  const data = await res.data;
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    data: data
  };
};

