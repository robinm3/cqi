import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const BasicLayout = () => {
  const user = useContext(UserContext);

  return (
    <>
      {user ? (
        <Navigate to={{ pathname: "/" }} />
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default BasicLayout;
