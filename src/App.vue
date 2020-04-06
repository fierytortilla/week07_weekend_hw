<template>
<div id='app'>
    <header>
    <h1>Ghibli Otaku Fandom Extravaganza</h1>
  </header>
  <div id="container">
    <div id= "ghibli-movies">
    <p>List of Ghibli Movies: <films-list :films="films"/></p>
    <p>Favorited Ghibli Movies: <favorite-films-list /></p>
    <film-detail /> 
  </div>

  <div id="ghibli-characters">
    <p>List of Ghibli Characters: <characters-list :characters="characters" /></p>
    <p>Favorited Ghibli Characters: <favorite-character-list /></p>
    <character-detail />
  </div>
  </div>
  <footer>
    <p>Miyazaki is the best.</p>
  </footer>
</div>
  
</template>

<script>
import FilmsList from './components/FilmsList.vue'
import FilmDetail from './components/FilmDetail.vue'
import CharacterDetail from './components/CharacterDetail.vue'
import CharactersList from './components/CharactersList.vue'
import FavoriteFilmsList from './components/FavoriteFilmsList.vue'
import FavoriteCharactersList from './components/FavoriteCharactersList.vue'
import { eventBus } from './main.js'

export default {
  data(){
    return {
      films: [],
      characters: [],
      selectedFilm: null,
      selectedCharacter: null
    }
  },
  components: {
    "films-list": FilmsList,
    "characters-list": CharactersList,
    "film-detail": FilmDetail,
    "character-detail": CharacterDetail,
    "favorite-films-list": FavoriteFilmsList,
    "favorite-character-list": FavoriteCharactersList
    },
  props: ['favoriteFilms', 'favoriteCharacters'],
  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(films => this.films = films)
    .catch(error=> console.log(error))

    fetch('https://ghibliapi.herokuapp.com/people')
    .then(response => response.json())
    .then(characters=> this.characters = characters)
    .catch(error=> console.log(error))

    eventBus.$on('add-personal-score', ({ personalFilmScore, title })=>{
      this.films = this.films.reduce((films, film) => {
          const newFilm = { ...film }
          if (film.title === title) {
              newFilm.personalScore = personalFilmScore
          }
          films.push(newFilm)
          return films
      }, [])
    })
  }

}
</script>

<style>
  header{
    font-family: "Comic Sans MS";
    text-align: center;
    background-color: deeppink;
    color: yellow;
  }

  #container {
    display: grid;
    grid-template-columns: repeat(10, 100px);
    grid-template-rows: repeat(10, 100px);
    text-align: center;
    background-image: url('./assets/yakul.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 500px 400px;
    max-width: 100%;
    height: auto;
  }

  #ghibli-movies {
    grid-area: 1 / 1 / span 5 / span 5;
    color:deeppink;
  }

  #ghibli-characters {
    grid-area: 1 / 5 / span 5 / span 5;
    color: deeppink;
  }

  input {
    width: 35%;
  }

  footer {
    background-color: deeppink;
  }


</style>