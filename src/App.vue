<template>
<div>
  <h1>Ghibli Otaku Fandom Extravaganza</h1>
  <nav>
      <li><router-link to="/about_us">About us </router-link></li>
      <router-view></router-view>
  </nav>
  <p>List of Ghibli Movies: <films-list :films="films"/></p>
  <p>Favorited Ghibli Movies: <favorite-films-list /></p>

  <p>List of Ghibli Characters: <characters-list :characters="characters" /></p>

  <p>Favorited Ghibli Characters: <favorite-character-list /></p>
  <film-detail />
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
// import AboutUs from './components/AboutUs.vue'
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
    "favorite-character-list": FavoriteCharactersList,
    // "about-us": AboutUs
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

    this.characters.map(function(){
      return fetch(character.films[0]).then(response=>response.json()).then(filmTitle=> filmTitle)
    })

  }
  // methods: {
  //   goBack(){
  //     this.$router.push("/about_us");
  //   }
  // }

}
</script>

<style scoped>

</style>