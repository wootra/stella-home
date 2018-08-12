import React from 'react'
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
// core components

// custom modified components
import Header from '../../CommonCompo/Header/Header'
import HeaderLinks from '../../CommonCompo/Header/HeaderLinks'
import Footer from '../../CommonCompo/Footer/Footer'
import GridContainer from 'CommonCompo/Grid/GridContainer'
import GridItem from 'CommonCompo/Grid/GridItem'
// import Button from 'CommonCompo/CustomButtons/Button'
import Parallax from 'CommonCompo/Parallax/Parallax'

import HomeBody from './HomeBody'

// sections for this page
// import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import SectionBasics from "./Sections/SectionBasics.jsx";
// import SectionNavbars from "./Sections/SectionNavbars.jsx";
// import SectionTabs from "./Sections/SectionTabs.jsx";
// import SectionPills from "./Sections/SectionPills.jsx";
// import SectionNotifications from "./Sections/SectionNotifications.jsx";
// import SectionTypography from "./Sections/SectionTypography.jsx";
// import SectionJavascript from "./Sections/SectionJavascript.jsx";
// import SectionCarousel from "./Sections/SectionCarousel.jsx";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
// import SectionLogin from "./Sections/SectionLogin.jsx";
// import SectionExamples from "./Sections/SectionExamples.jsx";
// import SectionDownload from "./Sections/SectionDownload.jsx";

import homeStyle from './homeStyle.jsx'

class Home extends React.Component {
  getHeaderLinks () {
    return <HeaderLinks />
  }
  getLogo () {
    return (
      <img
        src={require('assets/img/stella/stella-logo-sm.png')}
        style={{ width: '30%', height: '30%' }}
      />
    )
  }
  render () {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          brand={this.getLogo()}
          rightLinks={this.getHeaderLinks()}
          fixed
          color="transparent"
          textColor="black"
          changeColorOnScroll={{
            height: 200,
            color: 'primary'
          }}
          {...rest}
        />

        <Parallax image={require('assets/img/stella/bg.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classNames([classes.title, classes.shadow])}>
                    Stella is pretty!
                  </h1>
                  <h3
                    className={classNames([
                      classes.subtitle,
                      classes.shadowSmall
                    ])}
                  >
                    <i>A Homepage of My pretty daugter Stella!</i>
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <HomeBody />
        <Footer />
      </div>
    )
  }
}

export default withStyles(homeStyle)(Home)
