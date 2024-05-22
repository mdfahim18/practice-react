import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <nav className=' grid grid-cols-6 lg:grid-cols-8 gap-3 px-8 mb-10'>
      <Link
        to='/according'
        className=' font-semibold text-lg  text-center border-2 py-2'
      >
        According
      </Link>
      <Link
        to='/random-color'
        className=' font-semibold text-lg  text-center border-2 py-2'
      >
        Random Color
      </Link>
    </nav>
  );
};

export default Layout;
