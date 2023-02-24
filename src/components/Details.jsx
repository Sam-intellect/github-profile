import React, { useState, useEffect } from 'react';
import { BsLink45Deg, BsTwitter, BsLinkedin } from 'react-icons/bs';

function Details(username) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    username = 'm';
    async function fetchUserData() {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
      console.log(data);
    }
    fetchUserData();
  }, [username]);

  if (!userData) {
    return <div>loading...</div>;
  }

  const {
    name,
    avatar_url,
    bio,
    public_repos,
    followers,
    following,
    html_url,
    created_at,
    twitter_username,
    login,
  } = userData;

  return (
    <>
      <div className="mt-8 flex flex-col justify-between px-3 py-3 border-none bg-lightBlue rounded-2xl ">
        <div className=" flex gap-x-8 py-6 px-6">
          <div className="h-24 w-24 bg-white rounded-full border-solid border-2 border-sky-500">
            <img src={avatar_url} alt="image" className="rounded-full" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-blue text-xl font-bold">{login}</p>
            <p className="text-white text-md font-light">
              {new Date(created_at).toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                // hour: 'numeric',
                // minute: 'numeric',
                // second: 'numeric',
                // timeZone: 'UTC',
              })}
            </p>
          </div>
        </div>
        <div className="p-4">
          <p className="text-xl font-bold tracking-wide font-light text-justify">
            {bio}
          </p>
        </div>
        <div className=" w-full h-30 mt-8 flex justify-between px-8 py-8 gap-2 border-none bg-deepBlue rounded-2xl text-center">
          <div>
            <h2>Repo</h2>
            <p className="text-xl font-bold">{public_repos}</p>
          </div>
          <div>
            <h2>Followers</h2>
            <p className="text-xl font-bold">{following}</p>
          </div>
          <div>
            <h2>Following</h2>
            <p className="text-xl font-bold">{followers}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 py-2">
          {/* <div className="flex gap-4">
            <GoLocation className="text-2xl font-thin" />
            <h2>{location}</h2>
          </div> */}
          <div className="flex gap-4">
            <BsLink45Deg className="text-2xl font-thin" />
            <h2>{html_url}</h2>
          </div>
          <div className="flex gap-4">
            <BsTwitter className="text-2xl font-thin" />
            <h2>{twitter_username}</h2>
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
