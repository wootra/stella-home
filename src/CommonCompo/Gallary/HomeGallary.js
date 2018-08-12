import React, { createRef } from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import withWidth from '@material-ui/core/withWidth'

import classNames from 'classnames'
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import homeGallaryStyle from './homeGallaryStyle.jsx'
import image1 from 'assets/img/bg.jpg'
import image2 from 'assets/img/bg2.jpg'
import image3 from 'assets/img/bg3.jpg'
import { Grid } from '@material-ui/core'

class HomeGallary extends React.Component {
  constructor (props) {
    super(props)

    this.state = { paddingTop: 5 }
  }
  getContents (settings) {
    return (
      <Carousel {...settings}>
        <div>
          <img src={image1} alt="First slide" className="slick-image" />
          <div className="slick-caption">
            <h4>
              <LocationOn className="slick-icons" />Yellowstone National Park,
              United States
            </h4>
          </div>
        </div>
        <div>
          <img src={image2} alt="Second slide" className="slick-image" />
          <div className="slick-caption">
            <h4>
              <LocationOn className="slick-icons" />Somewhere Beyond, United
              States
            </h4>
          </div>
        </div>
        <div>
          <img src={image3} alt="Third slide" className="slick-image" />
          <div className="slick-caption">
            <h4>
              <LocationOn className="slick-icons" />Yellowstone National Park,
              United States
            </h4>
          </div>
        </div>
      </Carousel>
    )
  }
  render () {
    const { classes, width } = this.props
    let settings
    if (width === 'md') {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true
      }
    } else {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      }
    }

    const cardClass = classNames([classes.container, classes.middle])
    return (
      <Grid
        container
        justify="stretch"
        style={{ width: '100%', height: '100%' }}
        alignContent="center"
      >
        <Grid item md={11} alignContent="center">
          <Card
            carousel
            className={cardClass}
            style={{
              width: '100%'
            }}
          >
            {this.getContents(settings)}
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default withWidth()(withStyles(homeGallaryStyle)(HomeGallary))
