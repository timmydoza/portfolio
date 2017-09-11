import React from 'react';
import styles from './style.scss';
import CSSModules from 'react-css-modules';

import { Grid, Row, Column } from '../layout';

var email = "timmydoza";
var domain = "gmail.com";

var text = (

      <p styleName='text'>

      Hi. My name is Tim.  I'm a software developer, musician, and Colorado native.  I currently work
      as a Frontend Developer for <a href="https://www.beamland.com/" target="_blank" rel="noopener">BEAM</a> in downtown Boston, where I spend most of time developing <a href="http://www.miniusa.com">miniusa.com</a>, and
      the recently launched sites <a href="https://www.amg.com" target="_blank" rel="noopener">amg.com</a> and <a href="https://www.amgfunds.com" target="_blank" rel="noopener">amgfunds.com</a>.

      <br /><br />

      Previously, I worked at a startup in Seattle, WA called <a href="https://azuqua.com" target="_blank" rel="noopener">Azuqua</a>, as an application developer, where I
      wrote backend code to integrate the APIs of many popular services (Gmail, Salesforce, Smartsheet, etc.) into the Azuqua
      platform.

      <br /><br />

      In my spare time, you can find me practicing trumpet and piano, playing with
      my dog, or working on side-projects, some of which you can see below.  If you
      want to get in touch, feel free to send me an email
      at <a href={"mailto:" + email + "@" + domain}>{email + "@" + domain}</a>.

    </p>

);

class About extends React.Component {
  render() {
    return (
      <section id="about" className="pageSection">
        <Grid>
          <h1 styleName='headline'>About</h1>
          <img src="img/tim.jpg" className='hide-md' styleName='image'/>
          {text}
          <div styleName='icons'>
            <a href={"mailto:" + email + "@" + domain}>
              <img src="img/gmail.png" styleName='icon' />
            </a>
            <a href="https://github.com/timmydoza" target="_blank" rel="noopener">
              <img src="img/github.png" styleName='icon' />
            </a>
            <a href="https://linkedin.com/in/timmydoza" target="_blank" rel="noopener">
              <img src="img/in.png" styleName='icon' />
            </a>
            <a href="https://npmjs.com/~timmydoza" target="_blank" rel="noopener">
              <img src="img/npm.png" styleName='icon' />
            </a>
          </div>
        </Grid>
      </section>
    )
  }
}

export default CSSModules(About, styles);
