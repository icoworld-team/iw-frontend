import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

// const settings = ["All users", "Only verified", "Only my follows", "Nobody"];

class SimpleDialog extends React.Component<any> {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = (value: string) => {
    this.props.onClose(value);
  };

  render() {
    const title = this.props.title || 'value';
    return (
      <Dialog onClose={this.handleClose} open={this.props.open}>
        <DialogTitle id="simple-dialog-title">{`Select ${title}`}</DialogTitle>
        <div>
          <List>
            {this.props.settings.map((setting:any) => (
              <ListItem
                button
                onClick={() => this.handleListItemClick(setting)}
                key={setting}
              >
                <ListItemText primary={setting} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

export default SimpleDialog;
