import { login } from "../services/Login";
import Button from "../shared/Button";

const Login = () => {
  const loginAsDefaultUser = () => {
    login("some@email.com", "12345");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Login</h1>
      <Button onClick={loginAsDefaultUser}>Login</Button>
    </div>
  );
};

export default Login;
