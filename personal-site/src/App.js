import './App.css';
import { Routes, Route } from 'react-router-dom';

// Component Imports
import Home from './Sections/Home/Home';
import BlogLayout from './Sections/Blog/BlogIndex';
import NotFound from './Sections/Blog/Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blog/*" element={<BlogLayout />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
