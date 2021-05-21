import React from 'react'

import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import clamp from 'lodash/clamp'
import { Typography } from '@material-ui/core';
const useStyles = makeStyles({

    parrentBall: {
        position: 'relative',
    },
    ball: {
        
        display: 'flex',
        whiteSpace: 'pre',
        cursor: 'grab',
        
        

        '&:active': {
            cursor: 'grabbing'
        }

    }


});

export default function Pull() {
    const classes = useStyles();
    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
    const bind = useGesture(({ down, delta, velocity }) => {
        velocity = clamp(velocity, 1, 8)

        set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
    })
    return (

        <>


            
            <animated.div  {...bind()} style={{ transform: xy.to((x, y) => `translate3d(${x}px,${y}px,0)`) }} >

            <Image
                className={classes.ball}
                src="/images/logo_nyaldox2.png"
                alt="Picture of the author"
                width={761 * 0.5}
                height={807 * 0.5}
                priority={true}
              />
            </animated.div>
            
        </>
    )
}

