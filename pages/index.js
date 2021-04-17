import Head from 'next/head'
import React, { useEffect, useState } from "react";
import Typography from '@material-ui/core/Typography'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';

import Test from '../containers/test'


import First from '../containers/first'
import Instagram from '../containers/instagram'
import Grid from '@material-ui/core/Grid';
import Me from '../containers/me'
import Image from 'next/image'




const useStyles = makeStyles((theme) => ({

  



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


      <animated.div style={props}>
        <First/>

      </animated.div>

      <section id="me">
      <Me/>
      </section>






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
