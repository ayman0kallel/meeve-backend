import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';


function App() {
  return (
    <div >
      <Router>

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
