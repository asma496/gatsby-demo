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

 function Picavatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Travis Howard" src="https://themes.stackbit.com/demos/exto/images/sean_salazar.jpg" />
    </div>
  );
}
 export default Picavatar;