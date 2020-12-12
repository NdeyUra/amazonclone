import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import "./Login.css";
import logo from "../Logo/images.png";
import fire from "../firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password).then(auth => {
      history.push('/');
    }).catch(e => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email, password).then((auth) => {
      console.log(auth);
      history.push('/');
    }).catch(e => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={logo} alt="" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          onClick={register}
          className="login__registerButton"
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
