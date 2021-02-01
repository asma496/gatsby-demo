import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css'
import Avatar from './Picavatar';
import Picavatar from './Picavatar';

const useStyles = makeStyles({
  root: {
    minWidth: 220,
    width:315,
    marginLeft:40,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Cards2th() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>

    <Grid item xs={4}>  <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl ligula, 
        cursus id molestie vel, maximus aliquet risus. Vivamus in nibh fringilla.

        </Typography>
        <Typography variant="body2" component="p">
            <Picavatar />
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  
</Grid>












    <Grid item xs={4}>  <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} >
        Vestibulum a nunc ut eros condimentum posuere. Nullam dapibus quis nunc non interdum.
         Pellentesque tortor ligula, gravida ac commodo eu.

</Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  

</Grid>
    
    
    
    
    
    
    
    
    
    
    
    
    <Grid item xs={4}>  <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} >
        Sed laoreet magna commodo libero euismod sodales. Nunc ac libero convallis, interdum ligula vel, pretium diam.        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  

</Grid>











</Grid>
        </div>
    )
}

export default Cards2th
