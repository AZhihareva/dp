<template>
    <div class="container">
        <div class="card">
            <div class="form-control">
            <input type="text"
            placeholder="Input your group name"
            v-model="groupName" 
            />
            </div>
        <div>
          <button class="btn" @click="groupCreate()">Create</button>
        </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
import { currentUser } from '../state/app';
import { createGroup } from '../state/groups';

const groupName = ref('');
const router = useRouter();

function groupCreate(){
    createGroup(groupName.value, currentUser.value);
    console.log(groupName.value);
    router.push('/names/' + groupName.value);
}
</script>