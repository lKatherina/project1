import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { graphProblems } from '../../config/graphProblems/graphProblems'

export default class ProblemsList extends Component {

  render() {
    return (
        <div className="container pt-5 justify-content-center w-50">
            <div className="row h5 text-center">
                This website is to assess and improve your graph problem solving skills.
                <br/>
                Please choose a graph problem to solve:
            </div>
            {graphProblems && graphProblems.map((problemConfig) =>
                <div className="row pt-2">
                <Link to={`/problems/${problemConfig.name}`} className="btn-dark btn">
                  {problemConfig.name}
                </Link>
                </div>
            )}
        </div>
    );
  }
}