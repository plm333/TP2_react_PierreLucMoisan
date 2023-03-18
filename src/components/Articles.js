import Article from './Article'

const Articles = ({articles, supprimerArticle}) => {
    return(
        <>
            {articles.map((article)=>(
                <Article key={article.id} article={article} supprimer={supprimerArticle}/>
            ))}
        </>
    )
}

export default Articles