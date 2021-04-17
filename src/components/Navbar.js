import react from 'react'
import { Link } from 'react-router-dom'





class NavBar extends react.Component{


    
    

    render(){
        
        return(
            
            <div >
                <div className="ui inverted segment">
                    <div className="ui inverted secondary pointing menu">
                        
                        
                        <Link to ='/'  exact className='ui item' onClick={this.onlinkclick} id='rootz' ><h4 style={{paddingRight:50}}>Show Tasks</h4></Link>
                        <Link to ='/add' exact className='ui item' onClick={this.onlinkclick} id='rootx' ><h4 style={{paddingRight:50}}>Add Task</h4></Link>
                        
                        
                        
                    </div>
                </div>
                
            </div>
        
        )

    
    }
}



export default NavBar