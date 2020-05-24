import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

let sort_arrays = [
    { id: "Popularity.asc", name: "Popularity" },
    { id: "vote_average.asc", name: "Review" },
    { id: "vote_count.asc", name: "Votes" },
]

export default function LangFilter() {
  const classes = useStyles();
  const [ filterSort, setFilterSort ] = React.useState('');

  const handleChange = event => {
    setFilterSort(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterSort}
          onChange={handleChange}>
          {
              sort_arrays.map(each => <MenuItem value={each.id} key={each.id}> {each.name} </MenuItem>)
          }
        </Select>
      </FormControl>
    </div>
  );
}