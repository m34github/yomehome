import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Icon, Typography, withStyles } from '@material-ui/core';

import { check } from '../style';

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.location.state ? this.props.location.state.photo : null
    };
  }

  componentDidMount() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.setState({
        data: reader.result
      });
    });
    reader.readAsDataURL(this.state.photo);
  }

  judge() {
    this.props.judge(this.state.data);
  }

  render() {
    const { classes } = this.props;

    if (this.props.check.judged) {
      return (
        <Redirect to={{
          pathname: '/result',
          state: {
            keywords: this.props.check.keywords
          }
        }}
        />
      );
    }
    if (this.state.photo) {
      return (
        <article
          style={{
            background: `url(${this.state.data}) center / cover`,
            height: window.innerHeight,
            width: window.innerWidth
          }}
        >
          <section className={classes.message}>
            <Typography variant="title" className={classes.typography}>Is this OK?</Typography>
          </section>

          <section className={classes.back}>
            <Button variant="fab" href="/">
              <Icon>arrow_back</Icon>
            </Button>
          </section>

          <section className={classes.fab}>
            <Button color="secondary" variant="fab" onClick={() => { this.judge(); }}>
              <Icon>check</Icon>
            </Button>
          </section>
        </article>
      );
    }

    return (
      <Redirect to="/" />
    );
  }
}

Check.propTypes = {
  check: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  judge: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default withStyles(check)(Check);
