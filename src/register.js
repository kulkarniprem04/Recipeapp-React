import React from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = React.useState("");
  const navigate = useNavigate();
  // constructor() {
  //   super();
  //   this.state = {
  //     email: "",
  //     password: "",
  //     name: "",
  //   };
  // }

  const onNamechange = event => {
    setState({ ...state, name: event.target.value });
  };

  const onEmailChange = event => {
    setState({ ...state, email: event.target.value });
  };

  const onPasswordChange = event => {
    setState({ ...state, password: event.target.value });
  };

  const onRegistersubmit = () => {
    if (state.email === "" || state.name === "" || state.password === "") {
      setMsg("fields cannot be empty");
    } else {
      fetch(`http://localhost:5000/api/register`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
          name: state.name,
        }),
      })
        .then(response => response.json())
        .then(user => {
          if (user.name) {
            // props.loaduser(user);
            // props.onRouteChange("home");
            setMsg(user.message);
            navigate("/recipes");
            console.log(user);
          } else {
            console.log(user);
            setMsg(user.message);
          }
        });
    }
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <article className="br3 ba black b--black-20 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  type="name"
                  name="name"
                  id="name"
                  onChange={onNamechange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
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
            <div className="">
              <input
                onClick={onRegistersubmit}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
            <p id="submit_message" name="error_message">
              {msg}
            </p>
          </div>
        </main>
      </article>
    </div>
  );
};

export default Register;
