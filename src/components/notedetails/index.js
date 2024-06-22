import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SideBar from '../layout/sidebar';

function NoteDetail() {
  const { index } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNote(storedNotes[index]);
  }, [index]);

  const handleBack = () => {
    navigate('/notes');
  };

  if (!note) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4 md:p-8  w-full relative">
        <div className="mb-4">
          <button
            onClick={handleBack}
            className="bg-[#4A4AFA] text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Back to Notes
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{note.topic}</h1>
          <p className="text-gray-700">{note.note}</p>
          {note.imageUrl && (
            <img src={note.imageUrl} alt="Note" className="mt-4 h-auto w-[50%]  rounded-lg shadow-md" />
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteDetail;
