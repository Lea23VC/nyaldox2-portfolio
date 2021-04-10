import Head from 'next/head'
import React, { useEffect, useState } from "react";
import Typography from '@material-ui/core/Typography'
import {useSpring, animated} from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';

import Test from '../containers/test'



const useStyles = makeStyles({ 

  test: { 
    
    
    
  }



});


export default function Home() {

  const classes = useStyles();
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  const propsDonut = useSpring({ value: 100, from: { value: 0 } })
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  return (
    
    <>
    
    <div className={classes.test}>
    <animated.div style={props}><Typography align="center" variant="h1">Aldo Cabrera Arratia</Typography></animated.div>

    <Test/>
    </div>

    </>
  )
}
