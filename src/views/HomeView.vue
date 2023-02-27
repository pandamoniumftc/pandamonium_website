<script setup>
import Header from "../components/Header.vue";
import NavBar from "../components/NavBar.vue";
import TheWelcome from "../components/TheWelcome.vue";
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
        <p>
            We are rookie Team Pandamonium #21303 based in Carlsbad, CA. Ranging from grades 8-12, we are a diverse team 
            all with our each strengths and skills. Most of us were on an FLL team together for around four years but 
            then we ventured off into 4 different schools at the start of last year. After seeing each other at competitions
            and missing the team dynamic, we reformed the team and recruited new members. From there we developed a plan 
            to fundraise, strategize, and secure the fundamentals to success as a team. Because of our hard work and 
            determination, we are here today to share our story. 
        </p>

    </section>
    <!--
    <section id="contact">
        <h2>Contact Us</h2>
        <form action="submit-form.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>
        <label for="message">Message:</label>
        <textarea id="message" name="message"></textarea><br>
        <input type="submit" value="Send">
        </form>
    </section>
    -->
</template>

<style scoped>
    #about {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    #about p {
        width: 300 px;
    }
</style>
