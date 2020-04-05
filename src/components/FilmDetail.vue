<template>
<div v-if="film" id="film-detail">
    <h3><span>Title: </span>{{film.title}}</h3>
    <button v-on:click='handleClick'>Favorite this film!</button>
    <button v-on:click='handleClickUnfavorite'>Unfavorite this film!</button>
    <p><span>Release Date: </span>{{film.release_date}}</p>
    <p>Director: {{film.director}}</p>
    <p>Rotten Tomatoes Critical Score: {{film.rt_score}}</p>
    <p>Description: {{film.description}}</p>
</div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: 'film-detail',
    data(){
        return {
            film: null
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
        }
    } 

}
</script>

<style scoped>

</style>