import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    content:{
        padding:'20px 0px 0 0px'
    }
}

function MemoDescription(props){
  const {classes} = props;

  return (
    <div>
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{props.passedItem.memoTitle}</DialogTitle>
          <Divider/>
          <DialogContent>
          <DialogContentText className={classes.content}>
            {props.passedItem.memoDescription}
          </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button disabled={true} color="secondary">
              {props.passedItem.memoCategory}
            </Button>
            <Button disabled={true} color="secondary">
              {props.passedItem.createdAt}
            </Button>
            <Button onClick={props.handleClose} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(MemoDescription);