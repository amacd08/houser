import React, {Component} from 'react'
import './House.css'

class House extends Component{

    deleteHouse = () => {
        this.props.deleteHouse(this.props.houseObj.id)
    }

    render(){
        const {name, address, city, state, zip} = this.props.houseObj

        return(
            <div className="houseBox">
                <div className="houseInfoColumn">
                    <p>Property Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>City: {city}</p>
                    <p>State: {state}</p>
                    <p>Zip: {zip} </p>
                </div>
                <div 
                  className="deleteHouseButton"
                  onClick={this.deleteHouse}>
                   <h2> X</h2>
                </div>


            </div>
            
        )
    }
} export default House