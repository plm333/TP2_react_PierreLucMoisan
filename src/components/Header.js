import { Link }  from 'react-router-dom'

const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <h1>Arta</h1>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">Notre compagnie</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/articles" className="nav-link">Liste des articles</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ajouterArticle" className="nav-link">Ajouter un article</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;