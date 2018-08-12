import React, { Component, createRef } from 'react';
import GallaryComponent, { MODE_EDIT } from "components/GallaryComponent"
import _ from "lodash";
export default class GallaryCompoSample extends Component {
  constructor(props) {
    super(props);
    //this.ownerRef = createRef();
    this.popperId = "popperBase";
  }
  state = {
    storeInfo: null,
    feedback: "",
  }
  componentDidMount() {
    let url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?';
    let params = {
      key: "AIzaSyD0fLXqX1Xodcz5QhzNQVSLaPijckxd8ug",
      input: "청기와 감자탕(본가), 경기도 안양시 동안구 호계2동 894", //
      inputtype: "textquery", //phonenumber - 미국위치는 잘 동작하나 한국 위치가 동작 안함.
      language: "ko",
      fields: "address_component,icon,geometry,id,permanently_closed,photos,place_id,scope,types,opening_hours,open_now,price_level,rating",
    }
    let full_url = url;
    for (let { key, val } in params) {
      full_url += key + "=" + val + "&";
    }
    try {
      fetch(full_url)
        .then(
          res => {
            console.log(res);
            return res;
          },
          e => console.log(e)
        )
        .then(res => res.json(), e => console.log(e))
        .then(customers => this.setState({ customers }), e => console.log(e));
    } catch (e) {
      console.log("error when receiveing...");
    }
  }

  onStoreClick(area, obj, id) {
    this.setState({
      feedback: id + " returned: AREA:" + area + "<br/>" + JSON.stringify(obj)
    })
  }
  render() {

    return (
      <div>
        <div id={this.popperId} ref={this.popperRef}></div>
        <span>Feed back: {this.state.feedback}</span> <br />
        <div className="container-fluid inline-block">

          <GallaryComponent className="col col-md-4 col-lg-3 col-sm-6" popper_owner_id={this.popperId} popper_owner_ref={this.popperRef} id="1" info={this.state.storeInfo} on_store_click={(a, b, c) => this.onStoreClick(a, b, c)}></GallaryComponent>
          <GallaryComponent className="col col-md-4 col-lg-3 col-sm-6" popper_owner_id={this.popperId} popper_owner_ref={this.popperRef} id="2" info={this.state.storeInfo} mode={MODE_EDIT} on_store_click={(a, b, c) => this.onStoreClick(a, b, c)}></GallaryComponent>
        </div>
      </div>
    );
  }
}
