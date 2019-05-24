import React, {Component} from 'react'
import './House.css'

class House extends Component{

    render(){
        return(
            <div className="houseBox">
                <div className="houseInfoColumn">
                    <p>Property Name: xxx</p>
                    <p>Address: xxxx</p>
                    <p>City: xxx</p>
                    <p>State: xx</p>
                    <p>Zip: xxx </p>
                </div>
                <div className="deleteHouseButton">
                   <h2> X</h2>
                </div>


            </div>
            
        )
    }
} export default House