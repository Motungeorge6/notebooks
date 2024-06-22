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
    navigate('/new-notes'); // Update the path to match the new notes path
  };

  const handleNoteClick = (index) => {
    navigate(`/note/${index}`); // Navigate to the full note view
  };

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col w-full relative">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Notes</h1>
          {notes.length === 0 ? (
            <p>No notes available.</p>
          ) : (
            <ul>
              {notes.map((note, index) => (
                <li key={index} className="mb-4 cursor-pointer" onClick={() => handleNoteClick(index)}>
                  <h2 className="text-xl font-semibold">{`${index + 1}. ${note.topic}`}</h2>
                </li>
              ))}
            </ul>
          )}
          <button onClick={handleNewNote} className="mt-4 bg-[#4A4AFA] text-white py-2 px-4 rounded">
            Add New Note
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotesList;
