import React, {Component} from 'react'
import '../Wizard.css'
import {Link} from 'react-router-dom'
import store, {UPDATE_IMG} from '../../../redux/store'


class StepTwo extends Component{

constructor() {
    const reduxState = store.getState();
    super()
    this.state ={
        img: reduxState.img
    }
}

    componentDidMount(){
        const reduxState = store.getState()
        this.setState({
            img:reduxState.img,
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    saveChanges(){
        store.dispatch({
          type: UPDATE_IMG,
          payload: this.state.img
        })
    }

    render() {
        return(
            <div>
                <div className="wizardBox">
                    <h3>Image</h3>
                    <input 
                      type='text' 
                      name='img'
                      placeholder='Image URL'
                      value={this.state.img}
                      onChange={(e) => this.handleInput(e)}>
                    </input>
                </div>
                <footer>
                    <div 
                      className="wizardCompleteButton"
                      onClick={() => this.saveChanges()}>
                                <Link to='/wizard/step3'><h3>Next</h3></Link>
                    </div>
                </footer>
            </div>
        )
    }
} export default StepTwo