
const initialState = {
    count : 0,
    totalCounted : 0
}
const rootReducer = (state = initialState,action)=>
{
    switch(action.type)
    {
        case "INCREMENT":
            {
                return {
                    ...state,
                    count : state.count + 1,
                    totalCounted : state.totalCounted + 1
                }
            }
        case "DECREMENT":
            {
                return {
                    ...state,
                    count : state.count -1,
                    totalCounted : state.totalCounted + 1
                }
            } 
        default:
            {
                return state;
            }
    }
}

export default rootReducer;
