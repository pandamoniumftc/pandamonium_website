<script setup>
import NavBar from "../components/NavBar.vue";
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
    <header>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <h1><strong>We are team Pandamonium</strong></h1>
    </header>
    <NavBar></NavBar>
    <hr/>
    <section id="about">
        <h2>About Us</h2>
        <p>Pandamonium Robotics is a First Tech Challenge team based in XYZ. We strive to inspire and motivate young people to become science and technology leaders by engaging them in exciting mentor-based programs that build STEM skills, that inspire innovation, and that foster well-rounded life capabilities.</p>
    </section>
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
</template>
