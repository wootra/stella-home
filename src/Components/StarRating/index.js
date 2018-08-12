import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import './StarRating.css';
import _ from 'lodash';
import { observer } from 'mobx-react';
import { observable } from '../../../node_modules/mobx';
//import cx from 'classnames';


export default class StarRating extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    editable: PropTypes.bool,
    starMax: PropTypes.number,
    stars: PropTypes.number,
    showLabel: PropTypes.bool,
    OnValueChanged: PropTypes.func, //(id, value)
  };

  static defaultProps = {
    starMax: 5,
    stars: 3.5,
    editable: true,
    showLabel: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.stars,
      stop: true,//클릭 시 별이 터지는 효과 끝났는지..
      mouseOver: false,//마우스가 올라가 있을 때만 동작시키기 위함.
    };
    this.savedValue = props.stars; //초기값 저장..
    this.getEmptyStarStyle = this.getEmptyStarStyle.bind(this);
    this.getStarClass = this.getStarClass.bind(this);
    // this.OnStarClick = this.OnStarClick.bind(this);
    // this.OnMouseLeave = this.OnMouseLeave.bind(this);
    // this.OnMouseMove = this.OnMouseMove.bind(this);
    // this.OnMouseOver = this.OnMouseOver.bind(this);
  }
  componentDidMount() {
    //get 1em size 
    let temp = document.createElement('div');
    temp.style.width = "1000em";
    this.btnRef.current.appendChild(temp);
    this.emSize = temp.offsetWidth / 1000;
    this.btnRef.current.removeChild(temp);
    //this.preventEventOnChildren(this.btnRef.current);
  }
  preventEvent(e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;

  }
  preventEventOnChildren(element) {
    for (let child in element.children) {
      if (child.on) child.on('mousedown touchstart mousemove touchmove mouseup touched', this.preventEvent);

      this.preventEventOnChildren(child);
    }
  }
  OnMouseOver(e) {

    const rate = this.getStarRate(e.pageX);

    this.setState({ value: rate, stop: true, mouseOver: true });

    //e.stopPropagation();
  }

  getStarRate(mouseCursorLeft) {
    let x = mouseCursorLeft - this.btnRef.current.getBoundingClientRect().left - this.emSize;

    if (x < 0) x = 0;
    if (x > (this.btnRef.current.offsetWidth - this.emSize)) x = this.btnRef.current.offsetWidth - this.emSize;

    let rate = x * this.props.starMax / (this.btnRef.current.offsetWidth - (this.emSize * 2));
    return Math.round(rate * 2) / 2.0; //0.5 단위로 자름..

  }

  OnMouseMove(e) {
    const saved = this.state.value;

    const rate = this.getStarRate(e.pageX);
    if (Math.abs(rate - saved) > 0.2) {
      this.setState({ value: rate });
    };

    //e.stopPropagation();
  }

  OnMouseLeave(e) {

    this.setState({ value: this.savedValue, stop: true, mouseOver: false });

    //e.stopPropagation();
  }


  OnStarClick(e) {
    if (!this.props.editable) return;


    //console.log(rate);
    this.savedValue = this.state.value;

    this.setState({ stop: false });

    const { id } = this.props;
    this.props.OnValueChanged && this.props.OnValueChanged(id, this.savedValue);

    //e.stopPropagation();
  }

  getEmptyStarStyle(idx, value) {

    const num = value;
    const num2 = (idx + 1) - num;

    if (num2 < 0) {
      return {}; //empty star is invisible
    } else if (num2 < 1) {

      return { clipPath: `inset(0px ${(num2) * 100}% 0px 0px)` };
    } else {
      return {}; //empty star is invisible
    }
  }


  getStarClass(idx, value, stop, mouseOver) {
    const num = value;
    const num2 = (idx + 1) - num;
    if (num2 < 0) {
      return (stop || !mouseOver) ? "fixed full-star-stop align-middle" : "fixed full-star align-middle";
    } else if (num2 < 1) {
      return (stop || !mouseOver) ? "fixed half-star-stop align-middle" : "fixed half-star align-middle";
    } else {
      return "fixed empty-star align-middle";
    }
  }

  getStarColor() {
    if (this.props.editable) return "star-color-enable";
    else return 'star-color-disable';
  }
  getLinkStyle() {
    if (this.props.editable) return { cursor: "pointer", backgroundColor: "transparent" };
    else return { cursor: "default", backgroundColor: "transparent" };
  }
  render() {
    const {
      starMax,
      editable
    } = this.props;
    const { value } = this.state;

    let a = new Array(starMax); //map을 사용하기 위해 n개짜리 array 만듬..
    for (let i = 0; i < starMax; i++) {
      a[i] = i;
    }
    return (
      <div style={{ ...this.props.style }} className="d-inline-block px-0 mx-0 align-middle">
        <div
          ref={this.btnRef = createRef()}
          id={this.id = _.uniqueId('starRating_' + this.props.id)}
          onMouseDown={(editable && this.state.mouseOver) ? e => this.OnStarClick(e) : null}
          onMouseOver={editable ? e => this.OnMouseOver(e) : null}
          onMouseOut={editable ? e => this.OnMouseLeave(e) : null}
          onMouseMove={(editable && this.state.mouseOver) ? e => this.OnMouseMove(e) : null}
          style={this.getLinkStyle()}
          className="mx-0 px-1 d-inline-block align-middle" //1em padding for left and right
        >
          {
            a.map((val, idx) => {
              return (
                <div key={"_key_" + idx + this.props.id} className="d-inline-block align-middle"
                  style={{ ...this.props.style }}

                >
                  <div className={this.getStarClass(idx, this.state.value, this.state.stop, this.state.mouseOver)}
                    style={{ ...this.getEmptyStarStyle(idx, this.state.value) }}
                    onClick={e => this.OnStarClick(e)}
                  >
                    <i className={'fas fa-star ' + this.getStarColor()} onClick={e => this.OnStarClick(e)} />
                  </div>
                  <i className={'far fa-star ' + this.getStarColor()} onClick={e => this.OnStarClick(e)} />
                </div>
              );
            })
          }
        </div>
        {this.props.showLabel ? <span className="d-inline-block ml-1" style={{ fontSize: "0.85em" }}>{this.state.value.toFixed(1)}</span> : ""}
      </div>
    );

  }
}