"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/layout/Sidebar";

interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<string | null>(null); 
  const [editUser, setEditUser] = useState<Partial<User>>({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://66225f58wl.execute-api.us-east-2.amazonaws.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (user: User) => {
    setEditingUser(user.username);
    setEditUser(user);
  };

  const handleCancel = () => {
    setEditingUser(null);
    setEditUser({});
  };

  const handleSave = async (username: string) => {
    try {
      await axios.put(`https://66225f58wl.execute-api.us-east-2.amazonaws.com/users/${username}`, editUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.username === username ? { ...user, ...editUser } : user))
      );
      setEditingUser(null);
      setEditUser({});
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (username: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`https://66225f58wl.execute-api.us-east-2.amazonaws.com/users/${username}`);
        setUsers((prevUsers) => prevUsers.filter((user) => user.username !== username));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.username}>
                <td className="py-2 px-4 border-b">
                  {user.username}
                </td>
                <td className="py-2 px-4 border-b">
                  {editingUser === user.username ? (
                    <input
                      type="text"
                      value={editUser.firstName || user.firstName}
                      onChange={(e) => setEditUser({ ...editUser, firstName: e.target.value })}
                      className="p-2 border rounded"
                    />
                  ) : (
                    user.firstName
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editingUser === user.username ? (
                    <input
                      type="text"
                      value={editUser.lastName || user.lastName}
                      onChange={(e) => setEditUser({ ...editUser, lastName: e.target.value })}
                      className="p-2 border rounded"
                    />
                  ) : (
                    user.lastName
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editingUser === user.username ? (
                    <input
                      type="email"
                      value={editUser.email || user.email}
                      onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                      className="p-2 border rounded"
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editingUser === user.username ? (
                    <>
                      <button
                        onClick={() => handleSave(user.username)}
                        className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(user)}
                        className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.username)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default UserList;
