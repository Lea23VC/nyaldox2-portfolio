import Head from 'next/head'
import React, { useEffect, useState } from "react";
import Typography from '@material-ui/core/Typography'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';

import Test from '../containers/test'
import Instagram from '../containers/instagram'
import Grid from '@material-ui/core/Grid';

import Image from 'next/image'


const useStyles = makeStyles((theme) => ({

  title: {

    fontFamily: 'Supernett-cn',
    color: "white",
    '&:first-Letter': { //ASI SE USA SOLO LA PRIMERA LETRA AAAAA


      fontSize: "180%"
    },


  },

  subtitle: {

    fontFamily: 'Supernett-cn',
    color: "white",

  },

  a: {
    display: "inline-block",
    '&:first-Letter': { //ASI SE USA SOLO LA PRIMERA LETRA AAAAA


      fontSize: "180%"
    },

  },

  logo: {


  }




}));


export default function Home() {

  const classes = useStyles();
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 3000 } })
  const propsDonut = useSpring({ value: 100, from: { value: 0 } })
  const [flipped, set] = useState(false)


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




      <div className={classes.test}>
        <animated.div style={props}><Typography className={classes.title} align="center" variant="h1" >Aldo <div className={classes.a}>Cabrera</div> <div className={classes.a}>A.</div></Typography>

          <Typography className={classes.subtitle} align="center" variant="h2" >Animador Digital / Ilustrador</Typography>





        </animated.div>



        <Grid container justify="center">
          <Grid className={classes.logo} item >
            <animated.div style={props}>
              <Image

                src="/images/logo_nyaldox2.png"
                alt="Picture of the author"
                width={761 * 0.7}
                height={807 * 0.7}
              />
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
