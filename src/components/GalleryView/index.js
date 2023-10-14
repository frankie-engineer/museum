import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';
import { Route, Switch } from 'react-router-dom';
import ArtDescription from '../ArtDescription';

function GalleryView({ galleries }) {
    let { galleryId } = useParams();
    let gallery = galleries.find((gallery) => Number(gallery.id) === Number(galleryId));
    console.log('objects', gallery.objects);
    return (
        <div>
            <Switch>
                <Route exact path={`/galleries/${galleryId}`}>
                    <h2>{gallery.name}</h2>

                    {
                        gallery.objects.map((object) => {
                            return (
                                <ArtImageTile galleryId={galleryId} art={object} />
                            );
                        })
                    }
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
