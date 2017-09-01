import React from 'react';
import styles from './style.scss';

import { Grid, Row, Column } from '../layout';

var email = "timmydoza";
var domain = "gmail.com";

var text = <p className={styles.text}>
  Hi. My name is Tim.  I'm a software developer, musician, and Colorado native.
  I recently moved to Boston after living in Seattle for over a year.  I love to use
  code to turn creative ideas into reality.  Programming has been a hobby
  of mine since the second grade, and in late 2015 I decided to make it my
  career.  Last fall I took classes in Python and Full-stack JavaScript at a small code
  school in Seattle called <a href="https://www.codefellows.org" target="_blank">
  Codefellows</a>. Shortly thereafter, I landed my first software gig at an integration
  start-up called <a href="https://azuqua.com" target="_blank">Azuqua</a>, where I worked as an
  application developer.
  <br /><br />
  In my spare time, you can find me practicing trumpet and piano, playing with
  my dog, or working on side-projects, some of which you can see below.  If you
  want to get in touch, feel free to send me an email
  at <a href={"mailto:" + email + "@" + domain}>{email + "@" + domain}</a>.</p>


export default class About extends React.Component {
  render() {
    return (
      <section>
        <Grid>
          <h1 id="about" className={styles.heading}>About</h1>
          <img src="img/tim.jpg" className={styles.image}/>
          {text}
          <div className={styles.icons}>
            <a href={"mailto:" + email + "@" + domain}>
              <img src="img/gmail.png" className={styles.icon} />
            </a>
            <a href="https://github.com/timmydoza" target="_blank">
              <img src="img/github.png" className={styles.icon} />
            </a>
            <a href="https://linkedin.com/in/timmydoza" target="_blank">
              <img src="img/in.png" className={styles.icon} />
            </a>
            <a href="https://npmjs.com/~timmydoza" target="_blank">
              <img src="img/npm.png" className={styles.icon} />
            </a>
          </div>
        </Grid>
      </section>
    )
  }
}
