import ReactCalendar from 'react-calendar'
import React from 'react'
import calendarStyle from './calendarStyle.jsx'
import withStyles from '@material-ui/core/styles/withStyles'
class Calendar extends ReactCalendar {
  render () {
    const { classes, className, style } = this.props
    const calClass = className || classes.container
    let myStyle = { ...style, border: 'solid 1px green' }

    return <ReactCalendar className={calClass} style={myStyle} />
  }
}
export default withStyles(calendarStyle, { withTheme: true })(Calendar)
