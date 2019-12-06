import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const styles =  {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    width: '150px',
    color:'white',
  },
  search: {
    backgroundColor: '#90A4AE',
    position: 'relative',
    borderRadius: '2px',
    marginRight: '25%',
    marginLeft: '20px',
    width: '50%',
  },
  searchIcon: {
    padding:'5px 0px 0px 0px',
    width: '75px',
    height: '80%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: '4px 4px 4px 70px',
    width: '100%',
  },
};

const Header = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar 
      position="static"
      style={{ backgroundColor: '#607D8B' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.grow}>
          <Link to="/" style={{textDecoration: 'none', color:'#FFFFFF'}}>My memos</Link> 
          </Typography>
          <div className={classes.search} style={{visibility: props.searchbar ? 'visible' : 'hidden' }}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchbar: state.searchbar
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Header));
