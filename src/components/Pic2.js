import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

 function Pic2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Travis Howard"
       src="https://themes.stackbit.com/demos/exto/images/aubrey_hoover.jpg" /> Aubrey Hoover 
    </div>
  );
}
 export default Pic2;