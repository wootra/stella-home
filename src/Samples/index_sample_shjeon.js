/*
index.js 파일을 위한 샘플입니다.
팀원들은 각자 다른 index.js 파일을 가지고 테스트 부탁합니다.
이것은 테스트의 원활성을 위한 것입니다.

*/

import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import MapTest from "./MapTest";
import ActionSenderSample from "./ActionSenderSample";
import DropDownMenuSample from "./DropDownMenuSample";
import _ from "lodash";
import ReduxReceiverSample from "./ReduxReceiverSample";
import ReduxReceiverSample2 from "./ReduxReceiverSample2";
import ActionSenderReduxReceiverSample from "./ActionSenderReduxReceiverSample";
import FontAwesomeTest from "./FontAwesomeTest";
import LoginSample from "./LoginSample";
import GallaryCompoSample from "./GallaryCompoSample";
import StarRatingSample from "./StarRatingSample";
import CustomTabSample from "./CustomTabSample";


export default class SampleTestsShjeon extends Component {
  render() {
    const arrs = [
      { url: "/shjeon/samples/dropdown", text: "DropDown", class: [DropDownMenuSample] },
      { url: "/shjeon/samples/map", text: "Map", class: [MapTest] },
      { url: "/shjeon/samples/redux", text: "Redux", class: [ActionSenderSample, ReduxReceiverSample, ReduxReceiverSample2, ActionSenderReduxReceiverSample] },
      { url: "/shjeon/samples/fontawesome", text: "FontAwesome", class: [FontAwesomeTest] },
      { url: "/shjeon/samples/login", text: "Login", class: [LoginSample] },
      { url: "/shjeon/samples/gallaryCompo", text: "gallary-compo", class: [GallaryCompoSample] },
      { url: "/shjeon/samples/starRating", text: "Star rating", class: [StarRatingSample] },
      { url: "/shjeon/samples/custome_tab", text: "CustomTabs", class: [CustomTabSample] },
    ];

    return (

      <div className="card">
        <div style={{ float: "none" }}>

          {arrs.map(i => {
            return (
              <NavLink key={_.uniqueId("nav_")} to={i.url}>
                <button type="button" className="btn btn-secondary mx-0 my-0">
                  {i.text}
                </button>
              </NavLink>
            )
          })}

        </div>
        <div className="card-body">

          {arrs.map(item => {
            return (
              item.class.map(cls => {
                return <Route key={_.uniqueId("nav_")} path={item.url} component={cls} />
              })
            )
          })}

        </div>
      </div>

    );
  }
}
