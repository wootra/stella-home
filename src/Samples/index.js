import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import SampleTestsShjeon from "./index_sample_shjeon";
import SampleTestsHWNoh from "./index_sample_hwnoh";
import SampleTestsJSKim from "./index_sample_jskim";
import SampleTestsSYKim from "./index_sample_sykim";

import _ from "lodash";



export default class SampleTests extends Component {
  render() {
    const arr = [
      { url: "/shjeon", text: "전송현", class: [SampleTestsShjeon] },
	  { url: "/sykim", text: "김상윤", class: [SampleTestsSYKim] }, 
	  { url: "/hwnoh", text: "노행원", class: [SampleTestsHWNoh] },
	  { url: "/jskim", text: "김지성", class: [SampleTestsJSKim] },
    ];

    
    return (
      <BrowserRouter>
        <div className="card">
          <div style={{ float: "none" }}>

            {arr.map(i => {
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
            {arr.map(item => {
              return (
                item.class.map(cls => {
                  return <Route key={_.uniqueId("nav_")} path={item.url} component={cls} />
                })
              )
            })}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
