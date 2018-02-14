var colors = [
  "#0d54b6",
  "#c65e0d",
  "#0ea342",
  "#c32a2a"
]

var skills = [

  {
    "name": "JavaScript",
    "width": "85%"
  },

  {
    "name": "Node.js",
    "width": "60%"
  },

  // {
  //   "name": "MongoDB",
  //   "width": "40%"
  // },

  {
    "name": "Angular 1",
    "width": "80%"
  },

  {
    "name": "React",
    "width": "65%"
  },

  {
    "name": "Test-driven development",
    "width": "55%"
  },

  {
    "name": "CSS / SCSS",
    "width": "75%"
  },

  {
    "name": "Python",
    "width": "70%"
  },

  {
    "name": "AWS / DevOPS",
    "width": "40%"
  },

  {
    "name": "Machine Learning",
    "width": "5%"
  }

];

module.exports = skills.map(function(skill, index) {
    skill.color = colors[index % colors.length];
    return skill
  });
