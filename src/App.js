import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import firebase from 'firebase/app'
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { graphProblems } from './config/graphProblems/graphProblems';
import { firebaseConfig } from './config/firebase';

import Login from "./components/login/Login";
import Problem from "./components/problem/Problem";
import ProblemsList from "./components/problemsList/ProblemsList";

export const App = () => {
  return (
    <BrowserRouter>
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <div>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark px-5">
                  <a className="navbar-brand">
                    Graph Problem Solving
                  </a>
                  <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link onClick={() => {
                          firebase.auth().signOut();
                        }}
                        className="nav-link">
                        Sign Out
                      </Link>
                    </li>
                  </div>
                </nav>
              {!isSignedIn &&
                <Login/>
              }
              {isSignedIn &&
              <div>

                <div className="container mt-3">
                  <Switch>
                    <Route exact path={["/", "/problems"]} component={ProblemsList} />
                    <Route exact path="/problems/:name" component={Problem} />
                  </Switch>
                </div>
              </div>
              }
            </div>
            );
          }}
        </FirebaseAuthConsumer>
      </div>
    </FirebaseAuthProvider>
    </BrowserRouter>
  );
};
render(<App />, document.getElementById("root"));

export default App;
