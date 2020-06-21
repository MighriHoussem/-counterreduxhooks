const nameReducer = (state={name : ""},action)=>{
    console.log(state);
    switch(action.type)
    {
        case "UPDATE":
            {
                console.log(action.payload);
                return {
                    ...state,
                    name : action.payload
                }
            }
        default : 
        return state;
    }
}

export default nameReducer;