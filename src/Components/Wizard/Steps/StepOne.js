import React, {Component} from 'react'
import '../Wizard.css'
import {Link} from 'react-router-dom'
import store, {UPDATE_ADDRESS,UPDATE_NAME,UPDATE_ZIP,UPDATE_CITY,UPDATE_STATE} from '../../../redux/store'

class StepOne extends Component{

constructor() {
    const reduxState = store.getState();
    super()
    this.state ={
        name:reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
    }
}

    componentDidMount(){
        const reduxState = store.getState()
        this.setState({
            name:reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    saveChanges(){
        store.dispatch({
          type: UPDATE_NAME,
          payload: this.state.name
        })
        store.dispatch({
          type: UPDATE_ADDRESS,
          payload: this.state.address
        })
        store.dispatch({
          type: UPDATE_CITY,
          payload: this.state.name
        })
        store.dispatch({
            type: UPDATE_STATE,
            payload: this.state.state
          })
        store.dispatch({
          type: UPDATE_ZIP,
          payload: this.state.zip
        })
    }

    render() {
        return(
            <div>
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
                      name="address"
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
                    <Link to='/wizard/step2'>
                        <div 
                          className="wizardCompleteButton"
                          onClick={() => this.saveChanges()}>
                                    <h3>Next</h3>
                        </div>
                    </Link>
                </footer>
            </div>
        )
    }
} export default StepOne
