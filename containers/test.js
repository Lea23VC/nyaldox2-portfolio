import {useSpring, animated} from 'react-spring'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import Typography from '@material-ui/core/Typography'

import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({ 


  

  card1: { 
    position: "relative",
    marginTop: "50px"
    
  },
  card2: { 
    
   top: "0",
    
    position: "absolute",
    
 
    
  },
  card3: { 
    top: "0",
    position: "absolute",
  
    

  },
  card4: { 
    top: "0",
    position: "absolute",
  
 
  
  },
  card5: { 
    
    top: "0",
    position: "absolute",
    
 
  },
  paper: {

    
    padding: "30px",
    display: "inline-block",
    position: "relative",
    backgroundColor: "white",
    borderRadius: "20px",
    
    
    

  },

  

});


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 20}px,${y /20}px,0)`
const trans2 = (x, y) => `translate3d(${x / 20}px,${y / 70 }px,0)`
const trans3 = (x, y) => `translate3d(${x / 20}px,${y / 25}px,0)`
const trans4 = (x, y) => `translate3d(${x / 20}px,${y / 20 - 80}px,0)`
const trans5 = (x, y) => `translate3d(${x / 20}px,${y / 30}px,0)`
export default function parallax() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const classes = useStyles();
  return(

    <>

  
      <Paper variant="outlined" className={classes.paper} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div  className={classes.card1} style={{ transform: props.xy.to(trans4) }} > 
      
      <Image
      
        src="/images/parallax/cielo.png"
        alt="Picture of the author"
        width={540}
        height={540}
      />
      
     
      </animated.div>
      <animated.div  className={classes.card5}  style={{ transform: props.xy.to(trans5) }} > 
      
      <Image
      
        src="/images/parallax/cerros.png"
        alt="Picture of the author"
        width={540}
        height={540}
      />
      
      
      </animated.div>


      <animated.div  className={classes.card4} style={{ transform: props.xy.to(trans1) }} > 
      
      <Image
      
        src="/images/parallax/Arbustos2.png"
        alt="Picture of the author"
        width={540}
        height={540}
      />

      </animated.div>

      
      <animated.div  className={classes.card3} style={{ transform: props.xy.to(trans2) }} > 
      
      <Image
      
        src="/images/parallax/arbusto1.png"
        alt="Picture of the author"
        width={540}
        height={540}
      />
      
      
      </animated.div> 



      <animated.div className={classes.card2}  style={{ transform: props.xy.to(trans3) }} > 
      
      <Image
      
        src="/images/parallax/pjs.png"
        alt="Picture of the author"
        width={540}
        height={540}
      />
      
      </animated.div>

    </Paper>
  
    </>

  )


}