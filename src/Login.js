import { useState } from "react";

function Login() {
  const id = "Nandha";
  const password = "123";

  const [loginid, setLoginId] = useState("");
  const [loginPassword, setPassword] = useState("");

  const [loginput, setLogInput] = useState(true);
  const [loginPage, setLoginPage] = useState(false);

  const [loginError,setLoginError] = useState(true)

  const nid = 0;

  console.log(nid);

  function handleusername(evt) {
    setLoginId(evt.target.value);
  }

  function handlepassword(evt) {
    setPassword(evt.target.value);
  }

  function idchecking() {
    const userCheck = id === loginid;
    const passCheck = password === loginPassword;

    const nid = userCheck === true && passCheck === true;

    setLogInput(!nid);
    setLoginPage(nid);

    nid?setLoginError(true):setLoginError(false)
  }

  return (
    <div>
      <h1>Login</h1>
      <h1 style={{ display: loginPage ? "block" : "none", color:"greenyellow" }}>Hello Nandha</h1>
      <h1 style={{ display: loginError ? "none" : "block", color:"red" }}>Wrong Username / Password</h1>
      <label style={{ display: loginput ? "block" : "none" }}>Username :</label>
      <input
        type="text"
        placeholder="Enter your Username..."
        style={{ display: loginput ? "block" : "none" }}
        onChange={handleusername}
        value={loginid}
      />
      <br />
      <label style={{ display: loginput ? "block" : "none" }}>
        Password :{" "}
      </label>
      <input
        type="text"
        placeholder="Enter your password..."
        value={loginPassword}
        onChange={handlepassword}
        style={{ display: loginput ? "block" : "none" }}
      />{" "}
      <br />
      <button
        style={{ display: loginput ? "block" : "none" }}
        onClick={idchecking}
      >
        Login
      </button>

      <h1 style={{ display: loginput ? "block" : "none" }}>The username is : Nandha</h1>
      <h1 style={{ display: loginput ? "block" : "none" }}>The Password is : 123</h1>
    </div>
  );
}

export default Login;
