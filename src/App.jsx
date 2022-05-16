import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import Page from './Components/Page/Page';

const Home = React.lazy(() => import('./Components/Home/Home'));
const Asteroids = React.lazy(() => import('./Components/Asteroids/Asteroids'));

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/news' element={<Asteroids /> } />
            <Route path='/about' element={<Page className={'about'}><div>ABOUT PAGE</div></Page>} />
            <Route path='/contacts' element={<Page className={'contacts'}><div>CONTACTS PAGE</div></Page>} />
            <Route path='*'element={<Navigate to='/home' />} />
        </Routes>
     </Suspense>
    </div>
  );
}

export default App;
