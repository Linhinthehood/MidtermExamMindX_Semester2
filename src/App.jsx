import React, { useState } from 'react';
import Header from './components/Header';
import Explore from './components/Explore';
import NewRelease from './components/NewRelease';
import './App.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null); // Sử dụng state để lưu trữ bộ phim đã chọn

  return (
    <div className="App">
      <Header />
      <Explore selectedMovie={selectedMovie} /> {/* Truyền dữ liệu vào Explore */}
      <NewRelease setSelectedMovie={setSelectedMovie} /> {/* Truyền hàm setSelectedMovie vào NewRelease */}
    </div>
  );
}

export default App;