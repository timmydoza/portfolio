var React = require('react');
var styles = require('./style.scss');

module.exports = React.createClass({
  render: function() {
    return (
      <div className={styles.background}>
        <div className="container">
          <h1 id="skills" className={styles.white}>Skills</h1>
            <div className={styles.skills}>

              <div className={styles.skill}>
                <span className={styles.skillName}>Test</span>
                
              </div>

            </div>
        </div>
      </div>
    )
  }
});
