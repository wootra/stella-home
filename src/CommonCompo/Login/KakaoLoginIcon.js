import React from 'react';
import KakaoLogin from 'react-kakao-login';
import kakaotalk from "./kakaotalk.svg";
import Button from "@material-ui/core/Button"
export default class KakaoLoginIcon extends KakaoLogin {

  render() {
    return this.props.render(this);
    // const { buttonClass, buttonComponent, buttonText, children } = this.props;

    // return (
    //   <Button
    //     className={this.props.className}
    //     onClick={this.onBtnClick}
    //   //style={{ backgroundColor: '#FFEB00' }}
    //   >
    //     {children}
    //   </Button>
    // );
  }
}
