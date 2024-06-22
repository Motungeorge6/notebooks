import {Routes, Route, BrowserRouter, } from 'react-router-dom';
import LoginPage from "./components/auth/login";
import SignUpPage from "./components/auth/signup";
import HomePage from './components/homepage';
import NewNotes from './components/noteTaking';
import NotesList from './components/noteslist';
import SideBar from './components/layout/sidebar';
import NoteDetail from './components/notedetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/note' element={<NewNotes />} />
        <Route path="/notes" element={<NotesList />} />
        <Route path="/" element={<NotesList />} /> {/* Default route */}
        <Route path="/note/:index" element={<NoteDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
