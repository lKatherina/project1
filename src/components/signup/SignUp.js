import {Link, Redirect} from 'react-router-dom';
import React, {Component} from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { toast } from 'react-toastify';

class SignUp extends Component {

  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange(event: SyntheticEvent<HTMLInputElement>) {
    this.setState({email: event.currentTarget.value});
  }

  handlePasswordChange(event: SyntheticEvent<HTMLInputElement>) {
    this.setState({password: event.currentTarget.value});
  }

  signUp(event: SyntheticEvent<HTMLInputElement>) {
    event.preventDefault();
    if (this.state.email.length >= 5 && this.state.password.length >= 5) {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            toast.error(errorMessage)
          });
    }
  }

  render() {
    return (
      <div className="text-center container h-100 flex-grow">
        <div className="row align-items-center h-100 flex-grow">
          <div className="col-lg-4 col-md-6 col-sm-8 col-xs-10 mx-auto">
            <form className="d-flex flex-column align-items-center form-signin" onSubmit={(e) => {
              this.signUp(e)
            }}>
              <h1 className="pt-5 mt-5 pb-3">Регистрация</h1>

              <label className="sr-only" htmlFor="inputEmail">Почта</label>
              <input
                type="email"
                id="inputEmail"
                className="form-control mb-3 mt-3 pl-4"
                style={{border: "none", fontSize: "14px", borderBottom: "1px solid #eee"}}
                placeholder="Email"
                onChange={(e) => {
                  this.handleEmailChange(e)
                }}
                required/>

              <label className="sr-only" htmlFor="inputPassword">Пароль</label>
              <input
                type="password"
                id="inputPassword"
                className="form-control mb-4 pl-4"
                style={{border: "none", fontSize: "14px", borderBottom: "1px solid #eee"}}
                placeholder="Password"
                onChange={(e) => {
                  this.handlePasswordChange(e)
                }}
                required/>

              <button className="btn btn-dark border-0 mt-3 mb-3 w-100 py-1"
                      style={{fontSize: "18px", background: '#37AAE9'}}
                      type="submit">
                Зарегистрироваться
              </button>

                <button className="btn btn-dark border-0 mb-3 w-100 py-1"
                  onClick={() => {
                    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                    firebase.auth().signInWithPopup(googleAuthProvider);
                  }}
                >
                  Зарегистрироваться с помощью Google
                </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default SignUp;