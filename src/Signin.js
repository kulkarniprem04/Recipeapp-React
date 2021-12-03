import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  // constructor() {
  //   super();
  //   state = {
  //     signinEmail: "",
  //     signinPassword: "",
  //   };
  // }
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

  const onEmailChange = event => {
    setState({ ...state, email: event.target.value });
  };

  const onPasswordChange = event => {
    setState({ ...state, password: event.target.value });
  };

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  const onSigninSubmit = () => {
    // const navigate = useNavigate();
    fetch(`http://localhost:5000/api/login`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    })
      .then(response => response.json())
      .then(message => {
        if (message.name) {
          // props.loaduser(user);
          // props.onRouteChange("home");
          setMsg(message.message);
          navigate("/recipes");
          console.log(message);
        } else {
          console.log(message);
          setMsg(message.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  // const { onRouteChange } = props;
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <article className="br3 ba black b--black-20 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white d-flex justify-content-center align-items-center">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 text-center">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={onPasswordChange}
                />
              </div>
            </fieldset>
            {/* <Link to="/recipes"> */}
            <div className="">
              <input
                onClick={onSigninSubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            {/* </Link> */} <p id="message">{msg}</p>
            <Link to="/register">
              <div className="lh-copy mt3">
                <p className="f6 link dim black db pointer">Register</p>
              </div>
            </Link>
          </div>
        </main>
      </article>
    </div>
  );
};

export default Signin;
