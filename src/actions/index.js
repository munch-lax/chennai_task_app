import axios from 'axios'
import history from '../history'

export const getAccessToken=()=>async dispatch=>{
    const response= await axios.post('https://api.sloovi.com/login',{
        email : 'stag61@sciencejrq.com',
        password : '12345678'
    })
    
    localStorage.setItem('token',response.data.results.token)


    const response2=await axios.get('https://api.sloovi.com/user',{
        headers:{
            'Authorization': 'Bearer ' + String(response.data.results.token) ,
                'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        
    })

    localStorage.setItem('userid',response.data.results.id)

    
}


export const fetchTasks = ()=> async dispatch=>{

    var token = localStorage.getItem('token')
    const response = await axios.get('https://api.sloovi.com/task/lead_0842513751414e6584a3beea2612c0cc',{headers:{
        'Authorization': 'Bearer ' + String(token) ,
            'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})
    
    dispatch({type:'FETCH_TASKS',payload:response.data.results})
}


export const fetchTask = (id)=> async dispatch=>{

    var token = localStorage.getItem('token')
    const response = await axios.get(`https://api.sloovi.com/task/lead_0842513751414e6584a3beea2612c0cc/${id}`,{headers:{
        'Authorization': 'Bearer ' + String(token) ,
            'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})
    console.log(response,'this are the posts')
    dispatch({type:'FETCH_TASK',payload:response.data.results})
}



export const createTask=(formvalues)=> async (dispatch)=>{
 
    var tim = new Date().toLocaleTimeString();
    var timZone=new Date().getTimezoneOffset()
    var token = localStorage.getItem('token')
    var userid = localStorage.getItem('userid')
    const response = await axios({
        method:'post',
        url:'https://api.sloovi.com/task/lead_0842513751414e6584a3beea2612c0cc',
        
        headers:{
            'Authorization': 'Bearer ' + String(token) ,
            'Accept': 'application/json',
        'Content-Type': 'application/json',

        },
        data:{
            assigned_user:  userid, 
                task_date: formvalues.date,
                task_time: 500,
                is_completed:0,
		        time_zone:timZone,
                task_msg: formvalues.Title
        }
        

    })

    dispatch({type:'CREATE_TASK',payload:response.data.message})
    
    
    
    }




    export const editTaskAction=(formvalues,id)=> async (dispatch)=>{
 
        var todayDate = new Date().toISOString().slice(0, 10);
        var timZone=new Date().getTimezoneOffset()
        var token = localStorage.getItem('token')
        var userid = localStorage.getItem('userid')
        const response = await axios({
            method:'put',
            url:`https://api.sloovi.com/task/lead_0842513751414e6584a3beea2612c0cc/${id}`,
            
            headers:{
                'Authorization': 'Bearer ' + String(token) ,
                'Accept': 'application/json',
            'Content-Type': 'application/json',
    
            },
            data:{
                assigned_user:  userid, 
                    task_date: todayDate,
                    task_time: 500,
                    is_completed:0,
                    time_zone:timZone,
                    task_msg: formvalues.Title
            }
            
    
        })
    
        dispatch({type:'EDIT_TASK',payload:response.data.message})
        
        
        
        }


    export const deleteTaskAction=(id)=> async (dispatch)=>{
 
        
        var token = localStorage.getItem('token')
        var userid = localStorage.getItem('userid')
        const response = await axios({
            method:'delete',
            url:'https://api.sloovi.com/task/lead_0842513751414e6584a3beea2612c0cc/'+String(id),
            
            headers:{
                'Authorization': 'Bearer ' + String(token) ,
                'Accept': 'application/json',
            'Content-Type': 'application/json',
    
            }
    
        })
    
        
        dispatch({type:'DELETE_TASK',payload:response.data.message})
        
        history.push('/')
        }
    

    