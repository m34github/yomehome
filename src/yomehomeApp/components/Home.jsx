import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Icon, Typography, withStyles } from '@material-ui/core';

import { home } from '../style';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
    this.state = {
      loaded: false
    };
  }

  load(file) {
    console.log('load'); // eslint-disable-line
    this.setState({
      loaded: true,
      photo: file
    });
  }

  render() {
    const { classes } = this.props;

    if (this.state.loaded) {
      return (
        <Redirect to={{
          pathname: '/check',
          state: {
            photo: this.state.photo
          }
        }}
        />
      );
    }
    return (
      <article className={classes.article}>
        <section className={classes.message}>
          <Typography variant="title" className={classes.typography}>Upload your photo!</Typography>
        </section>

        <section className={classes.fab}>
          <input id="photo" type="file" accept="image/*" className={classes.input} onChange={(e) => { this.load(e.target.files[0]); }} />
          <label htmlFor="photo">
            <Button color="secondary" variant="fab" component="span">
              <Icon>photo_camera</Icon>
            </Button>
          </label>
        </section>
      </article>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(home)(Home);
