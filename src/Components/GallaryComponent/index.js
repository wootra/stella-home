import ReactDOM from "react-dom";
import React, { Component, createRef, PureComponent } from "react";
import PropTypes from "prop-types";
import sample from "./images/gallary_sample.jpg";
import StarRating from "components/StarRating";
import PERFECT from "faSvgExt/PERFECT.svg"
import VERY_GOOD from "faSvgExt/VERY_GOOD.svg"
import GOOD from "faSvgExt/GOOD.svg"
import SO_SO from "faSvgExt/SOSO.svg"
import NOT_BAD from "faSvgExt/NOT_BAD.svg"
import NOT_SO_GOOD from "faSvgExt/NOT_SO_GOOD.svg"
import NOT_GOOD from "faSvgExt/NOT_GOOD.svg"
import CAREFUL from "faSvgExt/CAREFUL.svg"
import WARNING from "faSvgExt/WARNING.svg"
import BAD from "faSvgExt/BAD.svg"
import withStyles from "@material-ui/core/styles/withStyles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";

import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
//import customDropdownStyle from "assets/jss/material-kit-react/components/customDropdownStyle.jsx";

import "./index.css";

const indexStyle = theme => ({
  popper: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing.unit,
  }
})

const trustLevels = [
  { name: "PERFECT", val: 0.9, icon: PERFECT },
  { name: "VERY GOOD", val: 0.8, icon: VERY_GOOD },
  { name: "GOOD", val: 0.7, icon: GOOD },
  { name: "NOT BAD", val: 0.6, icon: NOT_BAD },
  { name: "SO SO", val: 0.5, icon: SO_SO },
  { name: "NOT SO GOOD", val: 0.4, icon: NOT_SO_GOOD },
  { name: "NOT GOOD", val: 0.3, icon: NOT_GOOD },
  { name: "CAREFUL", val: 0.2, icon: CAREFUL },
  { name: "WARNING", val: 0.1, icon: WARNING },
  { name: "BAD", val: 0.0, icon: BAD },
];


export const AREA_IMG = "AREA_IMG";
export const AREA_TITLE = "AREA_TITLE";
export const AREA_INFO = "AREA_INFO";
export const AREA_PRICE = "AREA_PRICE";
export const AREA_STAR = "AREA_STAR";
export const MODE_PEEK = "MODE_PEEK";
export const MODE_EDIT = "MODE_EDIT";

const ALT_BASIC = "청기와 감자탕입니다. 환영합니다.";
const STORE_BASIC = "청기와 감자탕(본점)";
class TrustHelp extends PureComponent {
  render() {
    return (
      <div className="card card-body" style={{ width: "15em" }}>
        {
          trustLevels.map((item, idx) => {
            return (
              <div key={"trust-" + this.props.id + "_" + idx} className="row" style={{ fontSize: "0.5em" }}>
                <div className="col col-md-4"><span className="float-right">{(item.val + 0.1).toFixed(1)}~{item.val.toFixed(1)}</span></div>
                <div className="col col-md-2"><img src={item.icon} /></div>
                <div className="col col-md-auto"><span className="float-left">{item.name}</span></div>
              </div>
            )
          })
        }
      </div>
    )
  }

}
class GallaryComponent extends Component {

  static propTypes = {
    on_store_click: PropTypes.func,//(AREA_XXX, obj, id) 클릭 시 각 부위의 정보 제공
    id: PropTypes.string.isRequired, //id of gallary component 
    info: PropTypes.shape(  //구글에서 넘어오는 자료를 그대로 넘기면 이 안에서 처리.
      {
        img: PropTypes.string,
        alt: PropTypes.string,
        storeName: PropTypes.string,
        price: PropTypes.number,
        stars: PropTypes.number, //0.0~5.0
        trust: PropTypes.number, //0.0~1.0
      }),
    mode: PropTypes.oneOf([MODE_EDIT, MODE_PEEK]), //MODE_XXX - PEEK 모드는 수정 불가, EDIT 모드는 수정 가능
    className: PropTypes.string, //class
    popper_owner_ref: PropTypes.object, //popper 가 띄워질 div 의 ref 를 리턴. createRef 를 하여 만들어주면 된다.
    popper_owner_id: PropTypes.string,
  };

  static defaultProps = {
    on_store_click: null,
    info: {
      img: sample,
      alt: ALT_BASIC,
      storeName: STORE_BASIC,
      price: 1000,
      stars: 4.5,
      trust: 1.0,
    },
    mode: MODE_PEEK,
    className: "col-md-6"
  };

  /// 구글에서 넘어오는 코드를 이 콤포넌트에 맞게 매핑한다.
  static extractInfoFromProps(props) {
    let cardInfo = {};
    if (props.info) {
      cardInfo = { //임시 코드. props.info 가 어떤 형식이 될 지 모른다.
        img: (props.info.img) ? props.info.img : sample,
        alt: (props.info.desc) ? props.info.desc : ALT_BASIC,
        storeName: (props.info.storeName) ? props.info.storeName : STORE_BASIC,
        price: (props.info.price) ? props.info.price : 1000,
        stars: (props.info.stars) ? props.info.stars : 4.5,
        trust: (props.info.trust) ? props.info.trust : 1.0,
      }

    } else {
      cardInfo = {
        img: sample,
        alt: ALT_BASIC,
        storeName: STORE_BASIC,
        price: 1000,
        stars: 4.5,
        trust: 1.0,
      };
    }
    return cardInfo;
  }

  constructor(props) {
    super(props);
    this.state = {
      cardInfo: GallaryComponent.extractInfoFromProps(props),
      anchorEl: null,
    };
    this.handleClose = this.handleClose.bind(this);
    this.onTrustHelperOpen = this.onTrustHelperOpen.bind(this);
  }
  static getDerivedStateFromProps(state, props) {

    return { ...state, cardInfo: GallaryComponent.extractInfoFromProps(props) };
  }
  //fields: "address_component,icon,geometry,id,permanently_closed,photos,place_id,scope,types,opening_hours,open_now,price_level,rating",

  getTrustIcon(trust) {

    for (let i of trustLevels) {
      if (trust >= i.val) {
        return i.icon;
      }
    }
    return SO_SO;
  }


  onTrustHelperOpen(e) {
    this.setState({ anchorEl: e.target });

  }
  handleClose() {
    this.setState({ anchorEl: null });
  }
  onValueChanged(value) {
    console.log(`value is changed to ${value}`);
  }
  onStoreClick(area, e) {
    if (this.props.on_store_click) {
      this.props.on_store_click(area, this.state.cardInfo, this.props.id);
    }
  }
  render() {
    const { trustHelperOpen } = this.state;
    const ele = this.props.popperOwnerRef ? this.props.popperOwnerRef.current : null;
    const el2 = this.props.popperOwnerId ? document.getElementById(this.props.popperOwnerId) : null;
    const el3 = this.props.popperOwnerId ? document.querySelector("#" + this.props.popperOwnerId) : null;
    const dropup = true;

    const { classes } = this.props; //withStyles 사용 시 해당 style object가 classes 아래로 들어감.
    const { anchorEl } = this.state;
    const isAncorEl = Boolean(anchorEl); //무언가가 있으면 true 리턴..
    const id = this.props.id + "popper";
    return (

      <div>

        <div className="card" style={{ width: "18rem", height: "25rem" }}>

          <div className="card-img" onClick={e => this.onStoreClick(AREA_IMG, e)}>
            <img className="card-img-top" src={this.state.cardInfo.img} alt={this.state.cardInfo.alt} />
          </div>

          <div className="card-body">
            <h5 className="card-title">{this.state.cardInfo.storeName}</h5>
            <p className="card-text">{this.state.cardInfo.alt}</p>

            <div className="row">
              <div className="col col-md-10">
                <StarRating
                  id={this.props.id}
                  editable={this.props.mode === MODE_EDIT}
                  showLabel={true}
                  starMax={5}
                  OnValueChanged={(id, value) => this.onValueChanged(value)}
                  className="align-middle"
                ></StarRating>
              </div>
              <div className="col col-md-2 float-right">
                <div className="float-right">
                  <button
                    onMouseEnter={e => this.onTrustHelperOpen(e)}
                    onMouseLeave={e => this.handleClose()}
                    aria-describedby={id} variant="contained"
                    className="btn btn-link"
                  >
                    <div className="block">
                      <img
                        src={this.getTrustIcon(this.props.trust)}
                        style={{ width: "2em", height: "2em" }}

                      />
                    </div>
                    <div className="block">
                      <span style={{ fontSize: "0.5em" }}>{this.props.trust}</span>
                    </div>


                  </button>
                  <Popper
                    className={classes.popper}
                    open={isAncorEl}
                    id={id}
                    anchorEl={anchorEl}
                    placement="top-end"
                    onClose={this.handleClose}
                  //disableRestoreFocus
                  //transition
                  >
                    <ClickAwayListener onClickAway={this.handleClose}>
                      <Grow>
                        <TrustHelp />
                      </Grow>

                    </ClickAwayListener>

                  </Popper>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default withStyles(indexStyle)(GallaryComponent);

// static propTypes = {
//   id: PropTypes.string.isRequired,
//   editable: PropTypes.bool,
//   starMax: PropTypes.number,
//   stars: PropTypes.number,
//   showLabel: PropTypes.bool,
//   OnValueChanged: PropTypes.func, //(id, value)
// };