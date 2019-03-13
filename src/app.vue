<template>
    <div id="app">
        <transition name='fade'>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="less">
    .size{
        width: 100%;
        height: 100%;
    }
    html,body{
        .size;
        margin: 0;
        padding: 0;
    }
    #app {
        .size;
    }
</style>

