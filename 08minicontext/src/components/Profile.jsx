import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext); // ye h access lene ki

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-600">
        <h2 className="text-xl font-semibold mb-2">Please login</h2>
        <p className="text-sm">You need to login to view your profile</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-64 bg-blue-100 rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-2">Welcome, {user.username}!</h1>
      <p className="text-gray-700">Email: {user.email}</p>
      <p className="text-gray-500 text-sm">Status: Logged in</p>
    </div>
  );
}

export default Profile;
