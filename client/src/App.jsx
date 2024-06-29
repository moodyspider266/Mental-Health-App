import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

function App() {
  return (  
    <div className="App">
        <Header />
        <Sidebar />
        <div className="main-content">
          <Router>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </Router>
        </div>
    </div>
  );
}

export default App;