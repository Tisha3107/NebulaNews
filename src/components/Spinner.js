import React, { Component } from "react";
import Spinnergif from "./Spinnergif.gif";
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Spinnergif} alt="loading" height="60px" width="50px" />
      </div>
    );
  }
}

export default Spinner;
