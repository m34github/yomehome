import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, withStyles } from '@material-ui/core';

import { common } from '../style';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: this.props.location.state ? this.props.location.state.keywords : null
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <article>
        <List component="nav">
          {
            Object.values(this.state.keywords).map(keyword => (
              <ListItem key={keyword} component="nav">
                <ListItemText primary={keyword} />
              </ListItem>
            ))
          }
        </List>
      </article>
    );
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withStyles(common)(Result);
