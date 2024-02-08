import React, { useState } from 'react';

function GifSearch({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Searching...');
    onSearch(searchTerm)
  }

  return (
    <form className="d-flex flex-column align-items-center p-2" onSubmit={handleSubmit}>
      <label className="text-white mr-2">Enter search term:</label>
      <input
        type="search"
        className="form-control mr-2"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input type="submit" value="Find GIF" className="btn btn-success border border-0" />
    </form>
  );
}

export default GifSearch;
