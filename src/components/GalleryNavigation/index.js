import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

function GalleryNavigation({ galleries }) {
    console.log(galleries[0]);
    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            {
                galleries.map((gallery) => {
                    return (
                        <NavLink
                            to={`/galleries/${gallery.id}`}
                            key={gallery.id}
                            activeClassName='active'>
                            {`${gallery.id} - ${gallery.name}`}
                        </NavLink>
                    )
                })
            }
        </nav>
    );
}

export default GalleryNavigation;
