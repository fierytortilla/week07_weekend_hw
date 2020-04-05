<template lang='html'>
<div>
    <select id="character-selector" v-model="selectedCharacter" v-on:change="handleClick">
    <option disabled value="">Select a character</option>
    <option v-for="character in characters" :value="character">{{character.name}}</option>
    </select>
</div>
  
</template>

<script>
import { eventBus } from '../main.js';

export default {
    name: "characters-list",
    data(){
        return{
            'selectedCharacter': {}
        }
    },
    props: ["characters"],
    methods:{
    handleClick(){
        eventBus.$emit('character-selected', this.selectedCharacter)
        }
    }

}
</script>

<style scoped>

</style>