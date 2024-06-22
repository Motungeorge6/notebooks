import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../layout/sidebar";
import { IoMdAddCircleOutline } from "react-icons/io";

function NewNotes() {
  const [imageUrl, setImageUrl] = useState(null);
  const uploadInputRef = useRef(null);
  const [topic, setTopic] = useState('');
  const [note, setNote] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
    setShowButtons(true);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
    setShowButtons(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        const imageUrl = reader.result;
        setImageUrl(imageUrl);
      };
    }
  };

  const handleCancel = () => {
    setTopic('');
    setNote('');
    setImageUrl(null);
    setShowButtons(false);
  };

  const handleSave = () => {
    const newNote = { topic, note, imageUrl };
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    existingNotes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(existingNotes));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleGoHome = () => {
    navigate("/note");
  };

  const handleWriteNewNote = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4 md:p-8 overflow-y-auto">
        <div className="w-full md:w-5/6 mx-auto">
          <div className="bg-[#4A4AFA] flex flex-col justify-end rounded-lg shadow-lg m-0 h-[159px] mt-10 relative">
            <div className="w-full h-full flex flex-row justify-end items-center">
              <input
                type="file"
                id="uploadInput"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileChange}
                ref={uploadInputRef}
              />
              {imageUrl && (
                <div
                  className="bg-cover bg-center w-full h-full"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
              )}
              <div className="absolute top-0 right-0 mt-3 mr-3">
                <button
                  className="text-gray-500 font-bold py-2 px-4 rounded flex items-center"
                  onClick={() => uploadInputRef.current.click()}
                >
                  Upload Image
                  <div className="ml-2">
                    <IoMdAddCircleOutline />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={handleTopicChange}
              placeholder="Enter your topic"
              className="block w-full mt-1 px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-4">
            <textarea
              id="note"
              value={note}
              onChange={handleNoteChange}
              placeholder="Write something..."
              rows={10}
              className="block w-full mt-1 px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {showButtons && (
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCancel}
                className="bg-[#F7F7F7] text-[#000000] font-normal text-sm py-2 px-4 mr-4 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-[#4A4AFA] text-white font-normal py-2 px-4 rounded-lg"
              >
                Save
              </button>
            </div>
          )}

          {showModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <p className="text-xl font-semibold mb-4 text-[#4A4AFA]">Saved!</p>
                <div className="flex justify-end">
                  <button
                    onClick={handleGoHome}
                    className="bg-[#F7F7F7] text-[#000000] text-xs font-normal py-2 px-4 mr-4 rounded-xl"
                  >
                    Go Home
                  </button>
                  <button
                    onClick={handleWriteNewNote}
                    className="bg-[#4A4AFA] text-white font-normal text-xs py-2 px-4 rounded-xl"
                  >
                    Write New Note
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewNotes;
