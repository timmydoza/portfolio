var React = require('react');
var styles = require('./style.scss');

module.exports = React.createClass({
  componentDidMount: function() {

    var bar = this.refs.bar;
    var props = this.props;
    var skills = document.getElementById('skills');

    var threshold = (skills.getBoundingClientRect().top + window.scrollY) - (window.innerHeight * 0.6);

    window.addEventListener('scroll', function() {

      if (window.scrollY > threshold) {

        window.setTimeout(function(){
          bar.style.width = props.width
        }, props.delay);
      }

    });
  },

  render: function() {
    return (
      <div className={styles.skill}>
        <span className={styles.skillName}>{this.props.name}</span>
        <span className={styles.percent}>{this.props.width}</span>
        <div className={styles.bar} style={{background: this.props.color}} ref="bar"></div>
      </div>
    )
  }
});
