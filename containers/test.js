import {useSpring, animated} from 'react-spring'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'


import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({ 

  card1: { 

    
  },
  card2: { 
    
   

  

 

    position: "absolute",
    top: "350px"
    
  },
  card3: { 
    
    position: "absolute",
    backgroundPosition: "center",
    top: "350px"
    
  },
  card4: { 
    
    position: "absolute",
    backgroundPosition: "center",
  
    top: "150px"
  },
  card5: { 
    
    position: "absolute",
    backgroundPosition: "center",
  
    top: "180px"
  },
  paper: {

    padding: "50px",
    textAlign: 'center',
    backgroundColor: "grey",
    display: "flex",
    borderRadius: "20px",
    
    
    

  },

});


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 16 + 0}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 12 - 0}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 7}px,${y / 3.5}px,0)`
const trans5 = (x, y) => `translate3d(${x / 20 + 3.5}px,${y / 3.5}px,0)`
export default function parallax() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const classes = useStyles();
  return(

    <>
      <Paper className={classes.paper} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div  style={{ transform: props.xy.to(trans4) }} > 
      
      <Image
        src="/images/parallax/cielo.png"
        alt="Picture of the author"
        width={520}
        height={520}
      />
      
      
      </animated.div>

      <animated.div  className={classes.card5} style={{ transform: props.xy.to(trans5) }} > 
      
      <Image
        src="/images/parallax/cerros.png"
        alt="Picture of the author"
        width={520}
        height={520}
      />
      
      
      </animated.div>


      <animated.div className={classes.card4} style={{ transform: props.xy.to(trans1) }} > 
      
      <Image
        src="/images/parallax/Arbustos2.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />

      </animated.div>

      
      <animated.div className={classes.card3} style={{ transform: props.xy.to(trans2) }} > 
      
      <Image
        src="/images/parallax/arbusto1.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      
      
      </animated.div> 



      <animated.div className={classes.card2} style={{ transform: props.xy.to(trans3) }} > 
      
      <Image
        src="/images/parallax/pjs.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      
      </animated.div>

    </Paper>
    </>

  )


}