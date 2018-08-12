// import { container } from 'assets/jss/material-kit-react.jsx'
const conatinerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%'
}
const container = {
  ...conatinerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px'
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px'
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px'
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px'
  },
  paddingTop: 'calc(50%-400px)'
}

const homeStyle = {
  container,
  marginAuto: {
    marginLeft: 'auto !important',
    marginRight: 'auto !important'
  },
  brand: {
    color: '#FFFFFF',
    textAlign: 'left',
    userSelect: 'none'
  },
  title: {
    fontSize: '4.2rem',
    fontWeight: '600',
    display: 'inline-block',
    position: 'relative'
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px 0 0'
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  link: {
    textDecoration: 'none'
  },
  textCenter: {
    textAlign: 'center'
  },
  shadow: {
    textShadow:
      '6px 4px 5px rgba(0, 0, 0, 0.05), 6px -3px 15px rgba(0, 0, 0, 0.02), -2px 5px 7px rgba(0, 0, 0, 0.03)',
    backgroundImage:
      '-webkit-linear-gradient(top, #FFF8F7, #ffffff, #fff)' /* For Chrome and Safari */,
    backgroundImage:
      '-moz-linear-gradient(top, #FFF8F7, #ffffff, #fff)' /* For old Fx (3.6 to 15) */,
    backgroundImage:
      '-ms-linear-gradient(top, #FFF8F7, #ffffff, #fff)' /* For pre-releases of IE 10 */,
    backgroundImage:
      '-o-linear-gradient(top, #FFF8F7, #ffffff, #fff)' /* For old Opera (11.1 to 12.0) */,
    backgroundImage:
      'linear-gradient(to top, #FFF8F7, #ffffff, #fff)' /* Standard syntax; must be last */,
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text'
  },
  shadowSmall: {
    textShadow:
      '3px 2px 2px rgba(0, 0, 0, 0.2), 3px -1px 5px rgba(0, 0, 0, 0.08), -2px 2px 3px rgba(0, 0, 0, 0.12)'
  }
}

export default homeStyle
