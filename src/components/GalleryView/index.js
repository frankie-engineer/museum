import { useParams } from 'react-router-dom';

function GalleryView({ galleries }) {
    let { galleryId } = useParams();
    let gallery = galleries.find((gallery) => Number(gallery.id) === Number(galleryId));

    return (
        <h2>{gallery.name}</h2>
    );
}

export default GalleryView;
