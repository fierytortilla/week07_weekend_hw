<template>
    <div v-if="character" id="character-detail">
        <h3><span>Character: </span>{{character.name}}</h3>
        <button v-on:click='handleClick'>Favourite this character!</button>
        <button v-on:click='handleClickUnfavorite'>Unfavorite this character!</button>
        <p><span>Age: </span>{{character.age}}</p>
        <p>Hair Color: {{character.hair_color}}</p>
        <p>Eye Color: {{character.eye_color}}</p>
        <!-- <p><span>Films Appeared In:</span>{{getFilm}} </p> -->
    </div>

</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: 'character-detail',
    data(){
        return {
            character: null,
            film: null
        }
    },
    mounted(){
        eventBus.$on('character-selected', (character)=>{this.character= character})
    },
    methods: {
        handleClick(){
            eventBus.$emit('character-favorited', this.character)
        },
        handleClickUnfavorite(){
            eventBus.$emit('character-unfavorited', this.character)
        },
        getFilm(){
            fetch(this.character.films[0])
            .then(response=>response.json())
            .then(film=> this.film)
            .catch(error=>log.console(error))       
        }
    } 

}
</script>

<style scoped>

</style>