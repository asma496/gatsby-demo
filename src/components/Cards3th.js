import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    height: 450,
    marginLeft:30,
  },
  media: {
    height: 210,
  },
  para:{
      marginTop:15,
  },
});

const Cards3th = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >

                <Grid item xs={4}> 
                <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://themes.stackbit.com/demos/exto/images/12.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Why Fonts Matter
          </Typography>
          <Typography variant="body2"  color="textSecondary" component="p">
          MARCH 27, 2019
          </Typography>
          <Typography variant="body2"  component="p" className={classes.para}>
          Amet nibh adipiscing adipiscing. Commodo ante vis placerat interdum 
          massa massa primis. Tempus condimentum tempus non ac varius cubilia 
          adipiscing placerat lorem.          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
                
                </Grid>














                <Grid item xs={4}> 
                
                <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://themes.stackbit.com/demos/exto/images/11.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          The Elements of Great Workplace Design
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          MARCH 24, 2019
</Typography>

          <Typography variant="body2"  component="p" className={classes.para}>
          Vis accumsan feugiat adipiscing nisl amet adipiscing accumsan blandit 
          accumsan sapien blandit ac amet faucibus aliquet placerat commodo.          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
                
                
                
                </Grid>






                <Grid item xs={4}> <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://themes.stackbit.com/demos/exto/images/8.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Understanding Street Photography
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          MARCH 10, 2019
</Typography>

          <Typography variant="body2"  component="p" className={classes.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ac ut consequat semper viverra.          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card> </Grid>

            </Grid>

        </div>
    )
}

export default Cards3th

