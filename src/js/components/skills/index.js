var React = require('react');
var styles = require('./style.scss');

var Skill = require('./skill');
var skillData = require('./skill-data.js');

var delay = 150;

module.exports = React.createClass({
  render: function() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <h1 id="skills" className={styles.heading}>Skills</h1>
            <div className={styles.skills}>

              {skillData.map(function(skill, index) {return (
                <Skill name={skill.name} color={skill.color} width={skill.width} delay={index * delay}/>
              )})}

            </div>
        </div>
      </div>
    )
  }
});
