import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link, link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width:"20%",
    backgroundColor:"black",
    height:200,
    borderRadius:"10px",
    
  },
  bullet: {
    
    margin: '2px 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color:"white"
  },
  
  pos: {
    marginBottom: 12,
    color:"white"
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div>
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="white" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Link to="/newvoter">
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        </Link>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
