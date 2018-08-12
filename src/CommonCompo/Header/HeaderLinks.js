/*eslint-disable*/
import React from 'react'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import Login from 'CommonCompo/Login'
// @material-ui/icons
import { AppsOutlined, CloudDownload } from '@material-ui/icons'
import LockIcon from '@material-ui/icons/LockOpen'
// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'
import Button from 'components/CustomButtons/Button.jsx'

import headerLinksStyle from './headerLinksStyle.jsx'
import { Grid, Portal } from '@material-ui/core'

function HeaderLinks({ ...props }) {
  const { classes } = props
  let loginRef = null
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/">
          <Tooltip
            id="root-tooltip"
            title="go to home"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              Home
            </Button>
          </Tooltip>
        </Link>
      </ListItem>

      <Login
        renderChild={(e, c) => (
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              target="_blank"
              className={classes.navLink}
              onClick={e}
            >
              Login{c}
            </Button>
          </ListItem>
        )}
      />

      <ListItem className={classes.listItem}>
        <Link to="/toy">
          <Tooltip
            id="toy-tooltip"
            title="Stella's toy collection"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              target="_blank"
              className={classes.navLink}
            >
              Toy
            </Button>
          </Tooltip>
        </Link>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
