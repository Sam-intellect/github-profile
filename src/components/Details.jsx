import React from 'react';
import { GoLocation } from 'react-icons/go';
import { BsLink45Deg, BsTwitter, BsLinkedin } from 'react-icons/bs';

function Details() {
  return (
    <>
      <div className="mt-8 flex flex-col justify-between px-3 py-3 border-none bg-lightBlue rounded-2xl ">
        <div className=" flex gap-x-8 py-6 px-6">
          <div className="h-24 w-24 bg-white rounded-full border-solid border-2 border-sky-500"></div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">The Octocat</h1>
            <p className="text-blue text-xl font-bold">@octocat</p>
            <p className="text-white text-xl font-bold">Joined 25 Jan 2011</p>
          </div>
        </div>
        <div className="px-8">
          <p className="text-xl font-bold tracking-wide leading-loose font-light text-justify">
            Lorem ipsum dolor sit amet, consectetuer adipiscing eclit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>
        <div className=" w-full h-30 mt-8 flex justify-between px-8 py-8 gap-2 border-none bg-deepBlue rounded-2xl text-center">
          <div>
            <h2>Repo</h2>
            <p>8</p>
          </div>
          <div>
            <h2>Followers</h2>
            <p>3938</p>
          </div>
          <div>
            <h2>Following</h2>
            <p>9</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 py-2">
          <div className="flex gap-4">
            <GoLocation className="text-2xl font-thin" />
            <h2>San Francisco</h2>
          </div>
          <div className="flex gap-4">
            <BsLink45Deg className="text-2xl font-thin" />
            <h2>https://github.blog</h2>
          </div>
          <div className="flex gap-4">
            <BsTwitter className="text-2xl font-thin" />
            <h2>Not Available</h2>
          </div>
          <div className="flex gap-4">
            <BsLinkedin className="text-2xl font-thin" />
            <h2>@github</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
