import React from 'react';
import { BiSearch } from 'react-icons/bi';

function Search() {
  return (
    <>
      <div class="flex justify-between px-3 py-3 border-none bg-lightBlue rounded-2xl focus:ring-grey-500 focus:ring-2">
        <BiSearch class="text-5xl text-blue" />
        <form action="">
          <input
            type="text"
            name="search"
            placeholder="Search Github Username..."
            autoComplete="off"
            aria-label="Search Github"
            class="w-80 py-2 font-semibold bg-lightBlue border-none text-lg text-white"
          />
        </form>
        <div></div>
      </div>
    </>
  );
}

export default Search;
