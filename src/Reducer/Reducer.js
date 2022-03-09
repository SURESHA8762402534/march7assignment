const Reducer = (state, action) => {
   if(state === undefined){
    return {
        count:[0],
        name:"geek"
    }
   }

   const load = action.payload

switch(action.type) {
    case "INCREASE" :
        state.count[0] = state.count[0] + 1
        // state.name = " suresha"
        break;
        default :
            break
}


   return {...state}
}

export default Reducer;