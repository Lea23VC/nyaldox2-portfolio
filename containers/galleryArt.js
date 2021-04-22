import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({

    title: {
        fontFamily: 'Supernett-cn',
        fontSize: '50px',
        '&:first-Letter': { //ASI SE USA SOLO LA PRIMERA LETRA AAAAA

            fontSize: "180%"
        },

        [theme.breakpoints.down("xs")]: {
            fontSize: "4vh"
        }
    },


 



}));

export default function ImgurGallery(id) {

    console.log("PROBANDO" + id.data)

    const classes = useStyles();


    return (


        <>

            <Grid container className={classes.containerIm}  justify="center" alignItems="center" spacing={2}>

                <Grid item xs={12} sm={12}>

                <Typography className={classes.title} variant='h2'>Mi arte</Typography>


                </Grid>

                {
                    id.data.map((data) =>
                        <Grid key={data.id} item xs={6} sm={4} md={3} lg={2} className={classes.imagesCon}>

                            <figure className={"wow fadeInUp"}>
                                <img className={classes.images}
                                    id="zoom-default"
                                    src={data.link}
                                    alt="Zoom with default options"
                                /></figure>

                        </Grid>
                    )
                }

            </Grid>
        </>


    )

}