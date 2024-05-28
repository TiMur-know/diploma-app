import Footer from './Footer';
import Header from './Header';

const Layout_1 = ({ children }) => {
  
  return (
    <div className='flex flex-col h-screen'>
      <Header />
        <div className='flex-1 p-4'>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout_1;
