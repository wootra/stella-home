import React from 'react';
import KakaoLogin from 'react-kakao-login';
import kakaotalk from "./kakaotalk.svg";

export default class KakaoLoginCustom extends KakaoLogin {
  render() {

    const { buttonClass, buttonComponent, buttonText, children } = this.props;

    return (
      <button
        className='btn'
        onClick={this.onBtnClick}
        style={{backgroundColor: '#FFEB00'}}
      >
        <span style={{ color: "black" }}>Kakaotalk</span>
        <img src={kakaotalk} width="20" height="20" />
      </button>
    );
  }
}
