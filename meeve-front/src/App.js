import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import meeveTheme from './style/meeveTheme.js'; 

function App() {
  return (
    <ThemeProvider theme={meeveTheme}>
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
