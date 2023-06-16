import React, { Component } from 'react';
import logo from "../images/logo.png";


export default class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
  render() {
    return (
      <div>
         <header className = "header">
                    <nav>
                       <div><a href="home" className="navbar-brand">Full Stack Employee Management Application</a><span class="end"><img src={logo} alt="Logo" width="80" height="80"/></span></div>
                    </nav>
                </header>
      </div>
    )
  }
}
