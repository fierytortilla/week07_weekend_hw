<template lang='html'>
<div>
    <select id="film-selector" v-model="selectedFilm" v-on:change="handleClick">
    <option disabled value="">Select a film</option>
    <option v-for="film in films" :value="film">{{film.title}}</option>
    </select>

</div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: "films-list",
    data(){
        return{
            'selectedFilm': {}
        }
    },
    props: ["films"],
    methods:{
    handleClick(){
        eventBus.$emit('film-selected', this.selectedFilm)
        }
    }

}
</script>

<style scoped>

</style>