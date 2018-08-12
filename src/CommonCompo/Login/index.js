import React, { Component } from 'react'
import Modal from 'components/Modal'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle'
import LockOpenRounded from '@material-ui/icons/LockOpenRounded'
import DoneIcon from '@material-ui/icons/Done'
import BlockIcon from '@material-ui/icons/Block'

import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import image from 'assets/img/bg7.jpg'

// nodejs library that concatenates classes
import classNames from 'classnames'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { googleIcon } from '@fortawesome/fontawesome-free/svgs/brands/google.svg'
import { facebookIcon } from '@fortawesome/fontawesome-free/svgs/brands/facebook.svg'
import { faKakaoTalk } from 'faSvgExt'

import withStyles from '@material-ui/core/styles/withStyles'
//import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
//import Comment from "../Components/Comment";
import PropTypes from 'prop-types'

import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
//import KakaoLogin from "react-kakao-login";

import KakaoLoginWrap from './KakaoLoginIcon'
import DenyIcon from './baseline-highlight_off-24px.svg'
import CheckIcon from './baseline-check_circle-24px.svg'

import ButtonStyle from 'assets/jss/material-kit-react/components/buttonStyle.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import Card from 'components/Card/Card.jsx'
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Dialog,
  DialogTitle,
  Paper,
  Portal
} from '@material-ui/core'

import LoginStyle from './loginStyle'
import './loginStyle.css'
//library.add(faStroopwafel)
library.add(faKakaoTalk)
const WIN_LOGIN = 0
const WIN_TERM = 1

export const PROVIDER_FACEBOOK = 'FACEBOOK'
export const PROVIDER_GOOGLE = 'GOOGLE'
export const PROVIDER_KAKAO = 'KAKAO'

//add kakao style
ButtonStyle['kakao'] = {
  backgroundColor: 'yellow',
  color: '#000',
  boxShadow:
    '0 2px 2px 0 rgba(221, 221, 57, 0.14), 0 3px 1px -2px rgba(221, 221, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)',
  '&:hover,&:focus': {
    backgroundColor: '#ffff00',
    color: '#333',
    boxShadow:
      '0 14px 26px -12px rgba(221, 221, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 221, 57, 0.2)'
  }
}

class Login extends Component {
  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }
  handleToggle = name => event => {
    this.setState({ [name]: !this.state[name] })
  }

  state = {
    win: WIN_LOGIN, //0 : login, 1: policy
    modalClose: false, //modal close와 success 중 하나만 호출해야 함.
    success: false, //modal close와 success 중 하나만 호출해야 함.
    agree_term: false,
    email: '',
    password: '',
    openModal: false
  }
  constructor() {
    super()
    this.openLoginWin = this.openLoginWin.bind(this)
    this.openPolicyWin = this.openPolicyWin.bind(this)
    this.getLoginButtons = this.getLoginButtons.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  responseFacebook = response => {
    console.log(response)
  }

  responseKakao = response => {
    console.log(response)
  }

  responseGoogle = response => {
    console.log(response)
  }
  getFormData() {
    return {
      email: this.state.email,
      password: this.state.password,
      agree_term: this.state.agree_term
    }
  }
  onSubmit(e) {
    e.preventDefault()

    if (this.props.OnSubmit) this.props.OnSubmit(this.getFormData())
    else {
      console.log(this.getFormData())
    }
    this.setState({
      email: '',
      password: '',
      agree_term: false,
      success: true,
      openModal: false
    })
  }
  onCancel() {
    if (this.props.OnCancel) {
      this.props.OnCancel()
    } else {
      console.log('cancel!')
    }
    this.setState({
      win: WIN_LOGIN, //0 : login, 1: policy
      modalClose: false, //modal close와 success 중 하나만 호출해야 함.
      success: false, //modal close와 success 중 하나만 호출해야 함.
      email: '',
      password: '',
      agree_term: false,
      openModal: false
    })
  }
  onProvider(provider) {
    if (this.props.OnExternalLogin) {
      this.props.OnExternalLogin(provider)
    } else {
      console.log(`provider ${provider} selected`)
    }
    this.setState({ success: true })
  }
  componentDidUpdate() {
    if (this.state.modalClose || this.state.success)
      this.setState({ modalClose: false, success: false })
  }
  getLoginButtons() {
    const { classes } = this.props

    const googleClass = classNames({
      [classes.button]: true,
      [classes.google]: true
    })
    const facebookClass = classNames({
      [classes.button]: true,
      [classes.facebook]: true
    })
    const kakaoClass = classNames({
      [classes.button]: true,
      [classes.kakao]: true
    })
    return (
      <Grid container justify="flex-end" alignItems="center">
        <Grid item style={{ fontSize: '0.8em' }}>
          <GoogleLogin
            buttonText="Google"
            clientId="419601594675-1ntg62lg6mon23a1oi48gv5c1vl3nenh.apps.googleusercontent.com"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            render={p => (
              <Button
                color="transparent"
                onClick={p.onClick}
                //variant="fab"
                //className={googleClass}
              >
                <i
                  className="fab fa-google"
                  style={{ width: '1.2em', height: '1.2em', color: 'white' }}
                />
              </Button>
            )}
          />
        </Grid>
        <Grid item style={{ fontSize: '0.8em' }}>
          <FacebookLogin
            appId="209545089728777"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.responseFacebook}
            render={p => (
              <Button
                color="transparent"
                onClick={p.onClick}
                //variant="fab"
                //className={facebookClass}
              >
                <i
                  className="fab fa-facebook"
                  style={{ width: '1.2em', height: '1.2em', color: 'white' }}
                />
              </Button>
            )}
          />
        </Grid>
        <Grid item style={{ fontSize: '0.8em' }}>
          <KakaoLoginWrap
            jsKey="977a01fbc003a0b3444efcce67736af2"
            onSuccess={this.responseKakao}
            onFailure={this.responseKakao}
            getProfile={true}
            className={kakaoClass}
            render={p => (
              <Button
                //variant="fab"
                //className={kakaoClass}
                onClick={p.onBtnClick}
                color="transparent"
              >
                <FontAwesomeIcon
                  className="m-0 p-0"
                  icon={faKakaoTalk}
                  color="white"
                  style={{ width: '1.6em', height: '1.6em' }}
                />
              </Button>
            )}
          />
        </Grid>
      </Grid>
    )
  }
  getPolicyFooter() {
    return (
      <Grid container justify="flex-end">
        <Grid item>
          <Button
            color="transparent"
            //data-dismiss="modal"
            onClick={e => this.onCancel()}
          >
            <BlockIcon
              style={{ width: '2em', height: '2em', margin: '0.2em' }}
            />
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="transparent"
            onClick={e => {
              this.onClickSaveChanges()
              this.setState({ agree_term: true })
            }}
          >
            <DoneIcon
              style={{
                width: '2em',
                height: '2em',
                margin: '0.2em',
                color: 'green'
              }}
            />
            {
              //<img src={CheckIcon} style={{ width: "1.2em", height: "1.2em" }} />
            }
          </Button>
        </Grid>
      </Grid>
    )
  }
  onClickTerm() {
    this.setState({ win: WIN_TERM })
  }
  onClickSaveChanges() {
    this.setState({ win: WIN_LOGIN })
  }
  getId(label) {
    return this.props.id + '_login_' + label
  }
  openLoginWin() {
    let { classes } = this.props
    return (
      <div>
        <Card className={classes[this.state.cardAnimation]}>
          <CardHeader color="primary" className={classes.cardHeader}>
            <h4>Login</h4>
            <div className={classes.socialLine}>{this.getLoginButtons()}</div>
          </CardHeader>
          <CardBody>
            <form onSubmit={e => this.onSubmit(e)}>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField
                    id={this.getId('email')}
                    className={classes.textField}
                    value={this.state.email}
                    label="e-mail"
                    onChange={this.handleChange('email')}
                    type="email"
                    required
                  />
                  <span className="invalid-feedback" />
                </Grid>
              </Grid>

              <Grid
                container
                spacing={8}
                alignItems="flex-end"
                alignItems="center"
              >
                <Grid item>
                  <LockOpenRounded />
                </Grid>
                <Grid item>
                  <TextField
                    id={this.getId('password')}
                    className={classes.textField}
                    value={this.state.password}
                    label="Password"
                    onChange={this.handleChange('password')}
                    type="password"
                    required
                  />
                  <span className="invalid-feedback" />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          //placeholder="form-check-input"
                          type="checkbox"
                          checked={this.state.agree_term}
                          id={this.getId('invalidCheck')}
                          required
                          onChange={this.handleToggle('agree_term')}
                        />
                      }
                      label="Agree to terms and conditions"
                    />
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid container justify="flex-end">
                <Grid item md={8}>
                  <Button
                    size="small"
                    color="transparent"
                    onClick={e => this.onClickTerm()}
                  >
                    Join
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="primary" type="submit" outline="true">
                    <DoneIcon
                      style={{
                        width: '1.5em',
                        height: '1.5em',
                        color: '#33DD33'
                      }}
                    />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardBody>
        </Card>
      </div>
    )
  }
  openPolicyWin() {
    return (
      <Paper style={{ padding: '2em 2em 2em 2em' }}>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
        laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed
        consectetur. Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras
        justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
        porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum
        nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
        metus auctor fringilla. Cras mattis consectetur purus sit amet
        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean
        lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna,
        vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
        ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur
        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur
        et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
        auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
        cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
        Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
        ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
        nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
        laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed
        consectetur. Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </Paper>
    )
  }
  selectFooter() {
    if (this.state.win === WIN_LOGIN) return ''
    else if (this.state.win === WIN_TERM) return this.getPolicyFooter()
    return false
  }
  selectModal() {
    if (this.state.win === WIN_LOGIN) return this.openLoginWin()
    else if (this.state.win === WIN_TERM)
      return (
        <div>
          <DialogTitle id="simple-dialog-title">Term</DialogTitle>
          {this.openPolicyWin()}
          {this.getPolicyFooter()}
        </div>
      )
    else return null
  }
  hideCloseBtn() {
    if (this.state.win === WIN_LOGIN) return false
    else if (this.state.win === WIN_TERM) return true
  }
  title() {
    if (this.state.win === WIN_LOGIN) return ''
    else if (this.state.win === WIN_TERM) return 'Terms of the constract'
  }
  modalClass() {
    if (this.state.win === WIN_LOGIN)
      return {
        classes: { backgroundColor: 'transparent' }
      }
    else if (this.state.win === WIN_TERM) return {}
  }
  openModal(e) {
    this.handleToggle('openModal')(e)
  }
  modalFunc() {
    return (
      <Dialog
        open={this.state.openModal}
        id={this.getId('modal')}
        classes={{
          paper: this.state.win === WIN_LOGIN ? 'loginPaper' : '',
          root: this.state.win === WIN_LOGIN ? 'loginRoot' : ''
        }}
        PaperProps={{
          style:
            this.state.win === WIN_LOGIN
              ? { background: 'transparent', boxShadow: 'none' }
              : {}
        }}
        //title={this.title()}
        //btnTxt="Login1"
        //btnClass="btn-primary"
        //footer={this.selectFooter()}
        //closeModal={this.state.openModal}
        onClose={e => this.onCancel()}
        success={this.state.success}
        hideCloseBtn={this.hideCloseBtn()}
        style={{ background: 'transparent' }}
        //onRendered={this.selectModal}
      >
        {this.selectModal()}
      </Dialog>
    )
  }
  render() {
    let { children, btnColor, btnClass, btnStyle, ...rest } = this.props
    if (!btnColor) btnColor = 'primary'
    if (!btnClass) btnClass = ''
    if (!btnStyle) btnStyle = {}

    let renderedChild
    if (this.props.renderChild) {
      renderedChild = this.props.renderChild(this.openModal, this.modalFunc())
    } else {
      renderedChild = (
        <Button onClick={this.openModal}>Login{this.modalFunc()}</Button>
      )
    }

    return renderedChild
  }
}

Login.propTypes = {
  OnSubmit: PropTypes.func, //obj, {email:string, password:string}
  OnExternalLogin: PropTypes.func, // (provider) => PROVIDER_XXX
  OnCancel: PropTypes.func, //void
  renderChild: PropTypes.func, //(onClickEvent, children)
  btnColor: PropTypes.string,
  btnClass: PropTypes.string,
  btnStyle: PropTypes.object,
  className: PropTypes.string
}

export default withStyles({ ...ButtonStyle, ...LoginStyle })(Login)
