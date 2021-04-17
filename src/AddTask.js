import react from 'react'
import {connect} from 'react-redux'
import {Field , reduxForm } from 'redux-form'
import { createTask } from './actions'


class AddTask extends react.Component{

rendererror({error,touched}){
    if(touched && error){
        return( <div className="ui error message">
            <div className='header'>{error}</div>
            </div>
           )
    }
}

renderinput=(formprops)=>{
    
    return(<div className='field'>
        <label>{formprops.label}</label>
        <input className='ui input' autoComplete='off' {...formprops.input}  />
        {this.rendererror(formprops.meta)}
    </div>
    )}

onSubmit=(formvalues)=>{
    this.props.createTask(formvalues)
    
}

render(){
    return (
        <div className='ui segment' style={{width:1300,position:'relative',left:35,top:30}}>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
            
            <Field name='Title' component={ this.renderinput } label="Enter Title"/>
            <br></br>
            <Field name='date' component={ this.renderinput } label="Enter Date in YYYY-MM-DD format"/>
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
    if(!formvalues.date){
        errors.date='You must enter the date'
    }
    
    
    return errors;
}



const formwrapped= reduxForm({
    form:'streamform',
    validate
})(AddTask)


const mapstatetoprops=(state)=>{
    
    return{message:state.tasks.message}

}


export default connect(mapstatetoprops,{createTask})(formwrapped)


