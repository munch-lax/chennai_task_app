import react from 'react'
import {connect} from 'react-redux'
import {Field , reduxForm } from 'redux-form'
import {fetchTask,editTaskAction} from '../actions/index'



class EditTask extends react.Component{


    componentDidMount(){
        this.props.fetchTask(this.props.match.params.id)
    }

rendererror({error,touched}){
    if(touched && error){
        return( <div className="ui error message">
            <div className='header'>{error}</div>
            </div>
           )
    }
}

renderinput=(formprops)=>{
    console.log('these are formprops',formprops)
    return(<div className='field'>
        <label>{formprops.label}</label>
        <input className='ui input' autoComplete='off' {...formprops.input} placeholder={this.props.data.task_msg} />
        {this.rendererror(formprops.meta)}
    </div>
    )}

onSubmit=(formvalues)=>{
   this.props.editTaskAction(formvalues,this.props.match.params.id)
    
}

render(){
    return (
        <div className='ui segment' style={{width:1300,position:'relative',left:35,top:30}}>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
            
            <Field name='Title' component={ this.renderinput } label="Enter Title"/>
            <br></br>
            
            <br></br>
            <br></br>
            
            <button className="ui black button">Submit</button>
        </form>
        {this.props.message?<div className='ui positive message'>{this.props.message}</div>:<div></div>}
        </div>
    )
}
}

function validate(formvalues){
    
    const errors={}
    if(!formvalues.Title){
        errors.Title='You must enter a title'

    }
    
    
    return errors;
}



const formwrapped= reduxForm({
    form:'streamform',
    validate
})(EditTask)


const mapstatetoprops=(state)=>{

    
    if(state.tasks.data){
        if(state.tasks.message){
            return {data:state.tasks.data,message:state.tasks.message}
        }
        else{
        return {data:state.tasks.data}
        }
    }
    else{
        return {data:''}
    }
    
    

}


export default connect(mapstatetoprops,{fetchTask,editTaskAction})(formwrapped)