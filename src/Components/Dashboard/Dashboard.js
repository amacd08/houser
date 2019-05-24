import React, {Component} from 'react'
import './Dashboard.css'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component{
    constructor() {
        super()
        this.state={
            houseList: []
        }
    }

    componentDidMount(){
        axios.get('/api/houses')
          .then(res => {
              this.setState({
                  houseList: res.data
              })
          })
    }

    render(){
        return(
            <main>
                <div className="centerStage">
                    <div className="centerStageHeader">
                        <p>Dashboard</p>
                        <div className="centerStageButton">
                           <Link to='/wizard'><h3>Add New Property</h3></Link>
                        </div>
                    </div>

                    <span><h2>Home Listings</h2></span>
                        <House />
                </div>
            </main>

        )
    }
} export default Dashboard