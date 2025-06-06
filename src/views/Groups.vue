<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Your playing groups</h2>
      <div class="container" v-if="user.groups.length !== 0">
        <group-of-names 
          v-for="group in user.groups" 
          :title="group.name"
          :shuffleSize="group.senderToRecipient.size"
          @shuffle="createPairs(group)"
          @edit="$router.push('/names/' + group.name);"
          @show="$router.push('/game/' + group.name)"
        ></group-of-names>
      </div>
      <div class="noGroups" v-else>
        <h3>You don't have any groups yet</h3>
        <div>
        </div>
      </div>
      <button class="btn" @click="$router.push('/create')">Create</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import GroupOfNames from '../components/GroupOfNames.vue';
import {getUser} from '../state/accounts.js'
import { currentUser } from '../state/app.js';
import { getGroupUsers } from '../state/groups.js';
import { useRouter } from 'vue-router';

const user = getUser(currentUser.value);
const router = useRouter();
// const groups = user.value.groups;
// const group = 

function shuffleArray(arr) {
                for (let i = arr.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
                return arr;
            }
    function createPairs(group){
        let shuffledParticipants = shuffleArray(getGroupUsers(group.name).map(user => user.login));
        for (let i = 0; i < shuffledParticipants.length; i++){
            const sender = shuffledParticipants[i];
            const recipient = shuffledParticipants[(i + 1) % shuffledParticipants.length];
            group.senderToRecipient.set(sender, recipient);
            group.recipientToSender.set(recipient, sender);
            }
        router.push('/game/' + group.name);
        }

</script>

<style>
  .noGroups{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>  