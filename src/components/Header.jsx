import React from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
function Header() {
  return (
    <>
      <section className="flex items-center justify-between text-base py-5">
        <h1 class="text-3xl font-extrabold">devfinder</h1>
        <div className="flex gap-2 text-3xl">
          <MdDarkMode />
          <MdOutlineLightMode />
        </div>
      </section>
    </>
  );
}

export default Header;
