import React from 'react';
import Header from './Header';
import Search from './Search';

function Home() {
  return (
    <>
      <div class="container mx-auto px-8 py-8">
        <Header />
        <Search />
      </div>
    </>
  );
}

export default Home;
