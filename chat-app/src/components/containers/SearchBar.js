import React from "react";
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
})

const SearchBar = ({ classes, onChange = f => f }) =>
  <div className='navigation__controls'>
    <input className='navigation__searchBar' type='search'></input>
  </div>
// <Input className='navigation__searchBar' placeholder="Search" onChange={(input) => { onChange(input.target.value) }} />


const styledSearchBar = withStyles(styles)(SearchBar)

export { styledSearchBar as SearchBar }