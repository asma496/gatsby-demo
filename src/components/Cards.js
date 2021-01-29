import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));



function Cards() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div>

            <Grid className='firsthead'
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={5}> <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Service Title
          </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                            <Typography variant="subtitle1" color="textSecondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl ligula,
                                cursus id molestie vel, maximus aliquet risus. Vivamus in nibh fringilla, fringilla.
          </Typography>

                        </div>
                    </div>
                </Card></Grid>




                <Grid item xs={1}></Grid>
                <Grid item xs={5}> <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Service Title
          </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                            <Typography variant="subtitle1" color="textSecondary">
                                Donec lobortis velit sed suscipit lobortis. Ut non quam metus. Nullam a maximus mi.
                                Quisque justo nunc, sollicitudin euismod euismod at, tincidunt ut tellus.
            </Typography>

                        </div>
                    </div>
                </Card></Grid>


            </Grid>


            <Grid className='firsthead'
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={5}> <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Service Title
          </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                            <Typography variant="subtitle1" color="textSecondary">
                            Sed laoreet magna commodo libero euismod sodales. Nunc ac libero convallis,
                             interdum ligula vel, pretium diam. Integer commodo sem at dui sollicitudin.          </Typography>

                        </div>
                    </div>
                </Card></Grid>




                <Grid item xs={1}></Grid>
                <Grid item xs={5}> <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Service Title
          </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                            <Typography variant="subtitle1" color="textSecondary">
                            Vestibulum a nunc ut eros condimentum posuere. Nullam dapibus quis nunc non interdum.
                             Pellentesque tortor ligula, gravida ac commodo eu.            </Typography>

                        </div>
                    </div>
                </Card></Grid>


            </Grid>





        </div>
    )
}

export default Cards
