import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
export default class Modal extends Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    autoFocusId: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
    btnTxt: PropTypes.string,
    btnIcon: PropTypes.string,
    btnStyle: PropTypes.object,
    btnClass: PropTypes.string,
    footer: PropTypes.any,
    closeModal: PropTypes.bool, //modal 을 외부에서 닫을 때 true로 셋팅.
    success: PropTypes.bool, //modal이 닫히지만, OnClosed 호출을 안함.
    OnClosed: PropTypes.func,
    hideCloseBtn: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.getClassName = this.getClassName.bind();
    this.getIdName = this.getIdName.bind();
    this.getTitleName = this.getTitleName.bind();
    this.closeBtnRef = createRef();
    this.closed = false;

    this.state = {
      className: "#modalCenter_" + this.props.id,
      idName: "modalCenter_" + this.props.id,
      titleName: "exampleModalCenterTitle" + this.props.id,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      className: "#modalCenter_" + props.id,
      idName: "modalCenter_" + props.id,
      titleName: "exampleModalCenterTitle" + props.id
    };
  }

  componentDidUpdate() {
    if (this.props.closeModal === true && this.closed === false) {
      this.closeBtnRef.current.click();
      this.closed = true;
      this.onCloseClicked(null);
    } else if (this.props.closeModal === false || !this.props.closeModal) {
      if (this.props.success) {
        this.closeBtnRef.current.click();
        this.closed = true;
      } else {
        this.closed = false;
      }
    }
  }
  onCloseClicked(e) {
    if (!this.props.success || this.props.success === false) {
      this.closed = true;
      if (this.props.OnClosed) this.props.OnClosed();
      else console.log("Modal::OnClosed!");
    }
  }
  componentWillUnmount() {
    console.log("Modal::Unmount!");
    //this.closed = false;//initialize.
  }

  getClassName() {
    return "#modalCenter_" + this.props.id;
  }
  getIdName() {
    return "modalCenter_" + this.props.id;
  }
  getTitleName() {
    return "exampleModalCenterTitle" + this.props.id;
  }
  getFooter() {
    if (this.props.footer !== null) {
      if (typeof (this.props.footer) === false) {
        return "";
      }
      else
        return (
          <div className="modal-footer">
            {this.props.footer}
          </div>);
    } else {
      return (<div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={e => this.onCloseClicked(e)}>Close</button>
      </div>);
    }
  }
  render() {
    let btnIcon = (!this.props.btnIcon || this.props.btnIcon.length === 0) ? null : "fas fa-" + this.props.BtnIcon;
    let btnTxt = (!this.props.btnTxt || this.props.btnTxt.length === 0) ? "Login" : this.props.btnTxt;
    let btnClass = (!this.props.btnClass || this.props.btnClass.length === 0) ? "btn btn-primary" : "btn " + this.props.btnClass;

    return <div>

      <button type="button" className={btnClass} data-toggle="modal" data-target={this.state.className}>
        {btnIcon ? <i className={btnIcon}></i> : ""}
        {btnTxt}
      </button>


      <div className="modal fade" id={this.state.idName} tabIndex="-1" role="dialog" aria-labelledby={this.state.titleName} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={this.state.titleName}>{this.props.title}</h5>
              {!this.props.hideCloseBtn ? <button type="button" className="close" data-dismiss="modal" aria-label="Close" ref={this.closeBtnRef} onClick={e => this.onCloseClicked(e)}>
                <span aria-hidden="true">&times;</span>
              </button> :
                <a data-dismiss="modal" ref={this.closeBtnRef} onClick={e => this.onCloseClicked(e)}></a>
              }

            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            {this.getFooter()}
          </div>
        </div>
      </div>

    </div>;
  }
}
