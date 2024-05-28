import {Link} from "react-router-dom"
const Header = () => {
  return (
    <header className="bg-emerald-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-3xl font-bold">Bus Routes</h1>
        <nav>
          <ul className="flex space-x-4 font-medium">
            <li><a href="/" className="block py-2 px-3 hover:text-gray-300">Home</a></li>
            <li><a href="/transports" className="block py-2 px-3 hover:text-gray-300">Transports</a></li>
            <li><a href="/predict" className="block py-2 px-3 hover:text-gray-300">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
