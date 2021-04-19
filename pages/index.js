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


import mediumZoom from 'medium-zoom'


import Imgix from "react-imgix";

import 'react-medium-image-zoom/dist/styles.css'

const useStyles = makeStyles((theme) => ({


  imgurIm: {
    textAlign: 'center',
  }


}));

var caca = 'caca'
async function getLeagues () {
  var clienteID = '0411e68ef4ecf4e'
  return axios.get("https://api.imgur.com/3/gallery/album/bgKzyUd", {
    headers: {
      'authorization': 'Client-ID ' + clienteID
    }
  })
  .then(response => {
    return response.data
  })
  .catch(error => {
    console.log(error);
    return Promise.reject(error);
  });
}

getLeagues().then(response => {
  console.log(response);
});




async function getImages() {
  var clienteID = '0411e68ef4ecf4e'
  const res = await axios.get("https://api.imgur.com/3/gallery/album/bgKzyUd", {
    headers: {
      'authorization': 'Client-ID ' + clienteID
    }
  }

  );

  const data = await res.data;
  console.log(data);
  return data
}


const carlos = getLeagues();
console.log("carlos" + carlos)

export default function Home(prop) {

    



  if (typeof window !== "undefined") {
    const zoomScrollOffset = mediumZoom('#zoom-default', {
      scrollOffset: 0,
      background: 'rgba(25, 18, 25, .9)',
    })

  }


  const classes = useStyles();
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 3000 } })
  const propsDonut = useSpring({ value: 100, from: { value: 0 } })
  const [flipped, set] = useState(false)
  carlos.then((a) => {
    console.log("carlos 3 " + a);
  });

  

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

              <figure>
                <img
                  id="zoom-default"
                  src={data.link}
                  alt="Zoom with default options"
                  
                /></figure>


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


