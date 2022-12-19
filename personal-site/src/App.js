import './App.css';
import { Routes, Route } from 'react-router-dom';

// Component Imports
import Home from './Sections/Home/Home';
import Blog from './Sections/Blog/BlogIndex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
