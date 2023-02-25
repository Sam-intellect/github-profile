import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

function Search(handleSearch) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };
  return (
    <>
      <div className="flex justify-between px-3 py-3 mt-10 gap-2 border-none bg-lightBlue rounded-2xl focus:none">
        <BiSearch className="text-5xl text-blue font-thin" />
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search Github Username..."
            autoComplete="off"
            aria-label="Search Github"
            className="min-w-full py-2 font-semibold bg-lightBlue border-none text-lg text-white focus:outline-none"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </form>
        <button className="bg-blue p-2 border-none rounded-xl w-32">
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
