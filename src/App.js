import {Routes, Route, BrowserRouter, } from 'react-router-dom';
import LoginPage from "./components/auth/login";
import SignUpPage from "./components/auth/signup";
import HomePage from './components/homepage';

function App() {
  return (
    <BrowserRouter>
<Routes>
    <Route path='/' exact element={<SignUpPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/home' element={<HomePage/>}/>
</Routes>
</BrowserRouter>
// {/* <HomePage/> */}
  );
}

export default App;
