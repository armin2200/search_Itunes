import React, { useEffect } from 'react';
import ITunes from './pages/ITunes';

function App() {
  useEffect(() => {
    if (!localStorage.getItem('favorites'))
      localStorage.setItem('favorites', JSON.stringify({}));
  }, []);
  return (
    <div>
      <ITunes />
    </div>
  );
}

export default App;
