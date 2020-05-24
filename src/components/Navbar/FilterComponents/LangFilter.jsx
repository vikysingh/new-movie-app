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

let lang_arrays = [
    { id: "en", name: "English" },
    { id: "it", name: "Italiano - Italian" },
    { id: "da", name: "Dansk - Danish" },
    { id: "de", name: "Deutsch - German" },
    { id: "fr", name: "Français - French" },
    { id: "ja", name: "日本語 - Japanese" },
    { id: "pt", name: "Português - Portugues" },
    { id: "hi", name: "हिन् - Hindi" },
]

export default function LangFilter() {
  const classes = useStyles();
  const [ filterLang, setFilterLang] = React.useState('');

  const handleChange = event => {
    setFilterLang(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterLang}
          onChange={handleChange}>
          {
              lang_arrays.map(each => <MenuItem value={each.id} key={each.id}> {each.name} </MenuItem>)
          }
        </Select>
      </FormControl>
    </div>
  );
}