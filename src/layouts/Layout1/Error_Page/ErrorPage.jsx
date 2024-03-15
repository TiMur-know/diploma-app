import { useState } from 'react';

const ErrorPage = () => {
  const [error, setError] = useState({
    code: '404',
    message: 'This page not found',
  });
  return (
    <div className='bg-gray-100 px-2 text-center'>
      <div className='h-screen flex flex-col justify-center items-center'>
        <p className='text-8xl font-extrabold text-blue-500'>{error.code}</p>
        <p className="text-4xl font-medium text-gray-800">{error.message}</p>
        <a href="/" className="mt-4 text-xl text-blue-600 hover:underline">Go back home</a>
      </div>
    </div>
  );
};
export default ErrorPage;
