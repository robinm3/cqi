import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { login } from "../services/Login";
import Button from "../shared/Button";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const loginAsDefaultUser = async () => {
    const auth = await login("some@email.com", "12345");
    if (auth) {
      setUser("some@email.com");
      navigate("/");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Login</h1>
      <Button onClick={loginAsDefaultUser}>Login</Button>
    </div>
  );
};

export default Login;
