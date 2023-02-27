<template>
    <div>
        <img src="../assets/panda-logo-header.png" id="logo">
        <h1 id="title">PANDAMONIUM</h1>
        <img src="../assets/first-logo-header.png" id="first">
    </div>
    
</template>

<style scoped>
    #logo {
        width: 60px;
        height: 60px;
        justify-items: left;
    }

    #first {
        width: 60px;
        height: 60px;
        justify-items: right;
    }

    div {
        background-color: #231f20; /* light gray */
        padding: 20px;
        color: #f2f2f2;
        text-align: left;
    }

    div h1 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
        font-size: 6em;
    }   
      
    #logo, #title, #first {
        display: inline-block;
    }
</style>