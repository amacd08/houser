import React, {Component} from 'react'
import './Wizard.css'
import {Link} from 'react-router-dom'

class Wizard extends Component{
    constructor() {
        super()
        this.state ={
            name:'',
            address: '',
            city: '',
            state: '',
            zip:''

        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    render(){
        console.log(this.state.name)
        return(
            <div className="centerStage">
                <div className="wizardCenterStageHeader">
                    <h2>Add New Listing</h2>
                    <div className="wizardCancelButton">
                        <Link to='/'><h3>Cancel</h3></Link>
                    </div>
                </div>
                <div className="wizardBox">
                    <h3>Property Name</h3>
                    <input 
                      type='text' 
                      name='name'
                      placeholder='Property Name'
                      value={this.state.name}
                      onChange={(e) => this.handleInput(e)}>
                    </input>
                    <h3>Address</h3>
                    <input 
                      type='text' 
                      className="addressInput"
                      placeholder='Address'
                      value={this.state.address}
                      onChange={(e) => this.handleInput(e)}>
                    </input>
                    <div className="cityStateZipBox">
                        <div className='city'>
                            <h3>City</h3>
                            <input 
                              type='text' 
                              name="city"
                              placeholder="City"
                              value={this.state.city}
                              onChange={(e) => this.handleInput(e)}>
                             </input>
                        </div>
                        <div className='state'>
                            <h3>State</h3>
                            <input 
                              type='text' 
                              name="state"
                              placeholder='ST'
                              value={this.state.state}
                              onChange={(e) => this.handleInput(e)}>
                            </input>
                        </div>
                        <div className='zip'>
                            <h3>Zip</h3>
                            <input 
                              type='text' 
                              name="zip"
                              placeholder='Zip'
                              value={this.state.zip}
                              onChange={(e) => this.handleInput(e)}>
                            </input>
                        </div>
                    </div>
                </div>
                <footer>
                <div className="wizardCompleteButton">
                            <h3>Complete</h3>
                </div>
                </footer>


            </div>
        )
    }
} export default Wizard