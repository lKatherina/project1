import React, { Component } from "react";
import Graph from "react-graph-vis";
import AttemptDataService from "../../firebase/AttemptDataService";
import { graphProblems } from '../../config/graphProblems/graphProblems'
import { Link } from 'react-router-dom'

export default class Theory extends Component {
  constructor(props) {
    super(props);
    this.problemConfig = graphProblems.find(config => config.name == props.match.params.name)
  }

  async runGraphAnimationExample(network) {
    for (const edgeId of this.problemConfig.theory.graphAnimationExample.animationPath) {
        network.selectEdges([edgeId]);
        await this.timer(1000);
    }
    await this.timer(2000);
    this.runGraphAnimationExample(network)
  }

  timer = ms => new Promise(res => setTimeout(res, ms))

  render() {
    return (
        <div>
            <h2>{this.problemConfig.name} Теория</h2>
            <div>
              {this.problemConfig.theory.paragraphs.map(paragraph => (
                <p>
                  {paragraph}
                </p>
              ))}
            </div>
            <Link to={`/problems/${this.problemConfig.name}/test`} className="btn-dark btn mt-3">
              Пройти тест
            </Link>
            <Graph
              options={graphOptions}
              graph={this.problemConfig.theory.graphAnimationExample.graph}
              getNetwork={(network) => {
                this.runGraphAnimationExample(network);
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