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

let country_arrays = [
    { name: "Australia", id: "AU" },
    { name: "Canada", id: "CA" },
    { name: "China", id: "CN" },
    { name: "Germany", id: "DE" },
    { name: "United Kingdom", id: "GB" },
    { name: "France", id: "FR" },
    { name: "India", id: "IN" },
    { name: "Italy ", id: "IT" },
    { name: "Japan", id: "JP" },
    { name: "Mexico", id: "MX" },
    { name: "United States of America", id: "US" },
]

export default function LangFilter() {
  const classes = useStyles();
  const [ filterCountry, setFilterCountry] = React.useState('');

  const handleChange = event => {
    setFilterCountry(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterCountry}
          onChange={handleChange}>
          {
              country_arrays.map(each => <MenuItem value={each.id} key={each.id}> {each.name} </MenuItem>)
          }
        </Select>
      </FormControl>
    </div>
  );
}