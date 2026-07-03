import React, { useState } from 'react';
import GokuAnimation from './components/GokuAnimation';
import MainPage from './pages/MainPage';

function App() {
  const [isIntroActive, setIsIntroActive] = useState(true);

  return (
    <>
      {isIntroActive ? (
        <GokuAnimation onComplete={() => setIsIntroActive(false)} />
      ) : (
        <MainPage />
      )}
    </>
  );
}

export default App;
