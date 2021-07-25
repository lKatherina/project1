import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { graphProblems } from '../../config/graphProblems/graphProblems'

export default class ProblemsList extends Component {

  render() {
    return (
        <div>
            {graphProblems && graphProblems.map((problemConfig) =>
              <div>
                <Link to={`/problems/${problemConfig.name}`} className="nav-link">
                  {problemConfig.name}
                </Link>
              </div>
            )}
        </div>
    );
  }
}