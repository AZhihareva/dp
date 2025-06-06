<template>
    <router-view></router-view>
</template>

<script>
import { RouterView } from 'vue-router';
import Names from './views/Names.vue';

export default{
    components: {
        Names
    }
}
</script>