import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {NavBar} from "./components/nav-bar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import {HomePage} from "./components/pages/HomePage"

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path = "/" exact element = {<HomePage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;