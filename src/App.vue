<script setup>
import { ref, computed, onMounted } from 'vue'

let url = ref('')
let currentTab = ref('')

var regExp = new RegExp(/(http(s)?:\/\/.)?(www\.)?(?:[-a-zA-Z0-9@:%_\+~#=]{1,63}\.)+[a-z]{2,6}\b((?:[-a-zA-Z0-9@:%_\+~#?&//="]+\.)*[-a-zA-Z0-9@:%_\+~#?&//="]+)?/);

let urlValidate = computed(() => {

    let result = ''

    if (!url.value) {
        return result
    }

    if (url.value.includes('https://') || url.value.includes('http://')) {
        result = url.value
    } else {
        result = 'https://' + url.value
    }

    return regExp.test(result) ? result : ''
})

function newTab() {
    chrome.tabs.create({ active: false, url: urlValidate.value, pinned: true })
    url.value = ''
}

function changeBg() {
    chrome.tabs.sendMessage(currentTab.value.id, { message: "changeBg" });
}

onMounted(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function callback(tabs) {
        currentTab.value = tabs[0];
    });
})

</script>

<template>
    <div class="popup">
        <div class="popup-form">
            <input v-model="url" type="text">
            <button @click="newTab" :disabled="!urlValidate" class="btn">Open new tab</button>
        </div>
        <button @click="changeBg" v-if="currentTab.url == 'https://www.google.com/'" class="btn btn--change">Change Google
            background</button>
    </div>
</template>

<style>
body {
    padding: 0;
    margin: 0;
}

.popup {
    width: 300px;
    padding: 30px;
    background: #a9dbf5;
}

.popup-form {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
}

.popup input {
    width: 120px;
    border: 2px solid #43809f;
    padding: 10px 20px;
    margin-right: 6px;
}

.popup input:focus {
    outline: 0px;
    border: 2px solid #185675;
}

.popup button:hover {
    background: #185675;
    cursor: pointer;
    transition: .3s;
}

.popup button:disabled {
    background: #5b5b5b;
    cursor: not-allowed;
}

.btn {
    background: #43809f;
    color: #fff;
    padding: 10px 20px;
    border: none;
}

.btn--change {
    width: 100%;
}
</style>
