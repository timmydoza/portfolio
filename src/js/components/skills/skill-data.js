var colors = [
  "#0d54c6",
  "#c65e0d",
  "#0ea342",
  "#d32a2a"
]

var skills = [

  {
    "name": "JavaScript",
    "width": "85%"
  },

  {
    "name": "Node.JS",
    "width": "75%"
  },

  {
    "name": "MongoDB",
    "width": "40%"
  },

  {
    "name": "Angular.JS",
    "width": "60%"
  },

  {
    "name": "React",
    "width": "55%"
  },

  {
    "name": "Test-driven development",
    "width": "75%"
  },

  {
    "name": "HTML5",
    "width": "50%"
  },

  {
    "name": "CSS / SCSS",
    "width": "45%"
  },

  {
    "name": "Python",
    "width": "65%"
  }

];

module.exports = skills.map(function(skill, index) {
    skill.color = colors[index % colors.length];
    return skill
  });
