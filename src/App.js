import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home';
import AjouterArticle from './components/AjouterArticle'
import Footer from './components/Footer'
import About from './components/About'
import Articles from './components/Articles'

import './App.css';




function App() {
//1 - Global

const [articles, setArticles] = useState ([]);

useEffect(()=>  {
    const getArticles = async () => {
      const articlesFromServer = await fetchArticles()
      setArticles(articlesFromServer)
    }
    getArticles()
},[])

const fetchArticles = async () => {
  const res = await fetch('http://localhost:5000/articles')
  const data = await res.json()
  //console.log(data)
  return data
}

const fetchArticle = async (id) => {
  const res = await fetch(`http://localhost:5000/articles/${id}`)
  const data = await res.json()
  //console.log(data)
  return data
}

// Ajouter un article
const ajouterArticle =  async (article) => {
  const res = await fetch('http://localhost:5000/articles', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(article)
  })
  
  const nouvelArticle = await res.json()
  setArticles([...articles, nouvelArticle])
}

// Supprimer un article
const supprimerArticle = async (id) => {
  await fetch(`http://localhost:5000/articles/${id}`, {
    method: 'DELETE',
  })
  //console.log(id)
  setArticles(articles.filter((article) => article.id !== id))
}

// Modifier un article
const modifierArticle = async (article) => {
  const res = await fetch('http://localhost:5000/articles/'+article.id,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(article)
    })

    const nouvelArticle = await res.json();
    const nouveauxArticles = articles.map(article => {
      if(nouvelArticle.id === article.id){
        return nouvelArticle;
      } else {
        return article;
      }
    });
    setArticles(nouveauxArticles)
}

  return (
    <BrowserRouter>
      <div className='container'>

        <Header/>

        <div className='siteBody'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/articles' element={<Articles articles={articles} supprimerArticle={supprimerArticle}/>}/>
            <Route path='/ajouterArticle' element={<AjouterArticle ajouterArticle={ajouterArticle}/>}/>
            <Route path='/article/:id' element={<AjouterArticle articles={articles} modifierArticle={modifierArticle} supprimerArticle={supprimerArticle} />} />
          </Routes>
        </div>

        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;


