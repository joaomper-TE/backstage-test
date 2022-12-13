<template>
    <img alt="ThousandEyes logo" src="./assets/te-logo-full.svg" />
    <HelloWorld msg="Vite + Vue" greetingMessage="From App/parent" />
</template>

<script>
import HelloWorld from './components/HelloWorld/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
