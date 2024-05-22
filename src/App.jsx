import { BrowserRouter, Route, Routes } from 'react-router-dom';
import According from './components/according/According';
import Layout from './Layout';
import RandomColor from './components/random-color/RandomColor';

function App() {
  return (
    <div className=' bg-white px-8 py-10 flex flex-col items-center'>
      <h1 className=' font-bold text-2xl mb-5'>React Pracice Projects</h1>

      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/according' element={<According />} />
          <Route path='/random-color' element={<RandomColor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
