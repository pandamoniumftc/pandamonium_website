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
    },
    data() {
        layerH1s: {
            let arr = new Array(passedNetwork.network.length)

            for (let i = 0; i < arr.length; i++) {
                arr[i] = document.getElementById("item-" + i);
            }

            return arr;
        }
    }


    };
</script>