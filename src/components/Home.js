import './Home.css';
import { Link }  from 'react-router-dom'

const Home = () => {
    return (
        <section class="py__home-large">
            <div class="banner">
                <div class="content">
                    <h2>Bienvenue chez</h2>
                    <span>Arta</span>
                    <p>Une boutique moderne de meubles et d'accessoires.</p>
                    <Link to="/articles">Liste des articles &#8594;</Link>
                </div>
            </div>
        </section>
    )
}

export default Home