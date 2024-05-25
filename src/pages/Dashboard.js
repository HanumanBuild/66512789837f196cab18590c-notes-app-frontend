import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

// Dashboard component
function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // Fetch notes on component mount
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.get('/api/notes', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes', error);
      }
    };

    fetchNotes();
  }, []);

  // Handle form submission to create a new note
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axiosInstance.post('/api/notes', { content: newNote }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotes([...notes, response.data]);
      setNewNote('');
    } catch (error) {
      console.error('Error creating note', error);
    }
  };

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl">Your Notes</h1>
        <div>
          <button className="mr-4">Login</button>
          <button>Signup</button>
        </div>
      </header>
      <div className="flex">
        <div className="w-1/3">
          {notes.map((note) => (
            <div key={note._id} className="bg-white p-4 rounded shadow mb-4">{note.content}</div>
          ))}
        </div>
        <div className="w-2/3 ml-4">
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded"
              placeholder="Create New Note"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            ></textarea>
            <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Export the Dashboard component
export default Dashboard;