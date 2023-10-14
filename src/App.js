import React from 'react';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import Home from './components/Home'
import harvardArt from './data/harvardArt';
import { Route, Switch } from 'react-router-dom';

function App() {
  let galleries = harvardArt.records;

  return (
    <div>
      <h1>Harvard Art Museum</h1>
      <GalleryNavigation galleries={galleries} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/galleries/:galleryId'>
          <GalleryView galleries={galleries} />
        </Route>

        <Route>
          Page Not Found
        </Route>
      </Switch>

    </div>
  );
}

export default App;
