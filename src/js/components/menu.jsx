var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      underlay: {},
      overlay: {},
      name: {},
      img: {}
    };
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
    // this.handleScroll();
  },

  render: function () {
    return (
      <div>
        <header className="underlay" style={this.state.underlay}></header>
        <header className="overlay" style={this.state.overlay}>
          <h1 className="name" style={this.state.name}>Tim Mendoza</h1>
          <ul className="nav">
            <li><a href="#">Bio</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </header>
        <div className="image-wrapper" style={this.state.img}>
          <h1>Software Developer</h1>
          <div className="line"></div>
          <h1>Seattle, WA</h1>
        </div>
      </div>
    )
  },

  handleScroll: function() {
    var headerMax = 400; //pixels
    var headerMin = 50;
    var headerHeight = 100;
    var ratio = headerMax / headerMin;

    var scroll = window.scrollY;
    var offset = Math.min(scroll / ratio, headerMin);

    var state = {
      underlay: {},
      overlay: {},
      name: {},
      img: {}
    };

    //Adjusts size of header
    state.underlay.height = 100 - offset + 'px';
    state.overlay.height = 100 - offset + 'px';

    //Adjusts opacity of header
    state.underlay.opacity = Math.min(0.8, scroll / (headerMax / 0.8));

    //Adjusts size of logo
    state.name.fontSize = Math.min(headerMax, scroll) / -headerMax + 3 + 'em';

    //Adjusts left margin of logo
    state.name.marginLeft = 10 - Math.min(headerMax, scroll) * (3 / headerMax) + '%';

    //parallax effect
    state.img.backgroundPosition = '100% ' + (scroll / 3) + 'px';

    this.setState(state);

  }
});
