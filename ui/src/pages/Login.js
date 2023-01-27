import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { login } from "../services/Auth";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginAsDefaultUser = async () => {
    const auth = await login(email, password);
    if (auth) {
      setError(false);
      setUser(auth);
      navigate("/");
    } else {
      setError(true);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="flex m-5  h-screen place-items-center justify-center">
        <div className="flex flex-col text-lg bg-blue-100 p-10 rounded-lg">
          <label>Email</label>
          <input type="email" onChange={onChangeEmail} className="mb-5 mt-3" />
          <label>Password</label>
          <input
            type="password"
            onChange={onChangePassword}
            className="mb-5 mt-3"
          />
          <button
            onClick={loginAsDefaultUser}
            className="text-lg m-5 bg-blue-400 rounded-md hover:bg-blue-200 active:bg-blue-500shadow-sm text-white text-sm font-medium"
          >
            Login
          </button>
          {error && <p>Invalid credentials</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
