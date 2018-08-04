import React from "react";
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import {
  connect
} from "react-redux"
import { searchChannels } from '../../store/actions/searchActions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
})

const ChatSettings = ({ classes, onChange=f=>f}) => {
  var avatar = require("/Users/admin/Chat/chat-app/src/resources/avatar.png");
  return(
    <Input placeholder="Search" className = {classes.input} onChange = {(input) => { onChange(input.target.value) }}/>
  )
}

const mapStateToProps = ({
  messages
}, { match }) => {
  console.log('afdafdfafafffaf', match);
  
  return {
  messages
}}

const mapDispatchToProps = dispatch =>
        ({
          onChange(query) {
                dispatch(searchChannels(query))
            }
        })

const connectedChatSettings = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ChatSettings));

export { connectedChatSettings as ChatSettings }