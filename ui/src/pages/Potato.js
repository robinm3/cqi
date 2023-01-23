import { useState } from "react";
import { pingBackend } from "../services/BackendPinger";
import Button from "../shared/Button";

const Potato = () => {
  const [pingMessage, setPingMessage] = useState("");

  const test = async () => {
    console.log("Pinging backend");
    const message = await pingBackend();
    setPingMessage(message);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Potato</h1>
      <Button onClick={test}>Ping backend</Button>
      {pingMessage && <span>Ping received: {pingMessage}</span>}
    </div>
  );
};

export default Potato;
