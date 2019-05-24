import React, {Component} from 'react'
import houser_logo from './houser_logo.png'
import "./Header.css"

class Header extends Component{


    render(){
        return(
            <nav>
                <div className="logoBox">
                    <img src={houser_logo} className='logo' />
                    <h2 className="logoText">Houser</h2>
                </div>
            </nav>
        )
    }
} export default Header