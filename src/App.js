import React from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import MenuBar from "./MenuBar";
import Home from "./Home";
import Intro from "./Introduce";
import Project from "./Project";
import Contact from "./Contact";
import Board from "./Board";
import Experience from "./Experience";



class App extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    return(
      <div className="App">
        <MenuBar props={this.props} />
        <Route exact path="/" component={Home} />
        <Route path="/intro" component={Intro} />
        <Route path="/experience" component={Experience} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/board" component={Board} />
      </div>
    )
  }
}

export default withRouter(App);
