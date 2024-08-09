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
      <Link
        to='/star-rating'
        className=' font-semibold text-lg  text-center border-2 py-2'
      >
        Star Rating
      </Link>
      <Link
        to='/image-slider'
        className=' font-semibold text-lg  text-center border-2 py-2'
      >
        Image Slider
      </Link>
      <Link
        to='/load-more-data'
        className=' font-semibold text-lg  text-center border-2 py-2'
      >
        Load more data
      </Link>
      <Link
        to='/tree-menu'
        className=' font-semibold text-lg  text-center border-2 py-2'
      >
        Tree menu
      </Link>
    </nav>
  );
};

export default Layout;
