import React from 'react';

function Category() {
  return (
    <div>
      <div className="article-div">
        <h1 className="article-head">Trending Posts</h1>

        <i className="fa-solid fa-filter filter"></i>
        <span className="filter-text">Filter by Category</span>

        <article className="button-class">
          <a className="art-btn">All</a>
          <a className="art-btn">Artificial Intelligence</a>
          <a className="art-btn">Cloud Computing</a>
          <a className="art-btn">DevOps</a>
          <a className="art-btn">Programming Languages</a>
          <a className="art-btn">Mobile Application Development</a>
          <a className="art-btn">Technology and Tools</a>
          <a className="art-btn">Get a Job Tech Companies</a>
          <a className="art-btn">Others</a>
        </article>
      </div>
    </div>
  );
}

export default Category;
