import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import newsStyle from './newsStyle.jsx'
import TablePaginationActionsWrapped from './TablePaginationAction'
import {
  TableFooter,
  TablePagination
} from '../../../node_modules/@material-ui/core'
import * as scheduleActions from '../../actions/scheduleActions'

//import compose from 'recompose/compose'
import { bindActionCreators } from 'redux'
class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      rowsPerPage: 5
    }
    this.cellRefs = new Array(15)
    this.props.action_newsList(5)
    //this.props.action_newsCount()
  }

  elipsis(str, n) {
    return str.length > n ? str.substr(0, n - 1) + '&hellip;' : str
  }
  getDate(dateOrg) {
    const date = new Date(dateOrg)
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getYear() + 1900}`
  }
  onNewsTitleClick(id) {
    console.log(id)
  }
  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }
  onRowClick(obj, e) {
    console.log(this.cellRefs[obj.id].current)
    //console.log(e)
  }
  render() {
    const { classes, news } = this.props
    const { rowsPerPage, page } = this.state
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, news.list.length - page * rowsPerPage)

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableBody>
              {news.list.map((n, idx) => {
                return (
                  <TableRow key={'news' + n.id + idx}>
                    <TableCell
                      ref={ref => {
                        this.cellRefs[n.id] = ref
                      }}
                      component="th"
                      scope="row"
                    >
                      <div onClick={e => this.onRowClick(n, e)}>{n.title}</div>
                    </TableCell>
                    <TableCell>{this.getDate(n.date)}</TableCell>
                  </TableRow>
                )
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={2}
                  count={news.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    )
  }
}

News.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = ({ news }) => {
  return { news }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      action_editContent: scheduleActions.action_editContent,
      action_newsContent: scheduleActions.action_newsContent,
      action_newsContentByCond: scheduleActions.action_newsContentByCond,
      action_newsList: scheduleActions.action_newsList,
      action_patchContent: scheduleActions.action_patchContent,
      action_saveContent: scheduleActions.action_saveContent
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(newsStyle)(News))
