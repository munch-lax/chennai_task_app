import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {getAccessToken,fetchTasks,deleteTaskAction} from '../actions'
 class Showtask extends Component {

    state={id:''}
    componentDidMount(){
        this.props.getAccessToken()
        this.props.fetchTasks()
    }

    handleSubmit(){
        console.log('ye le bhai id',this.state.id)
    }
    render() {
        console.log('this is the array',this.props)
        return (
            <div>{
                this.props.tasks.map(task=>{

                    
                    return(
                        
                                <div key={task.id} class="ui raised card" style={{width:'100%'}}>
                                <div className="content">
                                    <div className="header">{task.task_date_time_in_utc_string}</div>
                                    
                                    <div className="description">
                                    <p>{task.task_msg}</p>
                                    </div>

                                </div>
                                <div className="extra content">
                                    <div className="left floated author">
                                    <img className="ui avatar image" src={task.user_icon}/>{task.user_name}
                                    </div>
                                    <div className="right floated author">
                                    <div>
                                        <div class="ui checkbox" style={{marginRight:40}}>
                                        <input type="checkbox" name="example"/>
                                        <label>Is Completed ?</label>
                                        </div>
                                    <Link to={`/edit/${task.id}`} ><button className='ui primary button'>Edit</button></Link>
                                    <Link to={`/delete/${task.id}`} ><button className='ui red button'>Delete</button></Link>
                                
                                    </div>
                                </div>
                                </div>
                                
                                </div>
                        
                    )
                })

            }
            </div>
        )
    }
}

const mapstatetoprops=(state)=>{
    
    return {tasks:state.tasks.data}

}


export default connect(mapstatetoprops,{getAccessToken,fetchTasks,deleteTaskAction})(Showtask)







