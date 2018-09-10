import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Card, CardActions, CardContent, CardHeader, Typography, withStyles } from '@material-ui/core';

import { result } from '../style';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: this.props.location.state ? this.props.location.state.tweet : null
    };
  }

  render() {
    const { classes } = this.props;

    const getFace = (pn) => {
      if (pn > 0.8) {
        return <i className="far fa-laugh-squint" style={{ fontSize: '2em', color: '#EC407A' }} />;
      } else if (pn > 0.5) {
        return <i className="far fa-laugh" style={{ fontSize: '2em', color: '#FFA000' }} />;
      } else if (pn > 0.2) {
        return <i className="far fa-meh" style={{ fontSize: '2em', color: '#009688' }} />;
      }
      return <i className="far fa-frown" style={{ fontSize: '2em', color: '#673AB7' }} />;
    };

    return (
      <article className={classes.article}>
        {
          Object.values(this.state.tweet).map(tw => (
            <section className={classes.card} key={tw.tweet_PN}>
              <Card>
                <CardHeader
                  title={<Typography variant="title">類似度: {tw.tweet_similarity * 20} %</Typography>}
                />
                <CardContent>
                  <Typography component="p">
                    {tw.tweet_text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color="primary">
                    コピー
                  </Button>
                  <section className={classes.icon}>
                    ポジネガ: {getFace(tw.tweet_PN)}
                  </section>
                </CardActions>
              </Card>
            </section>
          ))
        }

        <section className={classes.back}>
          <Button variant="fab" href="/">
            <Icon>arrow_back</Icon>
          </Button>
        </section>
      </article>
    );
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withStyles(result)(Result);
