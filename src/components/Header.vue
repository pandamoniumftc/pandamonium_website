<template>
    <div>
        <img src="../assets/panda-logo-header.png" id="logo">
        <h1 id="title">PANDAMONIUM</h1>
        <img src="../assets/first-logo-header.png" id="first">
    </div>
    
</template>

<style scoped>
    #logo {
        width: 80px;
        height: 80px;
        justify-items: left;
        text-align: left;
    }

    #first {
        height: 80px;
        width: auto;
        justify-items: right;
        text-align: right;
    }

    div {
        background-color: #231f20; /* light gray */
        padding: 20px;
        color: #f2f2f2;
    }

    div h1 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
        font-size: 4.5em;
        text-align: left;
    }   
      
    #logo, #title, #first {
        display: inline-block;
    }
</style>