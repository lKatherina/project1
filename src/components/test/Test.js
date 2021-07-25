import React, { Component } from "react";
import Graph from "react-graph-vis";
import AttemptDataService from "../../firebase/AttemptDataService";
import { graphProblems } from '../../config/graphProblems/graphProblems'
import firebase from "firebase";
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.problemConfig = graphProblems.find(config => config.name == props.match.params.name)
    this.state = {
      currentPath: [],
      possibleCorrectPaths: this.problemConfig.graphQuestion.correctPaths,
      alreadyFailed: false,
      alreadyPassed: false,
    };
  }

  submitAttempt(result) {
    let data = {
      userId: firebase.auth().currentUser.uid,
      userEmail: firebase.auth().currentUser.email,
      problem: this.problemConfig.name,
      result: result,
      date: new Date().toGMTString()
    };

    AttemptDataService.create(data)
      .catch((e) => {
        console.log(e);
        toast.error("Cannot submit your results to the server: " + e.message);
      });
  }

  render() {
    return (
        <div>
            <h2>{this.problemConfig.name} Test</h2>
            <div>Please choose a next edge that the algorithm must choose. Keep choosing edges until the algorithm is done.</div>
            <Link to={`/problems/${this.problemConfig.name}/theory`} className="btn-dark btn mt-3">
              Back to Theory
            </Link>
            <Graph
              options={graphOptions}
              graph={this.problemConfig.graphQuestion.graph}
              events={{
                selectEdge: (event) => {
                  if (this.state.alreadyFailed) {
                    toast.info("The test is already failed.")
                    return;
                  }
                  if (this.state.alreadyPassed) {
                    toast.info("The test is already passed.")
                    return;
                  }
                  if (event.nodes.length !== 0) {
                    toast.info("A node is selected. Please select an edge instead.")
                    return;
                  }
                  if (event.edges.length > 1) {
                    toast.error("Not expected that more than 1 node is selected.")
                    return;
                  }
                  const selectedEdge = event.edges[0];
                  if (selectedEdge == this.state.currentPath[this.state.currentPath.length - 1]) {
                    return;
                  }
                  this.setState({currentPath: [...this.state.currentPath, selectedEdge]});

                  console.log(this.state);
                  for (let i = 0; i < this.state.currentPath.length; i++) {

                    this.setState({possibleCorrectPaths: this.state.possibleCorrectPaths
                        .filter((possibleCorrectPath) => possibleCorrectPath[i] === this.state.currentPath[i])})
                  }

                  if (this.state.possibleCorrectPaths.length == 0) {
                    toast.error("The test is failed.")
                    this.setState({alreadyFailed: true})
                    this.submitAttempt("FAILURE")
                    return;
                  }
                  if (this.state.possibleCorrectPaths.some((possibleCorrectPath) => possibleCorrectPath.length === this.state.currentPath.length)) {
                    toast.success("The test is passed.")
                    this.setState({alreadyPassed: true})
                    this.submitAttempt("SUCCESS")
                    return;
                  }
                }
              }}
            />
        </div>
    );
  }
}

const graphOptions = {
  layout: {
    hierarchical: true
  },
  edges: {
    color: "#000000",
    physics: false
  },
  interaction: {
    dragNodes: false,
    dragView: false,
    zoomView: false
  },
  height: "500px"
};