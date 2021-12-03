export const initialState = {
    term: null
} 

export const actionTypes = {
    SET_SEARCH_TERM : "SET_SEARCH_TERM",
}

  const reducer = (state=initialState, action)=>{
      switch(action.types){
          case "SET_SEARCH_TERM" :
              return {
                  ...state,
                  term: action.term
              };
              default :
              return state
      }
  } 

  export default reducer;