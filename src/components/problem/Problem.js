import React, { Component } from "react";
import Graph from "react-graph-vis";
import AttemptDataService from "../../firebase/AttemptDataService";
import { graphProblems } from '../../config/graphProblems/graphProblems'
import { useParams } from 'react-router-dom'

export default class Problem extends Component {
  constructor(props) {
    super(props);
    this.problemConfig = graphProblems.find(config => config.name == props.match.params.name)
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveAttempt = this.saveAttempt.bind(this);
    this.newAttempt = this.newAttempt.bind(this);

    this.state = {
      title: "",
      description: "",
      published: false,

      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveAttempt() {
    let data = {
      title: this.state.title,
      description: this.state.description,
      published: false
    };

    AttemptDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newAttempt() {
    this.setState({
      title: "",
      description: "",
      published: false,
      submitted: false,
    });
  }

  render() {
    return (
        <div>
            {this.problemConfig.name}
            {this.problemConfig.theory.text}
            <Graph
              options={graphOptions}
              graph={this.problemConfig.theory.graphAnimationExample.graph}
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
    dragView: false
  },
  height: "500px"
};