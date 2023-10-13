import React from 'react';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import harvardArt from './data/harvardArt';
import { Route } from 'react-router-dom';

function App() {
  let galleries = harvardArt.records;

  return (
    <div>
      <GalleryNavigation galleries={galleries} />
      <Route path='/galleries/:galleryId'>
        <GalleryView galleries={galleries} />
      </Route>
    </div>
  );
}

export default App;
