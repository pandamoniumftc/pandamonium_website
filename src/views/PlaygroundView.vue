<script setup>
import NavBar from "../components/NavBar.vue";
import TheWelcome from "../components/TheWelcome.vue";
import Network from "../scripts/Network"
import Dense from "../scripts/Dense"
import MSE from "../scripts/MSE"
import Header from "../components/Header.vue";
import NetworkVisual from "../components/NetworkVisual.vue";

</script>

<template>
    <header>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <Header></Header>
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
            <button @click="step">Step</button>
        </div>
        <NetworkVisual :passedNetwork="passedNetwork" :id="networkVisualizer"></NetworkVisual>


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

    let intervalID;
    let hasStartedFlag = false;

    let networkVisualizer;

    function train(net) {
        net.train()
    }

    export default {
    data() {
        return {
            passedNetwork: network
        }
    },
    methods: {
        step() {
            network.isRunning = true;
            network.train();
            network.isRunning = false;
            for (let i = 0; i < network.xTrain.length; i++) {
                console.log("given : " + network.xTrain[i] + ", outputted : " + network.predict(network.xTrain[i]));
            }

            networkVisualizer = document.getElementById("networkVisualizer")
            
            for (let i = 0; i < networkVisualizer.layerH1s.length; i++) {
                networkVisualizer.layerH1s[i].textContent = "im layer " + i;
            }

        },
        start() {
            network.isRunning = true;
            console.log("start attempted")
            intervalID = window.setInterval(train, 0, network);
            hasStartedFlag = true;
        },
        pause() {
            console.log("pause attempted")
            if (!hasStartedFlag)
                return;
            network.isRunning = false;
            window.clearInterval(intervalID);
        },
        
    },
    components: { Header, NetworkVisual }
}
</script>
