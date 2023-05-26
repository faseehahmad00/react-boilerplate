import { Link } from 'react-router-dom';
import React from 'react';

function Index() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-blue-300">Welcome</h1>
      <Link to="/todos" className="mt-6 block text-center w-full text-blue-300 hover:text-blue-500 underline">   GO TO TODOS  </Link>
    </>
  );
}

export default Index;
