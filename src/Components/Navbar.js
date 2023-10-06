import React from 'react';

function Navbar() {
  return (
    <div>
      <header>
        <div className="header-div">
          <h1 className="head-h1">
            EDYODA
            <strong><i>Stories</i></strong>
          </h1>
          <span>
            <select className="head-selection">
              <option value="explore">Explore Categories</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="javascript">JavaScript</option>
            </select>
          </span>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
