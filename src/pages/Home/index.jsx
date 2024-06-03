
import Layout from '../../layouts/Layout1'; 
import backgroundImage from '../../assets/1.jpeg'; 
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Layout>
      <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center  opacity-90"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
      }}
    >
      <div className="text-center animate-fadeIn">
        <h1 className="text-5xl font-bold text-white mb-8">Welcome to Our Website</h1>
        <p className="text-lg text-white mb-4">Explore our transport and more</p>
        <Link
          to="/transports"
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          View Transports
        </Link>
      </div>
    </div>
    </Layout>
  );
};

export default HomePage;