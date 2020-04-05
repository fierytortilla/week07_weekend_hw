<template lang='html'>
<div>
    <select id="favoriteCharactersList" v-bind="favoriteCharacters" v-model="selectedCharacter" v-on:change="handleSelect">
        <option disabled value="">Select a favorited character</option>
        <option v-for="character in favoriteCharacters" :value="character">{{character.name}}</option>
    </select>
</div>
  
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: 'favorite-characters',
    data(){
        return{
            favoriteCharacters:[],
            selectedCharacter: {}
        }
    },
    mounted(){
        eventBus.$on('character-favorited', (character)=>{
            if(!this.favoriteCharacters.includes(character)){
                this.favoriteCharacters.push(character)
            }
        }),
        eventBus.$on('character-unfavorited', (character)=>{
            if(this.favoriteCharacters.includes(character)){
                this.favoriteCharacters.splice(this.favoriteCharacters.indexOf(character), 1)
            }
        })
    },
    methods:{
        handleSelect(){
            eventBus.$emit('character-selected', this.selectedCharacter)
        }
    }

}
</script>

<style scoped>

</style>