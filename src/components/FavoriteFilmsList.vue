<template lang='html'>
<div>
    <select id="favoriteFilmsList" v-bind="favoriteFilms" v-model="selectedFilm" v-on:change="handleSelect">
        <option disabled value="">Select a favorited film</option>
        <option v-for="film in favoriteFilms" :value="film">{{film.title}}</option>
    </select>
</div>
  
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: 'favorite-films',
    data(){
        return{
            favoriteFilms:[],
            selectedFilm: {}
        }
    },
    mounted(){
        eventBus.$on('film-favorited', (film)=>{
            if(!this.favoriteFilms.includes(film)){
                this.favoriteFilms.push(film)
            }
        }),
        eventBus.$on('film-unfavorited', (film)=>{
            if(this.favoriteFilms.includes(film)){
                this.favoriteFilms.splice(this.favoriteFilms.indexOf(film), 1)
            }
        })
    },
    methods:{
        handleSelect(){
            eventBus.$emit('film-selected', this.selectedFilm)
        }
    }
}
</script>

<style scoped>

</style>