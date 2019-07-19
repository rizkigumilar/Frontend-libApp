import React, { Component } from 'react';
import '../Assets/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="titleBar">
                <div style={{paddingLeft:'100px',paddingTop:'10px'}}>
                    <span style={{color:'white',fontSize:'30pt',fontWeight:'bolder'}}>LIBRARY</span>
                </div>
            </div>
        );
    }
}

export default Navbar;
