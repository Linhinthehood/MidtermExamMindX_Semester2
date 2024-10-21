import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Anonime</h1>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="/">Home</a></li> 
          <li><a href="/list-anime">List Anime</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search anime or movie" />
      </div>
    </header>
  );
}

export default Header;