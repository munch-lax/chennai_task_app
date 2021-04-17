

export default (state={data:[]},action)=>{
    switch(action.type){
        case 'FETCH_TASK':
            return {...state,data:action.payload}
        case 'CREATE_TASK':
            return{...state,message:action.payload}
        case 'EDIT_TASK':
            return {...state,message:action.payload}
        case 'DELETE_TASK':
            return  {...state,message:action.payload}
        case 'FETCH_TASKS':
            return {...state,data:action.payload}

        default:
            return state



    }




}