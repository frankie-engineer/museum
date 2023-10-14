import { Link } from 'react-router-dom';
import './ArtDescription.css'

function ArtDescription({ gallery, art }) {
    return (
        <div>
            <h2>{`${art.title || 'Coming Soon'}`}</h2>

            <Link to={art.url}>
                {`Learn more about this piece`}
            </Link>

            <Link to={`/galleries/${gallery.id}`}>
                {`⬅  Go Back to ${gallery.name} Gallery`}
            </Link>

            <div className='image-container'>
                {
                    art.images.map((image) => {
                        return (
                            <img
                                src={image.baseimageurl}
                                alt={art.title}>
                            </img>
                        )
                    })
                }
            </div>

            <p>{`Description: ${art.description || 'Coming Soon'}`}</p>
            <p>{`Technique: ${art.technique || 'Coming Soon'}`}</p>
            <p>{`Special thanks to: ${art.creditline}`}</p>

        </div >
    );
}

export default ArtDescription;
