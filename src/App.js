import React from 'react';
import GalleryNavigation from './components/GalleryNavigation';
import harvardArt from './data/harvardArt';

function App() {
  console.log(harvardArt);
  return (
    <GalleryNavigation galleries={harvardArt.records} />
  );
}

export default App;
