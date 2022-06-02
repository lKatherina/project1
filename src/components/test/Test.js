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
        toast.error("Не удается отправить ваши результаты на сервер: " + e.message);
      });
  }

  render() {
    return (
        <div>
            <h2>{this.problemConfig.name} Тест</h2>
            <div>Пожалуйста, выберите следующее ребро, начиная с вершины 1, которое должен выбрать алгоритм. Продолжайте выбирать ребра до тех пор, пока алгоритм не будет завершен.</div>
            <Link to={`/problems/${this.problemConfig.name}/theory`} className="btn-dark btn mt-3">
              Обратно к теории
            </Link>
            <Graph
              options={graphOptions}
              graph={this.problemConfig.graphQuestion.graph}
              events={{
                selectEdge: (event) => {
                  if (this.state.alreadyFailed) {
                    toast.info("Тест уже провален.")
                    return;
                  }
                  if (this.state.alreadyPassed) {
                    toast.info("Тест уже пройден.")
                    return;
                  }
                  if (event.nodes.length !== 0) {
                    toast.info("Выбран узел. Пожалуйста, выберите вместо этого ребро.")
                    return;
                  }
                  if (event.edges.length > 1) {
                    toast.error("Не ожидается, что будет выбрано более 1 узла.")
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
                    toast.error("Тест не пройден.", { autoClose: false })
                    this.setState({alreadyFailed: true})
                    this.submitAttempt("FAILURE")
                    return;
                  }
                  if (this.state.possibleCorrectPaths.some((possibleCorrectPath) => possibleCorrectPath.length === this.state.currentPath.length)) {
                    toast.success("Тест сдан.", { autoClose: false })
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
    physics: false,
    width: 2
  },
  nodes: {
    font: {size: 25}
  },
  interaction: {
    dragNodes: false,
    dragView: false,
    zoomView: false
  },
  height: "800px"
};