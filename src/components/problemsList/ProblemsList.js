import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { graphProblems } from '../../config/graphProblems/graphProblems'

export default class ProblemsList extends Component {

  render() {
    return (
        <div className="container pt-5 justify-content-center w-50">
            <div className="row h5 text-center">
                Выберите алгоритм для изучения:
            </div>
            {graphProblems && graphProblems.map((problemConfig) =>
                <div className="row pt-2">
                <Link to={`/problems/${problemConfig.name}/theory`} className="btn-dark btn">
                  {problemConfig.name}
                </Link>
                </div>
            )}
        </div>
    );
  }
}