import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({

    root: {

        marginTop: "23vh",

        backgroundColor: "#fff9ff",
        zIndex: 2,
        position: "relative",


    },

    name: {
        color: "black",
    },

    divider: {
        backgroundColor: "yellow",
        height: "5px",
        width: "8%",
    }



}));



export default function curriculum() {

    const classes = useStyles();

    return (



        <>

            <title>Curriculum - Nyaldox2</title>
            <Box className={classes.root}>

                <Box>
                <Typography variant="h3" className={classes.name} >ALDO CABERRA ARRATIA <div>/</div></Typography>
                <Typography className={classes.name} >Animador Digital / Ilustrador</Typography>
                </Box>



                <Grid container>

                    <Grid item xs={6}>


                    </Grid>

                    <Grid container item xs={6}>

                        <Grid item xs={12}>

                        <Typography className={classes.name}> EXPERIENCIA LABORAL:</Typography>

                        <Divider className={classes.divider} /></Grid>

                        <Grid item xs={6}>

                        <Typography className={classes.name}>Periodo Diciembre 2015<br/>Enero y Febrero 2016 </Typography> </Grid>

                        <Grid item xs={6}>
                        <Typography className={classes.name}>Institución Hidromundo Ltda.<br/>Cargo: Manentación de bombas de agua </Typography></Grid>


                    </Grid>


                </Grid>
            </Box>
        </>

    )
}