import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import { hideSearch } from '../actions/searchBarAction';
import {addMemo} from '../actions/memoAction';

const styles = {
  root:{
    width:'100%'
  },
  card: {
    minWidth: 655,
    margin:'20px',
    marginLeft:'26%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: '20px',
    marginRight: '10px',
    width: 550,
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
  chooseCategory:{
   marginTop:'20px'
  },
  formControl:{
    marginLeft:'20px',
    width:'300px'
  },
  saveButton:{
    marginTop:'30px',
    marginLeft:'20px'
  }
}



const AddMemoForm = (props) => {
  const {classes} = props;
  const [memoTitle, setMemoTitle] = React.useState('');
  const [memoDescription, setMemoDescription] = React.useState('');
  const [memoCategory, setMemoCategory] = React.useState('');


  React.useEffect(() => {
    props.dispatch(hideSearch());
    console.log(props.memos);
  },[]);

  const onHandleMemoTitle = (e) => {
    const memoTitle = e.target.value;
    setMemoTitle(memoTitle);
  }
  const onHandleMemoDescription = (e) => {
    const memoDescription = e.target.value;
    setMemoDescription(memoDescription);
  }
  const onHandleMemoCategory = event => {
    const memoCategory = event.target.value;
    console.log(memoCategory);
    setMemoCategory(memoCategory);
  }

  const getCurrentDate = (separator='/') => {

      let newDate = new Date()
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();

      return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
  }

  const onSaveForm = (e) => {
    e.preventDefault();
    if (!memoTitle || !memoDescription) {
      alert("all required fields must be filled");
    } 
    else {
      props.dispatch(addMemo({
        memoId: props.memos.length,
        memoTitle: memoTitle,
        memoDescription: memoDescription,
        memoCategory: memoCategory,
        createdAt: getCurrentDate()
      }));

      props.history.push('/');

      }
  }

return(
  <div className={classes.root}>
  <form className={classes.container} autoComplete="off" >
  <Card className={classes.card}>
      <CardContent>
  <div>
    <TextField
      label="Title"
      rowsMax="2"
      className={classes.textField}
      InputLabelProps={{className:classes.labels}}
      inputProps={{className:classes.labels}}
      onChange={onHandleMemoTitle}
      margin="normal"/>
  </div>
  <div>
    <TextField
      label="Description"
      multiline
      rows="8"
      placeholder="description here ..."
      InputLabelProps={{className:classes.labels}}
      InputProps={{className:classes.labels}}
      className={classes.textField}
      onChange={onHandleMemoDescription}
      margin="normal"
      variant="outlined"/>
  </div>

      <div className={classes.chooseCategory}>    
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel >
          Categroy
        </InputLabel>
        <Select native onChange={onHandleMemoCategory}>
          <option value={'All'}>All</option>
          <option value={'Thoughts'}>Thoughts</option>
          <option value={'Knowladge'}>Knowladge</option>
          <option value={'add_new'}>add new category</option>
        </Select>
      </FormControl>
    </div>
    <div className={classes.saveButton}>
      <Button onClick={onSaveForm} color="primary" variant="contained">Save</Button>
    </div>
    </CardContent>
    </Card>
</form>

</div>
)  
}

const mapStateToProps = (state) => {
  return {
    memos: state.memos
  };
};

export default connect(mapStateToProps)(withStyles(styles)(AddMemoForm));