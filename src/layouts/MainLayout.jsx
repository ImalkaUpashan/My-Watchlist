import {Outlet,Link} from "react-router-dom";

function MainLayout(){
    return(
        <>
        <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/Movies">Movies</Link>
            <Link to="/Tvseries">TV Series</Link>
            <Link to="/Wishlist">Wishlist</Link>
        </nav>

        <main>
            <Outlet/>
        </main>
        </>
    );
}

export default MainLayout;