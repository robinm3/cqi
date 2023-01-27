import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAsDefaultUser = async () => {
    // const auth = await login(email, password);
    /*if (auth) {
    }*/
    setUser({ email: "some@email.com", type: "Organisateur" });
    navigate("/");
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
        <form className="flex flex-col text-lg bg-blue-100 p-10 rounded-lg">
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
        </form>
      </div>
    </div>
  );
};

export default Login;
