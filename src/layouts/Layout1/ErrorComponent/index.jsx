
const ErrorComponent = (props) => {
  const{error}=props

  return (
    <div className='bg-gray-100 text-center flex h-full flex-col justify-center items-center'>
        <p className='text-8xl font-extrabold text-green-500'>{error.code}</p>
        <p className="text-4xl font-medium text-gray-800">{error.message}</p>
        <a href="/" className="mt-4 text-xl text-green-600 hover:underline">Go back home</a>
    </div>
  );
};
export default ErrorComponent; 
