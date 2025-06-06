<template>
    <div class="container" id="app">
      <div class="card">
        <h1>{{ group.name }}</h1>
        <div class="form-control">
          <input type="text" 
          placeholder="Input user's login"
          v-model="inputValue" 
          @keypress.enter="addName" 
          /> <!-- v-bind: = :, v-on: = @ -->
        </div>
        <button class="btn" v-on:click="addName">Add</button>
        <hr />
        <ul class="list" v-if="users.length !== 0">
          <li class="list-item" v-for="user of users">{{ user.login }}
            <button class="btn danger" v-on:click="deleteName(user.login)">-</button>
          </li>
        </ul>
        <div v-else>No participants yet. Add first participant!</div>
        <button class="btn primary" 
        @click="acceptListOfNames"
        v-if="users.length !== 0">Accept</button>
      </div>
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue';
import { useRouter } from 'vue-router';
import {addUser, deleteUser, getGroup, getGroupUsers} from '../state/groups';
import {getUsers} from '../state/accounts';

const router = useRouter();
const allUsers = getUsers();
let inputValue = ref('');
const props = defineProps(['groupName']);
const group = getGroup(props.groupName);
const users = ref(getGroupUsers(props.groupName));
console.log(users);

function addName() {
    if (inputValue.value !== '') {
        if (allUsers.find(user => user.login === inputValue.value)) {
            users.value = addUser(props.groupName, inputValue.value);
        } else {
            alert('This user not existed');
        }
        inputValue.value = '';
    }
}

function deleteName(login) {
            console.log(login);
            users.value = deleteUser(group.name, login);
        }

function acceptListOfNames(){
            if (users.value.length < 3) {
                alert(`Please add more participants. You need at least 3 to play. Right now you have ${users.value.length}`);
            } else {
                router.push('/groups');
                console.log(users.value.length);
            }
        }
</script>