import { useState } from "react";
import { signUp } from "../services/Auth";

const UserCreation = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [type, setType] = useState("Organisateur");
  const [success, setSuccess] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeType = (e) => {
    setType(e.target.value);
  };

  const createUser = async () => {
    try {
      await signUp(email, firstName, lastName, type);
      setSuccess(true);
      setEmail("");
      setFirstName("");
      setLastName("");
      setType("Organisateur");
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2 className="text-2xl">Création d'utilisateur</h2>
      <div className="">
        <div className="my-10">
          <div className="flex flex-col gap-4">
            <label>Prénom</label>
            <input
              type="text"
              onChange={onChangeFirstName}
              value={firstName}
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <label>Nom de famille</label>
            <input
              type="text"
              onChange={onChangeLastName}
              value={lastName}
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <label>Email</label>
            <input
              type="email"
              onChange={onChangeEmail}
              itemType="email"
              value={email}
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <label>Type</label>
            <select
              className="border-2 border-gray-300 p-3 rounded-md"
              onChange={onChangeType}
              value={type}
            >
              <option value="Organisateur">Organisateur</option>
              <option value="Bénévole">Bénévole</option>
              <option value="Premier Soin">Premier Soin</option>
              <option value="Sécurité">Sécurité</option>
            </select>
            <button
              onClick={createUser}
              className="bg-blue-500 text-white p-2 rounded-md disabled:bg-gray-200"
              disabled={!email || !firstName || !lastName || !type}
            >
              Créer l'utilisateur
            </button>
            {success && <p>Utilisateur créé avec succès!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCreation;
