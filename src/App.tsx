import { Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
import Layout from '@components/Layout/Layout';

import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
