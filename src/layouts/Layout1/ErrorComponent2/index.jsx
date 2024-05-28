import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  const { status, statusText, data, message } = error;

  return (
    <div className="bg-gray-100 text-center flex h-full flex-col justify-center items-center p-6">
      <div className="max-w-md">
        <p className="text-8xl font-extrabold text-green-500">{status || 'Error'}</p>
        <p className="text-4xl font-medium text-gray-800 mt-4">{statusText || 'Something went wrong'}</p>
        {message && <p className="text-lg text-gray-600 mt-2">{message}</p>}
        {data && <p className="text-lg text-gray-600 mt-2">{data}</p>}
        <a href="/" className="mt-4 text-xl text-green-600 hover:underline">Go back home</a>
      </div>
    </div>
  );
};

export default ErrorComponent;
