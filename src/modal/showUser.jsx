import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowUser = () => {
  const [users, setUsers] = useState([]);

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3001/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:3001/delete-user/${id}`);
        fetchUsers(); // Refresh user list after deletion
      } catch (err) {
        console.error('Error deleting user:', err);
        alert('Failed to delete user.');
      }
    }
  };

  return (
    <div className="p-10 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">All Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white rounded-lg">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className="border-t border-gray-700">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowUser;
