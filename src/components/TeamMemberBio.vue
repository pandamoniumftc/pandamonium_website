<script setup>
defineProps({
    imgPath: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true,
    },
});
</script>

<template>
  <img src={{imgPath}}>
  <p>{{msg}}</p>
</template>


