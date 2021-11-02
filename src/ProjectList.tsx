import React from 'react'

const projects:ProjectType[] = [
  {
    id: "hugm",
    title: "Hugr",
    // img: '',
    git: "https://hugr.ca",
    alt: "Hugr",
    dates: "May 2019 - Present",
    job: "Full Stack Developer",
    description: <p>
      I started working on this project early on, helping develop the MVP. I have made major contributions to the project and enjoyed designing and developing the infrastructure.
      Some of my contributions include designing and building an offline first syncing solution.
      Creating a secure, performant, scalable backend to enable users to track and share data as well as organizations to view their member's aggregated data.
      Implementing designs in React Native and NextJS and the integrations with the backend's API.
    </p>,
    link: "Hugr",
    languages: ["React", "React Native", "JavaScript", "Jest", "Realm", "AWS", "NoSQL", "DynamoDB", "Next.js", "NextAuth.js", "Lambda", "Cypress"]
  },
  {
    id:"this",
    title:"This Website!",
    img: "web",
    alt:"Webpage Inception",
    dates:"Feb 2018 - Present",
    job:"Sole Programmer",
    description:<p>
      I developed this website using React, Bootstrap, Sass, and some premium elbow grease.
      I try to continually updating this website to reflect my experience.
      Come back soon as I migrate this website to <a href="https://nextjs.org">Next.js</a>.
    </p>,
    languages:["React", "Sass", "JavaScript", "Bootstrap", "CSS", "HTML5", "JSX"],
    git: "https://github.com/aj3x/aj3x.github.io",
  },


  {
    id:"redmarket",
    title:"Red Markets App",
    // img:'404.jpg',
    alt:"Red Markets Main Page",
    dates:"Nov 2018 - Apr 2019",
    job:"Sole Programmer",
    description:<p>
      A web application for keeping track of characters 
      in the pen and paper game Red Markets. <br/>
      I am currently updating the alpha version to utilize Redux. <br/>
      This application uses some other packages in react such 
      as <a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a> as 
      well as <a href="https://www.npmjs.com/package/rc-slider">rc-slider</a>.
    </p>,
    languages:["React", "Redux", "Sass", "Bootstrap", "JavaScript", "CSS"],
    git: "https://github.com/aj3x/red-markets-reactapp",
  },


  {
    id:"screeps",
    title:"Screeps Web App",
    // img:'404.jpg',
    alt:"Screeps",
    dates:"Dec 2018 - Apr 2019",
    job:"Sole Programmer",
    description:<p>
      A web application to enable play on a users Screeps server.
      Currently testing and creating a new backend to support Google Authorization for logins.
    </p>,
    languages:["NodeJS", "MongoDB", "Redis", "JavaScript", "REST APIs", "React", "Sass", "Angular", "CSS", "HTML5"],
    git: "https://github.com/aj3x/ScreepsWeb"
  },


  {
    id:"sudoku",
    title:"Sudoku Solver",
    img:'sudoku',
    alt:"Sudoku",
    dates:"October 2018",
    job:"Sole Programmer",
    description:<p>
      An app created to solve Sudoku puzzles using Python and Qt for backend and GUI.
      I use a trial and error based approach that reduces the search space quickly by making steps that are guaranteed to be valid,
      checking for any spaces that will lead to future problems, and selecting squares with the smallest number of possiblities.
    </p>,
    languages:["Python", "Qt", "Optimization"],
    git: "https://github.com/aj3x/SudokuSolver"
  },


  {
    id:"gamejam2018",
    title:"GameJam 2018",
    img:'gamejam2018',
    alt:"GameJam 2018",
    dates:"May 2018",
    job:"Programmer",
    description:<p>
    We developed <b>Force of Nature</b> a chaotic cooperative game where players fight the forces 
    of nature as they attempt to direct the "Mothership" that they all control.
    Everything put into the game was developed by the team from code to drawings to sound.
    I developed code for the ships, UI, tested code, and pair programmed with other members of the team.
    </p>,
    languages:["Unity", "C#"],
    git: "https://github.com/KillerGiraffeStudios/GameJamMay2018"
  },


  {
    id:"dwarves",
    title:"The Dwarves at Hielthe Mine",
    img:'dwarves',
    alt:"Dwarves",
    dates:"Jan 2018 - April 2018",
    job:"Programmer",
    description:<p> Our team developed this game for our Game Design Workshop class(CMPT 406). 
    We developed a procedurally generated game that focused on interactions with NPCs.
    We met twice a week, once for our daily standups and the other for any questions, integrating issues, and as a general work period.
  <br/>
    {/* The game is procedurally generated using Perlin noise for resources and terrain.  */}
    {/* Caves are spawned on the map and can be entered. We used cellular automaton to create the interiors.  */}
    {/* From here we scattered events, resources, and enemies around the cave.  */}
    {/* There are two main oppenents the player faces weather and elemental penguins.  */}
    {/* The penguins spawn during extreme weather and attack whichever character is in range. */}
    {/* The player is given a grace period before this to allow them to develop their town center to help defend against them. */}
    {/* The AI uses dynamic nav meshes to get around. */}
    {/* To reduce the system load, only selected areas are generated dynamically around: player, towncenter, and outposts. */}
    I worked on numerous aspects of the game throughout development. The majority of my time was spent on AI, NavMesh, terrain
    generation, resource generation, and improving efficiency of the entire system by over 1000%.
    I also helped team members design, develop, and integrate their code into the project and acted as the go to person for programming help.
    Overall the team worked diligently and spent many weekends fixing unforseen problems and efficiency issues.
    The final result was presented at Bartari to the general public. 
    <br/>
    </p>,
    languages:["Unity", "C#", "Procedural Generation", "Agile", "Optimization", "Tech Lead"],
    git: "https://github.com/LucrativeHippo/Dwarves"
  },


  {
    id:"bomber",
    title:"BomberBoy",
    img:'bomber',
    alt:"BomberBoy action",
    dates:"Oct 2017 - Dec 2017",
    job:"Programmer",
    description:<p>
      Bomberman replica with networked mobile multiplayer and Facebook and Twitter integration. 
      Features semi-destructible environment, room for up to 4 networked players, and easy to use mobile controls. 
      My work consisted of programming the environment and players, as well as integrating the game with the network team.
    </p>,
    languages:["Unity", "C#", "Networking", "REST APIs"],
    git: "https://github.com/mkp003/CMPT436Project"
  },


  {
    id:"gamejam2016",
    title:"GameJam 2016",
    img:'gamejam',
    alt:"Gamejam 2016",
    dates:"February 2016",
    job:"Team Lead",
    description:<p>
    Brawling game that supports up to four players. 
    It contains five unique classes which are stronger and weaker to two other classes.
    This project was an enlightening experience for me, as it was my first experience leading a team.
    I learnt a lot about managing a team, prioritization of features, and facilitating communication between teammates.
    After the GameJam, I repaired a number of sections of code that we didn't have time to fix.
    </p>,
    languages:["Team Lead", "Unity", "C#"],
    git: "https://github.com/KillerGiraffeStudios/GameJam"
  },


  {
    id:"king",
    title:"The Mad King AI",
    // img:'404.jpg',
    alt:"Sudoku",
    dates:"Oct 2018",
    job:"Programmer",
    description:<p>
      The game is an asymmetric, turn based, two player game.
      Our challenge was to develop the game and an AI to play it. 
      I first tested a few methods of storing in Python to compare their read and write times.
      From here we developed the backend for the game, a Minimax search, testing, AlphaBeta pruning, and more testing.
    </p>,
    languages:["Python", "AI", "MiniMax", "AlphaBeta"],
    git: "https://github.com/aj3x/SudokuSolver"
  },


  // {
  //   id:"sudoku",
  //   title:"Sudoku Solver",
  //   // img:'404.jpg',
  //   alt:"Sudoku",
  //   dates:"Oct 2018",
  //   job:"Sole Programmer",
  //   description:<p>
  //     An app created to solve Sudoku puzzles using Python and Qt for backend and GUI.
  //     I use a trial and error based approach that reduces the search space quickly by making steps that are guaranteed to be valid,
  //     checking for any spaces that will lead to future problems, and selecting squares with the smallest number of possiblities.
  //   </p>,
  //   languages:["Python", "Qt"],
  //   git: "https://github.com/aj3x/SudokuSolver"
  // },

  // {
  //   id:"test",
  //   title:"Red Markets App",
  //   // img:'404.jpg',
  //   alt:"Red Markets Main Page",
  //   dates:"Nov 2018 - Present",
  //   job:"Sole Programmer",
  //   description: <ul>
  //     <li>A web application for keeping track of characters in the pen and paper game Red Markets.</li>
  //     <li>I am currently updating the original version to use Redux.</li>
  //     <li>This application uses some other packages in react such as <a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a> as well as <a href="https://www.npmjs.com/package/rc-slider">rc-slider</a>.</li>
  //   </ul>,
  //   languages:["React", "Redux", "Sass", "Bootstrap", "JavaScript", "CSS"],
  //   git: "https://github.com/aj3x/red-markets-reactapp",
  // },
];

export default projects;
