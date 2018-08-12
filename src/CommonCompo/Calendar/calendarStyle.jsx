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

const calendarStyle = {
  container,
  section: {
    padding: '5px 5px'
  },
  container,
  marginAuto: {
    marginLeft: 'auto !important',
    marginRight: 'auto !important'
  },
  middle: {
    paddingTop: '5px !important',
    paddingBottom: '5px !important'
  }
}

export default calendarStyle
