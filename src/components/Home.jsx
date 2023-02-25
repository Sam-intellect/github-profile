import React from 'react';
import Header from './Header';
import Search from './Search';
import Details from './Details';

function Home() {
  return (
    <>
      <div className="container mx-auto px-8 py-8">
        <Header />
        <Search handleSearch={handleSearch} />
        <Details />
      </div>
    </>
  );
}

export default Home;
