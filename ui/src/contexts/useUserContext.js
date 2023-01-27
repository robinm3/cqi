import { useContext } from "react";
import { UserContext } from "./userContext";

export default () => {
  const context = useContext(UserContext);

  return context;
};
