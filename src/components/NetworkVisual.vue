<template>
    <div>
        <h1 v-for="(item, index) in passedNetwork.network" :key="index" :id="'item-' + index">{{item}}</h1>
    </div>
</template>

<script>
    export default {
    props: {
        passedNetwork: {
            type: Array,
            required: true
        }
    }
    };
</script>