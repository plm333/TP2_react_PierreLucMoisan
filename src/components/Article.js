import cuilleres from '../img/cuilleres.jpg';
import { Link }  from 'react-router-dom'
import './Article.css'

const article = ({article, supprimer}) => {
    const onDelete = () => {
        supprimer(article.id)
    }

    return(
        <div className='col d-flex justify-content-center'>
            <div className="card text-center article article__wrapper">
                <div className='image__wrapper'>
                    <img src={cuilleres} className='image'/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{article.nom}</h5>
                    <p className="card-text text-muted">{article.description}</p>
                    <p className="card-text">{article.prix}</p>
                    <p className="card-text text-muted">Catégorie : {article.categorie}</p>
                    <div className="buttons">
                        <Link to={'/article/'+article.id} className="btn btn-dark">Modifier</Link>
                        <button className="btn btn-danger" onClick={onDelete}>Supprimer</button>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default article