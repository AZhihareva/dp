<template>
    <div class="container">
        <div class="card">
            <h1>{{ title }}</h1>
            <h3>Login:</h3>
            <div class="form-control">
                <input type="text"
                :placeholder="log"
                v-model="inputLog"
                />
            </div>
            <h3>Password:</h3>
            <div class="form-control">
                <input type="text"
                :placeholder="pass"
                v-model="inputPass"
                />
            </div>
            <button class="btn primary" @click="buttonClick">{{ title }}</button>
        </div>
    </div>
</template>

<script>
import {ref, defineEmits} from 'vue';

export default {
        name: 'LoginCard',
        props: {
            title: String
        },
        setup(props, ctx) {
            //const emit = defineEmits(['action']);
            const inputLog = ref('');
            const inputPass = ref('');
            const log = ref('Please, input your login');
            const pass = ref('Please, input your pass');
            function buttonClick() {
                ctx.emit('action', {
                    login: inputLog.value,
                    password: inputPass.value
                })
            }
            return{
                inputLog,
                inputPass,
                log,
                pass,
                buttonClick
            }
        }
    }
</script>

<style>
.center{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>