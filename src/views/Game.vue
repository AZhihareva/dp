<template>
  <div class="container pt-1">
    <div class="card">
        <div class="margin">
            <button class="btn" @click="$router.push('/groups')">Back to groups</button>
        </div>
            <div class="buttons">
                <button class="btn primary"
                @click="recipientSearch()">Search by sender</button>
                <button class="btn"
                @click="senderSearch()">Search by recipient</button>
            </div>
            <div class="container">
                <div>
                    <form class="selection">
                        <label class="tag" for="player-select">{{ participant }} for:</label>
                        <select class="btn" v-model="player">
                            <option v-for="user in users">{{ user.login }}</option>
                        </select>
                    </form>
                </div>
                <div class="box-slide">
                    <div class="reveal-content">
                        <h1>{{ hiddenPlayer }}</h1>
                    </div>
                     <div class="reveal-top">
                        <div class="reveal-content caption">
                             <h1>Hover me</h1>
                        </div>
                     </div>
                </div>
            </div>
    </div>
  </div>
</template>

<script setup>
import {ref, defineProps, computed} from 'vue'
import {getGroup, getGroupUsers} from '../state/groups';

let searchBySender = ref(false);
let searchByRecipient = ref(true);
const props = defineProps(['groupName']);
const group = getGroup(props.groupName);
const users = getGroupUsers(props.groupName);
const hiddenPlayer = computed(() => {
    if (searchBySender.value) {
        return group.senderToRecipient.get(player.value);
    } else if (searchByRecipient.value) {
        return group.recipientToSender.get(player.value);
    }
});
const player = ref('');
const participant = computed(() => {
    if (searchBySender.value) {
        return 'Sender';
    } else if (searchByRecipient.value) {
        return 'Recipient';
    }
});

function senderSearch() {
    searchBySender.value = !searchBySender.value;
    searchByRecipient.value = !searchByRecipient.value;
}

function recipientSearch() {
    searchBySender.value = !searchBySender.value;
    searchByRecipient.value = !searchByRecipient.value;
}

</script>

<style>
.margin{
    margin-bottom: 3rem;
    margin-top: 1rem;
}

.box-slide {
  margin: 3rem;
  border: 1px solid #2c3e50;
  position: relative;
  overflow: hidden;
}

.box-slide:hover .reveal-top {
  top: -100%;
}

.reveal-content {
  box-shadow: 1px 1px 3px rgba(0,0,0,0.3) inset;
  padding: 100px;
  color: #000;
  background: #3eaf7c;
  transition: left 0.4 ease;

}

.reveal-top {
  background: rgba(0,0,0,0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: all 0.6s ease;
}

.caption {
  background: #2c3e50;
  color: #fff;
}

.selection {
    margin-top: 2rem;
}

.tag{
    font-weight: 500;
    line-height: 1.45;
    font-size: 1.65rem;
    padding-bottom: 0.3rem;
    
}
</style>