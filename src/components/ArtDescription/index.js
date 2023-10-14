import { Link } from 'react-router-dom';

function ArtDescription({ gallery, art }) {
    return (
        <div>
            <Link to={`/galleries/${gallery.id}`}>
                {`Back to ${gallery.name} Gallery`}
            </Link>

            <Link to={art.url}>
                {art.title}
            </Link>

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

            <p>{art.description}</p>
            <p>{art.creditline}</p>
            <p>{art.technique}</p>
        </div >
    );
}

export default ArtDescription;
