import React, { Component } from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import withWidth from '@material-ui/core/withWidth'
import compose from 'recompose/compose'
// react components for routing our app without refresh
import Calendar from '../../CommonCompo/Calendar'
import HomeGallary from '../../CommonCompo/Gallary/HomeGallary'
import Hidden from '@material-ui/core/Hidden'
import News from '../../CommonCompo/News'
import homeStyle from './homeStyle.jsx'
import Grid from '@material-ui/core/Grid'

class HomeBody extends Component {
  render () {
    const { classes, ...rest } = this.props
    return (
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Grid
          container
          justify="center"
          alignItems="stretch"
          alignContent="stretch"
          direction="coloumn"
        >
          <Grid
            item
            sm={6}
            xs={12}
            md={6}
            lg={3}
            alignContent="center"
            style={{ padding: '1em' }}
          >
            <Calendar />
          </Grid>
          <Hidden mdUp={true}>
            <Hidden xsDown={true}>
              <Grid
                item
                sm={6}
                alignContent="center"
                style={{ padding: '1em' }}
              >
                <Calendar />
              </Grid>
            </Hidden>
          </Hidden>

          <Grid
            item
            alignContent="center"
            xs={12}
            sm={12}
            md={6}
            lg={4}
            style={{ padding: '1em' }}
          >
            <HomeGallary />
          </Grid>
          <Grid
            item
            alignContent="center"
            xs={12}
            sm={12}
            md={12}
            lg={5}
            style={{ padding: '1em' }}
          >
            <News />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default compose(
  withStyles(homeStyle), // props 에 classes 추가.
  withWidth() // props 에 width 추가
)(HomeBody)
