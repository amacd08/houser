import React, {Component} from 'react'
import '../Wizard.css'
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import store from '../../../redux/store';
import { UPDATE_MORTGAGE, UPDATE_RENT } from '../../../redux/store'

class StepOne extends Component{

constructor() {
    const reduxState = store.getState();
    super()
    this.state ={
        mortgage: reduxState.mortgage,
        rent: reduxState.rent,
        toDashboard: false

    }
}

    componentDidMount(){
        const reduxState = store.getState()
        this.setState({
            name:reduxState.mortgage,
            address: reduxState.rent,
        })
    }


    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addHouse = () => {
        const reduxState = store.getState()
        const newObj = {
            ...reduxState,
            mortgage: this.state.mortgage,
            rent: this.state.rent
        }
        axios.post('api/houses',newObj)
        .then(() => {
            this.setState({
                toDashboard: true
            })
        })
    }

    render() {
        if (this.state.toDashboard) return <Redirect to='/' />
        return(
            <div>
                <div className="wizardBox">
                    <h3>Mortgage</h3>
                    <input 
                      type='text' 
                      name='mortgage'
                      placeholder='Morgtage'
                      value={this.state.mortgage}
                      onChange={(e) => this.handleInput(e)}>
                    </input>
                    <h3>Recommended Rent</h3>
                    <input 
                      type='text' 
                      className="morgtage"
                      name="rent"
                      placeholder={this.state.mortgage ? this.state.mortgage * 1.25
                        :
                        this.state.rent}
                      value={this.state.rent}
                      onChange={(e) => this.handleInput(e)}>
                    </input>
                </div>
                <footer>
                    <div 
                      className="wizardCompleteButton"
                      onClick={this.addHouse}>
                                <h3>Add House</h3>
                    </div>
                </footer>
            </div>
        )
    }
} export default StepOne
