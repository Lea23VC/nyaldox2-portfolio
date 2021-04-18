import { useSpring, animated } from 'react-spring'
import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import Typography from '@material-ui/core/Typography'


import Grid from '@material-ui/core/Grid'



import range from 'lodash/range'



const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`



const items = range(3)
const useStyles = makeStyles((theme) => ({
    title: {

        fontFamily: 'Supernett-cn',


        '&:first-Letter': { //ASI SE USA SOLO LA PRIMERA LETRA AAAAA


            fontSize: "180%"
        },

        [theme.breakpoints.down("xs")]: {
            fontSize: "4vh"
        }


    },

    subtitle: {

        fontFamily: 'Supernett-cn',
        color: "white",
        [theme.breakpoints.down("xs")]: {
            fontSize: "3vh"
        }
    },

    a: {
        display: "inline-block",
        '&:first-Letter': { //ASI SE USA SOLO LA PRIMERA LETRA AAAAA


            fontSize: "180%"
        },

    },

    boton: {
        fontFamily: 'Supernett-cn',
        color: "white",
        fontSize: "30px",
        backgroundColor: "black",

        [theme.breakpoints.down("xs")]: {
            fontSize: "16px"
        }
    },

    fullGrid: {
        width: '100vw',
        height: '100vh',
        spacing: 0,
        justify: 'space-around',
        textAlign: 'center'
    },
    buttonGrid: {

    }




}));

export default function instagram() {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    const classes = useStyles();
    const { radians } = useSpring({
        to: useCallback(async next => {
            while (true) {
                await next({
                    radians: 2 * Math.PI,
                    reset: true,
                })
            }
        }, []),
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
    })


    const springImages = [
        {
            "key": "1",
            "image": "/images/spring/1.jpg",

        },
        {
            "key": "2",
            "image": "/images/spring/2.jpg",
        },
        {
            "key": "3",
            "image": "/images/spring/3.jpg",
        },
    ];



    return (

        <Grid container justify="center" alignItems="center">
            {
                springImages.map((data) =>



                    <animated.div className="script-bf-box" style={ {backgroundColor: 'red' }, { transform: radians.to(interp(data.key)) } }>


                        <Image
                            className={classes.ball}
                            src={data.image}
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                        />

                    </animated.div>


                )
            }
        </Grid>


    )


}