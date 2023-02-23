<script setup>
import NavBar from "../components/NavBar.vue";
import TeamMemberBio from "../components/TeamMemberBio.vue";
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
    <header>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <h1><strong>We are team Pandamonium</strong></h1>
    </header>
    <NavBar></NavBar>
    <hr/>
    <section id="business">
        <h2>The people leading our community outreach and our fundraising.</h2>
        
        <TeamMemberBio imgPath="../../public/person-placeholder.png" msg=
            "My name is Clare and this is my second year in FTC. When I grow up, I want to be a neurologist. 
            First helps me prepare for my future careers because I learn skills universal to all careers like 
            leadership, communication, and time management. One thing I accomplished while on my team was I 
            helped coordinate the girls in STEM library workshops and communicate with both the library and 
            the team where although I tried to prepare the best I could, I still made some mistakes, but I 
            learned a lot about organization/management along the way."
        ></TeamMemberBio>

        <TeamMemberBio imgPath="../../public/person-placeholder.png" msg=
            "Hi! My name is Meera and I am a sophomore at Carlsbad High School. I have been in FIRST 
            since I was in fourth grade with 5 years of FLL experience and now two years in FTC. 
            Using the skills I have acquired from FTC, when I grow up I hope to continue empowering 
            underprivileged people around the world and hopefully use the entrepreneurship skills I 
            have gained to start a business. FIRST has allowed me to spread STEM and key skills to 
            young generations as well as allowing me to learn how to raise money, meet with professionals, 
            and get a head start to life in the workforce. On the team I work heavily on the business side 
            and have assisted with teaching our girls in STEM workshops, organized demos with children 
            museums, arranged a food drive, and have raised over $5,000 for the team's budget."
        ></TeamMemberBio>

        <p>

        </p>

        <TeamMemberBio imgPath="../../public/person-placeholder.png" msg=
            "I came up with the idea of organizing a community 5k to fundraise for our team's goal of 
            creating workshops for girls in STEM. I knew that we needed to raise money in order to make 
            the workshops completely free for the students and the library we were hosting them at. 
            So, I took the initiative to plan the event. I arranged the date, location, and created the 
            flyer. I communicated with the team on how to reach out to friends and family and set numbers to 
            shoot for. I also prepared running bib numbers, talked to participants on the day of the event, 
            and made sure everything ran smoothly. Overall, my efforts helped us raise the necessary funds 
            to make the workshops a success and provide opportunities for young women in STEM."
        ></TeamMemberBio>

    </section>
    <hr/>
    <section id="hardware">
        <h2>The people who build our robot</h2>

        <TeamMemberBio imgPath="../../public/person-placeholder.png" msg=
            "Jacob is a hardware lead and has been participating in the First Tech Challenge for two seasons. 
            He helps design, CAD, manufacture, and build our teams robot. 
            He hopes to one day become a biomedical engineer, 
            applying two of his passions, medicine and engineering, to the same field. 
            The FIRST program has allowed him to explore and new engineering concepts 
            which can later be applied to this career."
        ></TeamMemberBio>

        <TeamMemberBio imgPath="../../public/person-placeholder.png" msg=
            "My name is Stephanie Luong and I am in 8th grade, this is my first year doing FTC. When I grow up 
            I want to do something in the engineering field. FIRST has helped me get closer to my goals by 
            giving me the opportunity to learn about how to work better in a team, learn to problem solve, 
            meet new people, and bond with people who share the same passion as me. I was also in charge of 
            designing the outtake and beacon for our robot."
        ></TeamMemberBio>
    </section>
    <hr/>
    <section id="software">
        <h2>The shadow people who make our robot move</h2>

        <TeamMemberBio imgPath="../../public/person-placeholder.png" msg=
            "Hi! My name is Jack and I am a senior who goes to Sage Creek. I have been in FIRST for about 5 years 
            which has helped me immensly in my goals of becoming a software engineer. The thing that interests me 
            most about CS is machine learning and AI. This inspired me to learn more about math and machine learning
            so I could create a convolutional neural network model from scratch. This architecture is used in several
            places on our robot and is used to automatically intake game elements."
        ></TeamMemberBio>

        <TeamMemberBio imgPath="../../public/person-placeholder.png" msg=
            "Hey! I'm Ethan Luong, and I'm a sophomore who goes to Sage Creek High School. 
            I have been in FTC for almost 2 years as a part of the software department 
            (although my first year was more business than software). 
            I have always wanted to be a part of the computer science field 
            but currently not quite sure what part exactly. FIRST have helped me enhance this 
            passion and helped further progress my skills through learning about programming 
            and more about the computer science field through my more-experienced software teammates. 
            Being a part of this team and although still a programmer with a lot to learn, 
            I have accomplished a fair amount for software. I have researched and programmed a 
            camera calibration application that we can use to remove any distortion in the camera, 
            so we can accurately use the camera without distortion."
        ></TeamMemberBio>
    </section>
    <hr/>
</template>