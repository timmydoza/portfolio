var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {minimize: false};
  },

  componentWillMount: function() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },

  render: function () {
    var minimize = this.state.minimize ? ' minimize' : '';

    return (
      <header className={minimize}>
        <div className="container">
          <h1 className={"name" + minimize}>Tim Mendoza</h1>
          <nav className="nav">
            <a href="#">Projects</a>
            <a href="#">Resume</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>
    )
  },

  handleScroll: function() {
    var y = window.scrollY;

    if (y > 100 && !this.state.minimize) {
      this.setState({minimize: true});
    }

    if (y < 100 & this.state.minimize) {
      this.setState({minimize: false});
    }

  }
});
