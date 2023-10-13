import { Link } from 'react-router-dom';

function ArtImageTile({ galleryId, object }) {
    console.log('galeryId', galeryId, 'obkect')
    return (
        <Link to={`/galleries/${galleryId}/art/${object.id}`}>
            <img src={object.primaryimageurl}></img>
        </Link>

    );
}

export default ArtImageTile;
