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

 function Pic3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Travis Howard" 
      src="https://themes.stackbit.com/demos/exto/images/deegan_wallace.jpg" /> Deegan Wallace 
    </div>
  );
}
 export default Pic3;