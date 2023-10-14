import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';
import { Route, Switch } from 'react-router-dom';
import ArtDescription from '../ArtDescription';
import './GalleryView.css';

function GalleryView({ galleries }) {
    let { galleryId } = useParams();
    let gallery = galleries.find((gallery) => Number(gallery.id) === Number(galleryId));
    console.log('objects', gallery.objects);
    return (
        <div>
            <Switch>

                <Route exact path={`/galleries/${galleryId}`}>
                    <h2>{gallery.name}</h2>
                    <h3>Click on any of the works below to learn more.</h3>
                    <div className='image-container'>
                        {
                            gallery.objects.map((object) => {
                                return (
                                    <ArtImageTile galleryId={galleryId} art={object} />
                                );
                            })
                        }
                    </div>
                </Route>


                {
                    gallery.objects.map((object => {
                        return (
                            <Route exact path={`/galleries/${galleryId}/art/${object.id}`}>
                                <ArtDescription art={object} gallery={gallery} />
                            </Route>
                        )
                    }))
                }
            </Switch>


        </div>
    );
}

export default GalleryView;
