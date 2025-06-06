<template>
    <div class="container">
        <login-card :title="title" @action="onLogin"></login-card>
    </div>
    <div class="center">
            <h4>{{ account }}</h4>
            <button class="btn" @click="$router.push('/signin')">{{ accountBtn }}</button>
        </div>
</template>

<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import LoginCard from '../components/LoginCard.vue';
import { getUsers } from '../state/accounts';
import { currentUser } from '../state/app';

const router = useRouter();
    const title = ref('Log in');
    const account = ref("Don't have account?");
    const accountBtn = ref('Create');
    function onLogin({login, password}) {
        const accounts = getUsers();
        const account = accounts.find(item => item.login === login);
        if (account) {
            if (account.password === password) {
                currentUser.value = login;
                router.push('/groups');
            } else {
                alert('Incorrect password');
            }
        } else {
            alert('This user not exists');
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