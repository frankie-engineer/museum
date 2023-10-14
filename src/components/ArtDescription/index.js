import { Link } from 'react-router-dom';
import './ArtDescription.css'

function ArtDescription({ gallery, art }) {
    return (
        <div>
            <Link to={`/galleries/${gallery.id}`}>
                {`⬅  Go Back to ${gallery.name} Gallery`}
            </Link>

            <Link to={art.url}>
                {`Learn more: ${art.title}`}
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
