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

let year_arrays = [
    { year: 2020 },
    { year: 2019 },
    { year: 2018 },
    { year: 2017 },
    { year: 2016 },
    { year: 2015 },
    { year: 2014 },
    { year: 2013 },
    { year: 2012 },
    { year: 2011 },
    { year: 2010 },
]

export default function LangFilter() {
  const classes = useStyles();
  const [ filterYear, setFilterYear ] = React.useState('');

  const handleChange = event => {
    setFilterYear(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterYear}
          onChange={handleChange}>
          {
              year_arrays.map(each => <MenuItem value={each.year} key={each.year}> {each.year} </MenuItem>)
          }
        </Select>
      </FormControl>
    </div>
  );
}