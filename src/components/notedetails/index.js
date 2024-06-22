import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SideBar from '../layout/sidebar';
import { IoMdArrowBack } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';

function NoteDetail() {
  const { index } = useParams();
  const [note, setNote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedTopic, setEditedTopic] = useState('');
  const [editedNote, setEditedNote] = useState('');
  const [editedImageUrl, setEditedImageUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNote(storedNotes[index]);
  }, [index]);

  const handleBack = () => {
    navigate('/notes');
  };

  const handleDelete = () => {
    setShowModal(true); // Show modal confirmation dialog
  };

  const confirmDelete = () => {
    let storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    storedNotes = storedNotes.filter((_, i) => i !== parseInt(index)); // Filter out the note at the specified index
    localStorage.setItem('notes', JSON.stringify(storedNotes));
    navigate('/notes'); // Navigate back to the notes list after deletion
  };

  const closeModal = () => {
    setShowModal(false); // Close modal
  };

  const handleEdit = () => {
    setEditing(true);
    setEditedTopic(note.topic);
    setEditedNote(note.note);
    setEditedImageUrl(note.imageUrl || '');
  };

  const saveChanges = () => {
    const editedNoteObj = {
      topic: editedTopic,
      note: editedNote,
      imageUrl: editedImageUrl,
    };
    let storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    storedNotes[index] = editedNoteObj; // Update the note at the specified index
    localStorage.setItem('notes', JSON.stringify(storedNotes));
    setNote(editedNoteObj); // Update local state with edited note
    setEditing(false); // Exit edit mode
  };

  if (!note) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4 md:p-8 w-full relative">
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <IoMdArrowBack className="mr-2" />
          </button>
          {!editing ? (
            <button
              onClick={handleEdit}
              className="hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 flex items-center"
            >
              <FaEdit className="mr-2" />
            </button>
          ) : (
            <div className="flex">
              <button
                onClick={() => setEditing(false)}
                className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg mr-2 hover:bg-gray-400 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={saveChanges}
                className="bg-[#4A4AFA] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
        <div>
          {editing ? (
            <>
              <input
                type="text"
                value={editedTopic}
                onChange={(e) => setEditedTopic(e.target.value)}
                placeholder="Enter your topic"
                className="block w-full mt-1 px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
              />
              <textarea
                value={editedNote}
                onChange={(e) => setEditedNote(e.target.value)}
                placeholder="Write something..."
                rows={10}
                className="block w-full mt-1 px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
              />
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-4">{note.topic}</h1>
              <p className="text-gray-700">{note.note}</p>
              {!editing && note.imageUrl && (
                <img
                  src={note.imageUrl}
                  alt="Note"
                  className="mt-4 h-auto w-[50%] rounded-lg shadow-md"
                />
              )}
            </>
          )}
        </div>

        {/* Delete Button */}
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 mt-4 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete Note
        </button>

        {/* Modal for confirmation */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-xl font-semibold mb-4 text-[#4A4AFA]">Are you sure you want to delete this note?</p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none"
                >
                  Yes
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteDetail;
