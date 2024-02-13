import { navigate } from '@reach/router';
import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Home from '../Home/Home';

const Github = () => {
  const data = useLoaderData();


  // Check if the data is a message instead of user details
  if (typeof data === 'string') {
    return <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>{data}</div>;
  }

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='git picture' width={300} />
    </div>
  );
};

export default Github;

export const githubLoader = async ({ params }) => {
  console.log("params",params)
  const githubname = localStorage.getItem('name');
  if (params.githubname === localStorage.getItem("name")) {
    const response = await fetch(`https://api.github.com/users/${params.githubname}`);
    if (response.status === 404) {
      // Return a string message instead of JSX element
      return 'GitHub user not found. Please create your profile.';
    } else {
      return response.json();
    }
  } else {
    navigate('/'); // Navigate to home if the githubname doesn't match
    return null; // Return a message (you can also return null or undefined)
  }
};
