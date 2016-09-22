var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {minimize: false};
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
    // this.handleScroll();
  },

  render: function () {
    var minimize = this.state.minimize ? ' minimize' : '';

    return (
      <div id="menu">
        <header className={"underlay" + minimize}></header>
        <header className={"overlay" + minimize}>
          <h1 className={"name" + minimize}>Tim Mendoza</h1>
          <ul className="nav">
            <li><a href="#">Bio</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </header>
        <div className={"image-wrapper" + minimize}>
          <h1>Software Developer</h1>
          <div className="line"></div>
          <h1>Seattle, WA</h1>
        </div>
      </div>
    )
  },

  handleScroll: function() {
    var y = window.scrollY;

    if (y > 200) {
      this.setState({minimize: true});
    }

    if (y < 200) {
      this.setState({minimize: false});
    }

  }
});
