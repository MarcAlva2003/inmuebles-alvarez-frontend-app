import { Route, Routes } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import { Home } from '../app/public-web/home/home';

export const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}