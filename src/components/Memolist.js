import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  grid: {
      margin:'10px 0 0 10px'
  },
  deleteIcon:{
      margin:'0 0 0 250px'
  },
  desctext:{
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }
};

const Memolist = (props) => {
    const { classes } = props;

  return (
    <Grid container spacing={3}>
    {props.memos.map((memo) => {
   return <Grid item xs={12} sm={5} className={classes.grid}>
    <Card className={classes.card}>
        <CardContent onClick={() => props.handleOpen(memo.memoId)}>    
          <Typography gutterBottom variant="h5" component="h2" > {memo.memoTitle}</Typography>
          <Typography nowrap variant="body2" color="textSecondary" component="p" className={classes.desctext}>
            {memo.memoDescription}
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          {memo.createdAt}
        </Button>
        <IconButton onClick={() => props.handleDeleteMemo(memo.memoId)} className={classes.deleteIcon} edge="end" aria-label="delete">
            <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Grid>;
     })}
    </Grid>

  
  );
}

export default withStyles(styles)(Memolist);
