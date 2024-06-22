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
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col w-full relative">
        <div className="p-8">
          <button onClick={handleBack} className="mb-4 bg-[#4A4AFA] text-white py-2 px-4 rounded">
            Back to Notes
          </button>
          <h1 className="text-2xl font-bold mb-4">{note.topic}</h1>
          <p>{note.note}</p>
          {note.imageUrl && (
            <img src={note.imageUrl} alt="Note" className="mt-2 w-24 h-auto" />
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteDetail;
