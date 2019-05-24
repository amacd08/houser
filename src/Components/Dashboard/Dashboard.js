import React, {Component} from 'react'
import './Dashboard.css'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component{
    constructor() {
        super()
        this.state={
            houseList: [],
        }
    }

    componentDidMount(){
        axios.get('/api/houses')
          .then(res => {
              this.setState({
                  houseList: res.data
              })
          })
          .catch(() => {
              this.setState({
                  houseList:[]
              })
          })
    }

     deleteHouse = async (id) => {
        const result = await axios.delete(`/api/houses/${id}`)
        this.setState({
            houseList:result.data,
        })

    }

    render(){
        const house = this.state.houseList.map((house,i) => {
                let houseObj = this.state.houseList[i]
                return <div className='houseBox'
                            key = {i}>
                            <House 
                            houseObj={houseObj} 
                            deleteHouse={this.deleteHouse}/>
                        </div>
                })
            
                    
 
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
                        {house}
                </div>
            </main>

        )
    }
} export default Dashboard