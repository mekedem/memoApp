import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Memolist from './Memolist';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Memodescription from './Memodescription';
import { connect } from 'react-redux';
import { showSearch } from '../actions/searchBarAction';
import {deleteMemo} from '../actions/memoAction';

const styles = {

  root:{
    width: '100%',
  },

  fabButton:{
    padding:'35px 0px 0px 0px',
  },

  sideroot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'white',
    margin: '10px 0 0 10px'
  },
  Sidecategory: {
    width: '90%',
    maxWidth: 360,
    backgroundColor: '#607D8B',
    margin: '10px 0 0 10px'
  }
  ,
  Sidetitle: {
    width: '90%',
    maxWidth: 360,
    backgroundColor: '#607D8B',
    margin: '20px 0 0 10px'
  },

  categoryText: {
    color: '#FFFFFF',
    margin: '0 0 0 15px'
  },
  categoryTitleText: {
    color: '#FFFFFF'
  },

  Avatar:{
    backgroundColor:'#263238'
  },

  memolistcontainer:{
    margin:'20px 0 0 0'
  }

};

const Home = (props) => {
  const { classes } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [selectedMemoId, setSelectedMemoId] = React.useState('0');

  const handleClose = () => {
    setOpen(false);
  };

  const passedItem = props.memos.find(obj => {
      return obj.memoId === selectedMemoId
    })

  const handleOpen = (id) => {
    setSelectedMemoId(id);
    setOpen(true);
  }

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  React.useEffect(() => {
    props.dispatch(showSearch());
  },[]);

  const handleDeleteMemo = (id) => {
    props.dispatch(deleteMemo({memoId:id}));
  }

  return (

  <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
    <div className={classes.sideroot}>
      <div className={classes.Sidetitle}>
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItem >
            <Typography className={classes.categoryTitleText}>Category</Typography>
          </ListItem>
        </List>
      </div>
      <div className={classes.Sidecategory}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}>
            <Avatar className={classes.Avatar}>23</Avatar>
            <Typography className={classes.categoryText}>All</Typography>
          </ListItem>
          <Divider />
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
          >
           <Avatar className={classes.Avatar}>30</Avatar>
            <Typography className={classes.categoryText}>Thoughts</Typography>
          </ListItem>

          <Divider />
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
          >
          <Avatar className={classes.Avatar}>13</Avatar>
            <Typography className={classes.categoryText}>Religious</Typography>
          </ListItem>
          <Divider />
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={event => handleListItemClick(event, 3)}>

          <Avatar className={classes.Avatar}>42</Avatar>
            <Typography className={classes.categoryText}>School</Typography>
          </ListItem>
          <Divider />
          <ListItem
            button
            selected={selectedIndex === 4}
            onClick={event => handleListItemClick(event, 4)}>

           <Avatar className={classes.Avatar}>77</Avatar>
            <Typography className={classes.categoryText}>Other</Typography>
          </ListItem>
        </List>
      </div>
    </div>
    </Grid>
        <Grid item xs={12} sm={8} className={classes.memolistcontainer}>
          <Memolist memos={props.memos} handleOpen={handleOpen} handleDeleteMemo={handleDeleteMemo}/>
          {open && <Memodescription open={open} handleClose={handleClose} passedItem={passedItem}/>}
        </Grid>
        <Grid item xs={12} sm={1} className={classes.memolistcontainer}>
        <div className={classes.fabButton}>
        <Fab color="primary" aria-label="add" onClick={() => { props.history.push('/AddMemo') }}>
        <AddIcon />
      </Fab>
      </div>
        </Grid>
        </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    memos: state.memos
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Home));
