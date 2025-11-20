import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './home_page/homePage';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}