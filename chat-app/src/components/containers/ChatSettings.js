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

const ChatSettings = ({ classes, onChange = f => f }) => {
  var avatar = require("/Users/admin/Chat/chat-app/src/resources/avatar.png");
  return (
    <Input placeholder="Search" className={classes.input} onChange={(input) => { onChange(input.target.value) }} />
  )
}

const styledChatSettings = withStyles(styles)(ChatSettings)

export { styledChatSettings as ChatSettings }