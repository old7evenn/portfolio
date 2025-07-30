import { Route, Routes } from 'react-router-dom';

import { Layout } from '@/components';

import { Home } from './pages/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
