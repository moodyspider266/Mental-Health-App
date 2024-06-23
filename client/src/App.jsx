import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (  
    <div className="App">
        <Header />
        <Sidebar />
        <div className="main-content">
           <Dashboard />
        </div>
    </div>
  );
}

export default App;
