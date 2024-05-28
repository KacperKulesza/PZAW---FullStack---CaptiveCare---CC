import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();

    console.log(`${login}, ${password}`);
    if (login === "Administrator" && password === "2137") {
      setLogged(true);
    } else {
      console.log("Invalid login or password.");
    }
  }

  useEffect(() => {
    if (logged) {
      navigate("/", { state: { login, logged } });
    }
  }, [logged, navigate, login]); 

  return (
    <>
      <fieldset>
        <legend>Admin login</legend>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter a login..."
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter a password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </fieldset>
    </>
  );
}

export default Login;
