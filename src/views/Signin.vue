<template>
    <div class="container">
        <login-card :title="title" @action="onSignin"></login-card>
    </div>
    <div class="center">
            <h4>{{ account }}</h4>
            <button class="btn" @click="$router.push('/login')">{{ accountBtn }}</button>
        </div>
</template>

<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import LoginCard from '../components/LoginCard.vue';
import { getUsers, createUser } from '../state/accounts';
import { currentUser } from '../state/app';

const router = useRouter();
    const title = ref('Sign in');
    const account = ref("Already have account?");
    const accountBtn = ref('Log in');
    
    function onSignin({login, password}) {
        const accounts = getUsers();
        const account = accounts.find(item => item.login === login);
        if (account) {
            alert('This user already exists');
        } else {
            createUser(login, password);
            currentUser.value = login;
            router.push('/groups');
        }
    }
    
</script>

<style>
.center{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: aliceblue;
}
</style>