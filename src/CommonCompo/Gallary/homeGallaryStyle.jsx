import { conatinerFluid } from 'assets/jss/material-kit-react.jsx'
const container = {
  ...conatinerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '686px'
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px'
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px'
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px'
  }
}

const homeGallaryStyle = {
  section: {
    padding: '5px 5px'
  },
  container,
  marginAuto: {
    marginLeft: 'auto !important',
    marginRight: 'auto !important'
  },
  middle: {
    width: 'calc(100%-10px)',
    height: 'calc(100%-10px)',
    padding: '5px 5px'
  }
}

export default homeGallaryStyle
