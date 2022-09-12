// import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Page from './pages/Page'
// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
