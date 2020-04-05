<template>
<div>
  <h1>Ghibli Otaku Fandom Extravaganza</h1>
  <p>List of Ghibli Movies: <films-list :films="films"/></p>
  <p>Favorited Ghibli Movies: <favorite-films-list /></p>

  <p>List of Ghibli Characters: <characters-list :characters="characters" /></p>

  <p>Favorited Ghibli Characters: <favorite-character-list /></p>
  <film-detail :films="films" />
  <character-detail />
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

<style scoped>
  header{
    background-color: deeppink;
  }

  body {
    background-color: deepskyblue
  }

  footer {
    background-color: deeppink;
  }


</style>