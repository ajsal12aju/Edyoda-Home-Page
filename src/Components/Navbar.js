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
          <div className='btn-perant' style={{display:'flex',justifyContent:"flex-end",marginRight:"37px",height:"30px", alignItems:'center',padding:"45px"}}>
            <p className='contant'>EdYoda is a learning and knowledge <br/>
sharing platform for techies</p>
        <a href='https://www.edyoda.com/' target="_blank">   <button className='button'>Go to Main Website</button></a>
          </div>
        </div>
        
      
      </header>
    </div>
  );
}

export default Navbar;
