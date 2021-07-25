import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
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

import SignUp from "./components/signup/SignUp";
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
                    {!isSignedIn && <>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/sign-up" className="nav-link">
                        Sign Up
                      </Link>
                    </li>
                    </>}
                    {isSignedIn && <>
                    <li className="nav-item">
                      <Link onClick={() => {
                          firebase.auth().signOut();
                        }}
                        className="nav-link">
                        Sign Out
                      </Link>
                    </li>
                    </>}
                  </div>
                </nav>
              <div>
                <div className="container mt-3">
                  <Switch>
                    {isSignedIn && <>
                    <Route exact path="/problems" component={ProblemsList} />
                    <Route exact path="/problems/:name" component={Problem} />
                    <Redirect exact from="/" to="/problems" />
                    <Redirect exact from="/login" to="/problems" />
                    </>}
                    {!isSignedIn && <>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Redirect exact from="/" to="/login" />
                    <Redirect exact from="/problems" to="/login" />
                    </>}
                  </Switch>
                </div>
              </div>
              <ToastContainer />
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
