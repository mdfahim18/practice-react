import { BrowserRouter, Route, Routes } from 'react-router-dom';
import According from './components/accordion/According';
import Layout from './Layout';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';

function App() {
  return (
    <div className=' bg-white px-8 py-10 flex flex-col items-center'>
      <h1 className=' font-bold text-2xl mb-5'>React Pracice Projects</h1>

      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/according' element={<According />} />
          <Route path='/random-color' element={<RandomColor />} />
          <Route path='/star-rating' element={<StarRating noOfRating={10} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
