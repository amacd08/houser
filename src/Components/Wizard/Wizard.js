import React, {Component} from 'react'
import './Wizard.css'
import {Link, Route} from 'react-router-dom'
import StepOne from './Steps/StepOne'
import StepTwo from './Steps/StepTwo'
import StepThree from './Steps/StepThree'


class Wizard extends Component{
    constructor() {
        super()
        this.state = {
        }
    }

    render(){
        return(
            <div className="centerStage">
                <div className="wizardCenterStageHeader">
                    <h2>Add New Listing</h2>
                    <div className="wizardCancelButton">
                        <Link to='/'><h3>Cancel</h3></Link>
                    </div>
                </div>
            <Route exact path='/wizard' component={StepOne}/>
            <Route path='/wizard/step2' component={StepTwo} />
            <Route path='/wizard/step3' component={StepThree} />

            </div>
        )
    }
} export default Wizard