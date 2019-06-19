import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header>
            <div class="collapse bg-dark" id="navbarHeader">
             
            </div>
            <div class="navbar navbar-dark bg-dark shadow-sm">
              <div class="container d-flex justify-content-between">
                <a href="#" class="navbar-brand d-flex align-items-center">
                 <img style={{width:'37px'}} src="http://dfedorov.spb.ru/python3/Python-logo-notext.svg.png" alt=""/>
                </a>
          
              </div>
            </div>
          </header>
        )
    }
}

export default Header
