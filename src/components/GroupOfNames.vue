<template>
    <div class="card">
        <h3>{{ title }}</h3>
        <div class="buttons">
                <button class="btn" @click="$emit('edit')">Edit</button>
            <div v-if="shuffleSize === 0">
                <button class=" btn primary" @click="shuffleAndPlay()">Generate pairs</button>
            </div>
            <div v-else>
                <button class=" btn primary" @click="$emit('show')">Show pairs</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['shuffleSize', 'title']);
const emit = defineEmits(['shuffle', 'edit', 'show']); 
function shuffleAndPlay(){
    emit('shuffle');
}
</script>