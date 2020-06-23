import React, {Fragment} from "react";
import WOW from 'wowjs';
import Welcome from './welcome';
import Projects from './projects';
import Skills from './skills';

export default class Home extends React.Component {
  componentDidMount() {new WOW.WOW().init();}

  render() {
    return (
        <Fragment> 
            <Welcome />
            <Projects />
            <Skills />
        </Fragment>
    )
  }
}