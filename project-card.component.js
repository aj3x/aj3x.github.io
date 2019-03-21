angular.
  module('navRoute').
  component('projectList', {
    template:
<div class="card" id="{{project.id}}">
        <div class="card-header" id="heading{{project.id}}">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse{{project.id}}" aria-expanded="false" aria-controls="collapse{{project.id}}">
                    {{project.title}}
                </button>
            </h5>
        </div>
        <div id="collapseDwarves" class="collapse" aria-labelledby="headingDwarves" data-parent="#accordionProjects">
            <div class="card-body">
                <p>
                    My team and I developed this game for our Game Design Workshop class(CMPT 406). 
                    We decided on creating a procedurally generated game wthat focused on interactions with NPCs.
                    We developed the game using Unity and utilized Agile methodologies. 
                    We met twice a week, once for our daily standups and the other for any questions, integrating issues, and as a general work period.
                </p>
                <p>
                    The game is procedurally generated using Perlin noise for resources and terrain. 
                    Caves are spawned on the map and can be entered. We used cellular automaton to create the interiors. 
                    From here we scattered events, resources, and enemies around the cave. 
                    There are two main oppenents the player faces weather and elemental penguins. 
                    The penguins spawn during extreme weather and attack whichever character is in range.
                    The player is given a grace period before this to allow them to develop their town center to help defend against them.
                    The AI uses dynamic nav meshes to get around.
                    To reduce the system load, only selected areas are generated dynamically around: player, towncenter, and outposts.
                    <br>
                    I worked on numerous aspects of the game throughout development. The majority of my time was spent on AI, NavMesh, terrain
                    generation, resource generation, and improving efficiency of the entire system.
                    As well I helped team members design, develop, and integrate their code into the project.
                    Overall the team worked diligently and spent many weekends fixing unforseen problems and efficiency issues.
                    The final result was presented at Bartari to the general public and did well for itself. 
                    <br>
                    <a class="alert-link" href="https://github.com/LucrativeHippo/Dwarves">GitHub</a>
                </p>
                <img class="img-fluid" ng-init="dwarfScreen='files/dwarves_title'"
                    src="{{dwarfScreen}}.png" 
                    alt="GameJam Screenshot" 
                    title="Are those... penguins?"
                    srcset="{{dwarfScreen}}_320.png 320w,
                            {{dwarfScreen}}_480.png 480w,
                            {{dwarfScreen}}_800.png 800w"
                    sizes="(max-width: 320px) 320px,
                            480px"
                >
            </div>
        </div>
    </div>









    
    <!-- TODO:DELETE ME -->
    <div class="card" ng-include="" *ngFor="let project of projects" id="{{project.id}}">
        <div class="card-header" id="heading{{project.id}}">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse{{project.id}}" aria-expanded="false" aria-controls="collapse{{project.id}}">
                    {{project.title}}
                </button>
            </h5>
        </div>
        <div id="collapseDwarves" class="collapse" aria-labelledby="headingDwarves" data-parent="#accordionProjects">
            <div class="card-body">
                <p>
                    My team and I developed this game for our Game Design Workshop class(CMPT 406). 
                    We decided on creating a procedurally generated game wthat focused on interactions with NPCs.
                    We developed the game using Unity and utilized Agile methodologies. 
                    We met twice a week, once for our daily standups and the other for any questions, integrating issues, and as a general work period.
                </p>
                <p>
                    The game is procedurally generated using Perlin noise for resources and terrain. 
                    Caves are spawned on the map and can be entered. We used cellular automaton to create the interiors. 
                    From here we scattered events, resources, and enemies around the cave. 
                    There are two main oppenents the player faces weather and elemental penguins. 
                    The penguins spawn during extreme weather and attack whichever character is in range.
                    The player is given a grace period before this to allow them to develop their town center to help defend against them.
                    The AI uses dynamic nav meshes to get around.
                    To reduce the system load, only selected areas are generated dynamically around: player, towncenter, and outposts.
                    <br>
                    I worked on numerous aspects of the game throughout development. The majority of my time was spent on AI, NavMesh, terrain
                    generation, resource generation, and improving efficiency of the entire system.
                    As well I helped team members design, develop, and integrate their code into the project.
                    Overall the team worked diligently and spent many weekends fixing unforseen problems and efficiency issues.
                    The final result was presented at Bartari to the general public and did well for itself. 
                    <br>
                    <a class="alert-link" href="https://github.com/LucrativeHippo/Dwarves">GitHub</a>
                </p>
                <img class="img-fluid" ng-init="dwarfScreen='files/dwarves_title'"
                    src="{{dwarfScreen}}.png" 
                    alt="GameJam Screenshot" 
                    title="Are those... penguins?"
                    srcset="{{dwarfScreen}}_320.png 320w,
                            {{dwarfScreen}}_480.png 480w,
                            {{dwarfScreen}}_800.png 800w"
                    sizes="(max-width: 320px) 320px,
                            480px"
                >
            </div>
        </div>
    </div>