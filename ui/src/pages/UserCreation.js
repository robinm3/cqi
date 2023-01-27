import { useState } from "react";
import { signUp } from "../services/Auth";

const UserCreation = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [type, setType] = useState("");

  const createUser = async () => {
    await signUp(email, firstName, lastName, type);
  };

  return (
    <div>
      <h2 className="text-2xl">Création d'utilisateur</h2>
      <div className="">
        <form className="my-10">
          <div className="flex flex-col gap-4">
            <label>Prénom</label>
            <input
              type="text"
              onChange={setFirstName}
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <label>Nom de famille</label>
            <input
              type="text"
              onChange={setLastName}
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <label>Email</label>
            <input
              type="email"
              onChange={setEmail}
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <label>Type</label>
            <select className="border-2 border-gray-300 p-3 rounded-md">
              <option value="Organisateur">Organisateur</option>
              <option value="Bénévole">Bénévole</option>
              <option value="Premier Soin">Premier Soin</option>
              <option value="Sécurité">Sécurité</option>
            </select>
            <button
              onClick={createUser}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Créer l'utilisateur
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserCreation;
