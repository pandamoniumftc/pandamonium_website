<template>
    <nav>
        <ul>
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/team">Team</router-link></li>
        <li><router-link to="/outreach">Outreach</router-link></li>
        <li><router-link to="/playground">Playground</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
/* General styles */
body {
    font-family: Arial, sans-serif;
    color: #333; /* dark gray */
    background-color: #fff; /* white */
  }
  
  a {
    color: #333; /* dark gray */
    text-decoration: none;
  }
  
  /* Header styles */
  header {
    background-color: #333; /* light gray */
    padding: 20px;
    color: #f2f2f2;
    text-align: center;
  }
  
  header h1 {
    margin: 0;
    color: #f2f2f2; /* dark gray */
    font-size: 2em;
  }
  
  /* Navigation styles */
  nav {
    background-color: #fff; /* white */
    padding: 10px;
    text-align: right;
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  nav li {
    display: inline-block;
    margin-left: 20px;
  }
  
  nav a:hover {
    color: #00ff00; /* green accent */
  }
  
  /* Section styles */
  section {
    padding: 20px;
  }
  
  section h2 {
    color: #333; /* dark gray */
    margin-top: 0;
    font-size: 1.5em;
  }
  
  /* Footer styles */
  footer {
    background-color: #f2f2f2; /* light gray */
    padding: 10px;
    text-align: center;
    color: #333; /* dark gray */
    font-size: 0.8em;
  }
  
  .members p {
    width: 600px;
  }
  
  /* Form styles */
  form {
    text-align: left;
    max-width: 400px;
    align-items: left;
  }
  
  label, input, textarea {
    display: block;
    margin-bottom: 10px;
    font-size: 0.9em;
  }
  
  input[type="submit"] {
      background-color: #00ff00; /* green accent */
      color: #333; /* dark gray */
      padding: 10px;
      border: none;
      cursor: pointer;
      margin-top: 10px;
  }
  
  
</style>