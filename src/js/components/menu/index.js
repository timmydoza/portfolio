var React = require('react');
var styles = require('./style.scss');

module.exports = React.createClass({

  getInitialState: function() {
    return {minimize: false};
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },

  handleScroll: function() {
    var y = window.scrollY;

    if (y > 100 && !this.state.minimize) {
      this.setState({minimize: true});
    }

    if (y < 100 & this.state.minimize) {
      this.setState({minimize: false});
    }

  },

  render: function () {
    var minimize = this.state.minimize ? ' ' + styles.minimize : '';

    return (
      <header className={styles.menu + minimize}>
        <div className={styles.container}>
          <a data-scroll href="#">
            <h1 className={styles.name + minimize}>Tim Mendoza</h1>
          </a>
          <nav className={styles.nav}>
            <a className={styles.link} data-scroll href="#about">About</a>
            <a className={styles.link} data-scroll href="#skills">Skills</a>
            <a className={styles.link} data-scroll href="#projects">Projects</a>
          </nav>
        </div>
      </header>
    )
  }
});
