import React, { useEffect, useState } from 'react'
import { updatePassword } from '../services/Auth'

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
          alert("Passwords do not match");
      }
      else{
        updatePassword(password);
        alert("Password changed successfully");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-10'>
          <div className="flex gap-5">
              <label htmlFor="password">New Password:</label>
              <input type="password" id="password" className="border-solid border-2 border-sky-500" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="flex gap-5">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" className="border-solid border-2 border-sky-500" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
          </div>
        <button type="submit" className="btn btn-primary">Change Password</button>
        </div>
      </form>
  )
}

export default ChangePassword;
