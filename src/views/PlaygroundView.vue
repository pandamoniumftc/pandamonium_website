<script setup>
import NavBar from "../components/NavBar.vue";
import TheWelcome from "../components/TheWelcome.vue";
import Network from "../scripts/Network"
import Dense from "../scripts/Dense"
import MSE from "../scripts/MSE"

</script>

<template>
    <header>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <h1><strong>We are Team Pandamonium</strong></h1>
    </header>
    <NavBar></NavBar>
    <hr/>
    <section id="about">
        <h2>About Us</h2>
        <p>Pandamonium Robotics is a First Tech Challenge team based in XYZ. We strive to inspire and motivate young people to become science and technology leaders by engaging them in exciting mentor-based programs that build STEM skills, that inspire innovation, and that foster well-rounded life capabilities.</p>
    </section>
    <hr/>

    <section class="network-structure"> 
        <div>
            <button @click="start">Start</button>
            <button @click="pause">Pause</button>
            <button @click="start">Step</button>
            
        </div>
    </section>
    
    
</template>

<script>
    var layers = [
        new Dense(2, 2),
        new Dense(2, 1)
    ]

    var network = new Network(
        layers,
        [[1, 2], [2, 1]],
        [[7], [5]],
        0.05,
        new MSE()
    )

    export default {
        methods: {
            step() {
                network.isRunning = true;
                network.train()
                network.isRunning = false;

                for (let i = 0; i < network.xTrain.length; i++) {
                    console.log("given : " + network.xTrain[i] + ", outputted : " + network.predict(network.xTrain[i]))
                }
            },
            pause() {
                network.isRunning = false
            },
            start() {
                network.isRunning = true;
            }
        }
        
    }
</script>

<script>
    network.train()
</script>
