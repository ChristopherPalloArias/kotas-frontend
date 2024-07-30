"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/layout/Sidebar';

export default function AddUser() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://66225f58wl.execute-api.us-east-2.amazonaws.com/users', {
        firstName,
        lastName,
        email,
        username,
        password,
      });
      if (response.status === 201) {
        router.push('/users/UserList');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Add User</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="font-medium">First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-2 border rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-2 border rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add User
          </button>
        </form>
      </main>
    </div>
  );
}
