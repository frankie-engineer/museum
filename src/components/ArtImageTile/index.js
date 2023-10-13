import './ArtImageTile.css';
import { Link } from 'react-router-dom';

function ArtImageTile({ galleryId, art }) {
    return (
        <Link to={`/galleries/${galleryId}/art/${art.id}`}>
            <img
                src={art.images[0].baseimageurl}
                alt='art piece'
                className='image-art'>
            </img>
        </Link>

    );
}

export default ArtImageTile;
