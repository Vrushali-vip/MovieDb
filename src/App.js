import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import Search from './pages/Search';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
