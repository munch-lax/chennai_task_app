import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteTaskAction} from '../actions/index'

 class Deletetask extends Component {
     componentDidMount(){
         this.props.deleteTaskAction(this.props.match.params.id)
     }
    render() {
        
        return (
            <h1>
                {this.props.message}
            </h1>
        )
    }
}

const mapstatetoprops=(state)=>{
    
    if(state.tasks.message){
    return {message:state.tasks.message}
    }
    else{
        return null
    }

}

export default connect(mapstatetoprops,{deleteTaskAction})(Deletetask)
