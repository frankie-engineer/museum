import { NavLink } from 'react-router-dom';

function GalleryNavigation({ galleries }) {
    console.log(galleries);
    console.log(galleries[0].gallerynumber);

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to='/' exact={true}>Home</NavLink>
            {
                galleries.map((gallery) => {
                    let id = gallery.gallerynumber;
                    return (
                        <NavLink
                            to={`/galleries/${id}`}
                            key={id}
                            activeStyle={{ fontWeight: "bold" }}>
                            {id}
                        </NavLink>
                    );
                })
            }
        </nav >

    );
}

export default GalleryNavigation;
