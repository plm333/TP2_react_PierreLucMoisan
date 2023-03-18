import './AjouterArticle.css';

import { useParams, useNavigate } from "react-router-dom"
import { useState } from 'react'

const AjouterArticle = ({articles, ajouterArticle, modifierArticle}) => {
    
    let { id } = useParams();
    id = parseInt(id);

    const categories = ["Meubles", "Lampes", "Décorations", "Cuisine", "Salle de bain"];

    const navigate = useNavigate();

    let valeurNom = '';
    let valeurDescription = '';
    let valeurPrix = '';
    let valeurCategorie = 'Choisir une catégorie';
    let titre = "Ajouter un article";

    if(articles){

        const article = articles.filter((element) => element.id === id)[0];

        valeurNom = article.nom;
        valeurDescription = article.description;
        valeurPrix = article.prix;
        valeurCategorie = article.categorie;
        titre = "Modifier l'article";
    }
    
    const [nom, setNom ] = useState(valeurNom);
    const [description, setDescritpion ] = useState(valeurDescription);
    const [prix, setPrix ] = useState(valeurPrix);
    const [categorie, setCategorie] = useState(valeurCategorie);

    const onSubmit = (event) => {
        event.preventDefault();

        if(!nom){
            alert('Svp, ajouter un article!')
            return
        }

        if(id){ 
            const articleExistant = {
                id: id,
                nom: nom,
                description: description,
                prix: prix,
                categorie: categorie
            }

            modifierArticle(articleExistant);  
        }else{
            const nouvelArticle = {
                nom: nom,
                description: description,
                prix: prix,
                categorie: categorie
            }

            ajouterArticle(nouvelArticle);
        }

        navigate('/articles');
    }

    return(
        <div className="container ajouter_wrapper">
            <div className='title__space'>
                <h2>{titre}</h2>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <div className="mb-3 input__spacing">
                        <label htmlFor="nomArticle" className="form-label">Nom de l'article :</label>
                        <input 
                            type="text" 
                            value={nom} 
                            className="form-control" 
                            id="nomArticle" 
                            placeholder="Entrer le nom de l'article"
                            onChange={(evt) => {setNom(evt.target.value)}}
                            required
                        />
                    </div>
                    <div className="mb-3 input__spacing">
                        <label htmlFor="description" className="form-label">Description :</label>
                        <input 
                            type="text" 
                            value={description} 
                            className="form-control" 
                            id="description" 
                            placeholder="Entrer la description de l'article"
                            onChange={(evt) => {setDescritpion(evt.target.value)}}
                            required
                        />
                    </div>
                    <div className="mb-3 input__spacing">
                        <label htmlFor="prix" className="form-label">Prix de l'article :</label>
                        <input 
                            type="text" 
                            value={prix} 
                            className="form-control" 
                            id="prix" 
                            placeholder="Entrer le prix de l'article"
                            onChange={(evt) => {setPrix(evt.target.value)}}
                            required
                        />
                    </div>
                    <div className="input__spacing">
                        <label htmlFor="categorie" className="form-label">Catégorie de l'article :</label>
                        <select 
                            className="form-select" 
                            aria-label="Selection de catégorie"
                            value={categorie} 
                            onChange={(evt) => {setCategorie(evt.target.value)}}
                        >
                            {categories.map((value) => (<option value={value} key={value}>{value}</option>))}
                        </select>
                    </div>
                    <div className='ajout__bouton-space'>
                        <button type="submit" className="btn btn-dark">{articles ? 'Modifier' : 'Créer'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AjouterArticle