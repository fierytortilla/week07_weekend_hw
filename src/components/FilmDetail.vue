<template>
<div v-if="film" id="film-detail">
    <h3><span>Title: </span>{{film.title}}</h3>
    <button v-on:click='handleClick'>Favorite this film!</button>
    <button v-on:click='handleClickUnfavorite'>Unfavorite this film!</button>
    <p><span>Release Date: </span>{{film.release_date}}</p>
    <p>Director: {{film.director}}</p>
    <p>Rotten Tomatoes Critical Score: {{film.rt_score}}%</p>
    <!-- <form v-on:submit.prevent="savePersonalFilmScore">
        <input type="number" placeholder= "Input your personal score" v-model="personalFilmScore.personalScore">
        <input type="submit" value="Save New Score" />
    </form> -->
     <!-- <span v-if="personalFilmScore!=null"><p>Your own personal score: {{personalFilmScore.personalScore}}%</p></span> -->
    <p>Description: {{film.description}}</p>
</div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: 'film-detail',
    data(){
        return {
            film: null,
            personalFilmScore: {
                film: null,
                personalScore: null
            }
        }
    },
    mounted(){
        eventBus.$on('film-selected', (film)=>{this.film= film})
    },
    methods: {
        handleClick(){
            eventBus.$emit('film-favorited', this.film)
        },
        handleClickUnfavorite(){
            eventBus.$emit('film-unfavorited', this.film)
        },
        savePersonalFilmScore(){
            this.personalFilmScore.film= this.film
            this.personalFilmScore.personalScore= this.personalScore
            eventBus.$emit('add-personal-score', this.personalFilmScore)
            this.personalFilmScore.film= null
            this.personalFilmScore= null
        }

    } 

}
</script>

<style scoped>

</style>