import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../layout/sidebar';

function NotesList() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleNewNote = () => {
    navigate('/note'); // Navigate to the new note creation page
  };

  const handleNoteClick = (index) => {
    navigate(`/note/${index}`); // Navigate to the full note view
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <SideBar />

      
      <div className="flex-1 bg-gray-100 p-4 md:p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Notes</h1>
        {notes.length === 0 ? (
          <p className="text-gray-600">No notes available.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {notes.map((note, index) => (
              <li
                key={index}
                className="py-4 cursor-pointer"
                onClick={() => handleNoteClick(index)}
              >
                <h2 className="text-xl font-semibold">{`${index + 1}. ${note.topic}`}</h2>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={handleNewNote}
          className="mt-6 bg-[#4A4AFA] text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add New Note
        </button>
      </div>
    </div>
  );
}

export default NotesList;
