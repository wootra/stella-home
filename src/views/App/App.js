import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "mdbreact/dist/css/mdb.css";
import SampleTests from "../../Samples";
import apigClient from "aws_api/react-apigClient";

import { connect } from "react-redux"
import { bindActionCreators } from "../../../node_modules/redux";
import { action_customers, action_customerById } from "../../actions/customerActions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
    this.loadData = this.loadData.bind(this);
  }
  componentDidMount() {
    this.props.action_customers();
    // const newClient = apigClient();

    // newClient.apiCustomerGet()
    //   .then(
    //     res => {
    //       if (res.data && res.data.output) {
    //         const customers = res.data.output;
    //         this.setState({ customers });
    //       } else {
    //         console.log(res);
    //       }

    //       return res;
    //     },
    //     e => console.log(e)
    //   )
    //   .catch(e => {
    //     console.log(e);
    //   });

    // try {
    //   fetch("https://gr2msmmekk.execute-api.us-east-2.amazonaws.com/dev/api/customer")
    //     .then(
    //       res => {
    //         console.log(res);
    //         return res;
    //       },
    //       e => console.log(e)
    //     )
    //     .then(res => res.json(), e => console.log(e))
    //     .then(customers => this.setState({ customers }), e => console.log(e));
    // } catch (e) {
    //   console.log("error when receiveing...");
    // }
  }

  loadData(id) {
    this.props.action_customerById(id);
    // const newClient = apigClient();
    // newClient.apiCustomerGet("/api/customer")
    //   .then(
    //     res => {
    //       if (res.data && res.data.output) {
    //         const customers = res.data.output;
    //         this.setState({ customers });
    //       } else {
    //         console.log(res);
    //       }

    //       return res;
    //     },
    //     e => console.log(e)
    //   )
    //   .catch(e => {
    //     console.log(e);
    //   });
    // try {
    //   //fetch(`https://gr2msmmekk.execute-api.us-east-2.amazonaws.com/dev/api/customer/${id}`)
    //   fetch(`https://gr2msmmekk.execute-api.us-east-2.amazonaws.com/dev/api/customer`)
    //     .then(
    //       res => {
    //         if (res.data && res.data.output) {
    //           const customers = res.data.output;
    //           this.setState({ customers });
    //         } else {
    //           console.log(res);
    //         }

    //         return res;
    //       },
    //       e => console.log(e)
    //     )
    //     .then(res => {
    //       res.json()
    //     }, e => console.log(e))
    //     .then(customers => {
    //       customers ? this.setState({ customers }) : ""
    //     }, e => console.log(e));
    // } catch (e) {
    //   console.log("error when receiveing...");
    // }
  }
  render() {
    let num = 0;
    let { customers } = this.props;
    if (!customers) customers = ["no records"];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ul>
            {customers
              ? customers.map(i => (
                <li key={"key_p_" + ++num}>
                  {i.firstName + " " + i.lastName}
                </li>
              ))
              : ""}
          </ul>
          <button onClick={e => this.loadData("all")}>All</button>
          <button onClick={e => this.loadData("1")}>1</button>
          <button onClick={e => this.loadData("2")}>2</button>
          <button onClick={e => this.loadData("3")}>3</button>
          <button onClick={e => this.loadData("4")}>4</button>
        </div>
        <SampleTests />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ action_customers, action_customerById }, dispatch);
}

function mapStateToProps({ customers }) {//customer 만 가져와서
  return { customers }; //customer: customer object로 리턴..
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
