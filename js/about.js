const person1Skills = 
["Html, Css, Javascript, Web Design"];
const person2Skills = 
["Writer, Adaptability"];

function addTAgs(list, containerId){
    const container = document.getElementById(containerId);
    list.forEach(skill => {
        const span = document.createElement("span");
        span.className = "skill-tag";
        span.textContent = skill;
        container.appendChild(span);
    });
}

addTAgs(person1Skills, "person1-skills");
addTAgs(person2Skills, "person2-skills");
