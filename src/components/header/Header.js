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

export const Header = () => {
  return (
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
                <nav className="navbar navbar-expand navbar-dark bg-dark px-5">
                  <a className="navbar-brand">
                    Алгоритмы теории графов
                  </a>
                  <div className="navbar-nav mr-auto">
                    {!isSignedIn && <>
                    <li className="nav-item">
                      <Link to="/sign-up" className="nav-link">
                        Регистрация 
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">
                        Вход
                      </Link>
                    </li>
                    </>}
                    {isSignedIn && <>
                    <li className="nav-item">
                      <Link to="/problems" className="nav-link">
                        Список алгоритмов
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link onClick={() => firebase.auth().signOut() } className="nav-link">
                        Выйти
                      </Link>
                    </li>
                    </>}
                  </div>
                </nav>
            );
          }}
        </FirebaseAuthConsumer>
  );
};

export default Header;
